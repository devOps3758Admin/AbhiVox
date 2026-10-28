/**
 * Secure Backend Handler for Project Inquiries
 * ABHIVOX TECHNOLOGIES (tech.abhivox.online)
 *
 * Handles:
 * 1. Payload validation & request size constraints
 * 2. Rate limiting & honeypot spam protection
 * 3. Supabase database insertion with RLS & idempotency
 * 4. Asynchronous email notification dispatch via Resend
 * 5. Reliable fallback handling (database record preserved on email failure)
 */

export interface InquiryPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  project_description: string;
  budget?: string;
  timeline?: string;
  idempotency_key?: string;
  _hp_website?: string; // Honeypot field for bot mitigation
}

export interface InquiryResult {
  success: boolean;
  inquiryId?: string;
  message: string;
  emailSent?: boolean;
  errors?: Record<string, string>;
  debugNotice?: string;
}

// In-memory rate limiting store: IP -> timestamps
const rateLimitStore = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up stale rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitStore.entries()) {
    const valid = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      rateLimitStore.set(ip, valid);
    }
  }
}, 5 * 60 * 1000).unref?.();

function checkRateLimit(clientIp: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitStore.get(clientIp) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recent.push(now);
  rateLimitStore.set(clientIp, recent);
  return true;
}

export async function processInquirySubmission(
  rawBody: unknown,
  clientIp = '127.0.0.1'
): Promise<{ status: number; body: InquiryResult }> {
  // 1. Check Rate Limit
  if (!checkRateLimit(clientIp)) {
    return {
      status: 429,
      body: {
        success: false,
        message: 'Too many submissions from this connection. Please wait a few minutes before trying again.',
      },
    };
  }

  // 2. Validate payload type
  if (!rawBody || typeof rawBody !== 'object') {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Invalid request body. Expected JSON object.',
      },
    };
  }

  const payload = rawBody as Partial<InquiryPayload>;

  // 3. Honeypot check (Bots fill hidden fields)
  if (payload._hp_website && payload._hp_website.trim().length > 0) {
    // Silently reject or simulate ok
    return {
      status: 200,
      body: {
        success: true,
        inquiryId: `BOT-${Date.now().toString(36).toUpperCase()}`,
        message: 'Inquiry received.',
      },
    };
  }

  // 4. Server-Side Field Validation
  const errors: Record<string, string> = {};

  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  if (!name || name.length < 2) {
    errors.name = 'Full name must be at least 2 characters.';
  } else if (name.length > 100) {
    errors.name = 'Full name must not exceed 100 characters.';
  }

  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid work email address.';
  } else if (email.length > 100) {
    errors.email = 'Email address must not exceed 100 characters.';
  }

  const phone = typeof payload.phone === 'string' ? payload.phone.trim() : '';
  const digitsOnly = phone.replace(/\D/g, '');
  if (!phone || digitsOnly.length < 10) {
    errors.phone = 'Please provide a valid phone number (at least 10 digits).';
  } else if (phone.length > 30) {
    errors.phone = 'Phone number is too long (max 30 characters).';
  }

  const service = typeof payload.service === 'string' ? payload.service.trim() : '';
  if (!service || service.length < 2) {
    errors.service = 'Please select a required engineering service area.';
  }

  const description =
    typeof payload.project_description === 'string' ? payload.project_description.trim() : '';
  if (!description || description.length < 10) {
    errors.project_description = 'Please describe your project requirements in at least 10 characters.';
  } else if (description.length > 5000) {
    errors.project_description = 'Project description exceeds 5,000 characters limit.';
  }

  const company = typeof payload.company === 'string' ? payload.company.trim().slice(0, 150) : null;
  const budget = typeof payload.budget === 'string' ? payload.budget.trim().slice(0, 100) : null;
  const timeline = typeof payload.timeline === 'string' ? payload.timeline.trim().slice(0, 100) : null;
  const idempotencyKey =
    typeof payload.idempotency_key === 'string' ? payload.idempotency_key.trim().slice(0, 64) : null;

  if (Object.keys(errors).length > 0) {
    return {
      status: 400,
      body: {
        success: false,
        message: 'Validation failed. Please review the highlighted fields.',
        errors,
      },
    };
  }

  // 5. Database Insertion (Supabase)
  const supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    'https://zlojnmjjgupcktygszxi.supabase.co';

  // Use service role if present, fallback to anon key with INSERT RLS policy
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    'sb_publishable_ajKec0RplnzcCPdqHz9Eaw_KzBklKVN';

  const insertRecord = {
    name,
    company,
    email,
    phone,
    service,
    project_description: description,
    budget,
    timeline,
    status: 'new',
    notification_status: 'pending',
    idempotency_key: idempotencyKey,
    created_at: new Date().toISOString(),
  };

  let inquiryId = `ABX-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  let dbSuccess = false;
  let dbErrorDetail: string | undefined;

  try {
    const endpoint = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/project_inquiries`;

    // Attempt direct insertion into Supabase
    const dbResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        Prefer: 'return=representation', // returns the newly created row with generated id
      },
      body: JSON.stringify(insertRecord),
    });

    if (dbResponse.ok) {
      const data = await dbResponse.json();
      if (Array.isArray(data) && data[0]?.id) {
        inquiryId = data[0].id;
      }
      dbSuccess = true;
    } else if (dbResponse.status === 409) {
      // Idempotent duplicate: inquiry was already recorded
      if (idempotencyKey) {
        const getUrl = `${endpoint}?idempotency_key=eq.${encodeURIComponent(idempotencyKey)}&select=id`;
        const getRes = await fetch(getUrl, {
          headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
        });
        if (getRes.ok) {
          const rows = (await getRes.json()) as Array<{ id: string }> | null;
          if (Array.isArray(rows) && rows[0]?.id) {
            inquiryId = rows[0].id;
          }
        }
      }
      dbSuccess = true;
    } else {
      const errText = await dbResponse.text();
      dbErrorDetail = `Supabase ${dbResponse.status}: ${errText}`;
      console.error('[InquiryHandler] Database insertion failed:', dbErrorDetail);
    }
  } catch (err: unknown) {
    dbErrorDetail = err instanceof Error ? err.message : String(err);
    console.error('[InquiryHandler] Network error reaching Supabase:', dbErrorDetail);
  }

  // If database insert failed, return honest error
  if (!dbSuccess) {
    return {
      status: 503,
      body: {
        success: false,
        message:
          'Unable to record your project scope in the database. Please try again in a moment or contact our engineering leads directly.',
        debugNotice: dbErrorDetail,
      },
    };
  }

  // 6. Email Notification to Abhishek (Only after DB success)
  const notificationRecipient =
    process.env.CONTACT_NOTIFICATION_EMAIL || 'abhishek@abhivox.online';
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom =
    process.env.RESEND_FROM_EMAIL || 'ABHIVOX TECHNOLOGIES <inquiries@tech.abhivox.online>';

  let emailSent = false;
  let emailErrorMsg: string | undefined;

  if (resendApiKey) {
    try {
      const formattedDate = new Date().toUTCString();
      const subject = 'New Project Inquiry — ABHIVOX TECHNOLOGIES';

      const textBody = `
============================================================
NEW PROJECT INQUIRY — ABHIVOX TECHNOLOGIES
============================================================
Inquiry Reference: ${inquiryId}
Timestamp:         ${formattedDate}

CLIENT DETAILS:
- Full Name:       ${name}
- Company:         ${company || 'Not Specified'}
- Work Email:      ${email}
- Phone:           ${phone}
- Service Area:    ${service}
- Budget:          ${budget || 'Flexible / Need a Quote'}
- Timeline:        ${timeline || 'Flexible'}

PROJECT SCOPE & REQUIREMENTS:
${description}

============================================================
Received via https://tech.abhivox.online/contact
Recorded in database: project_inquiries
============================================================
      `.trim();

      const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080A09; color: #F4F5F1; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background-color: #101211; border: 1px solid #252B28; border-radius: 16px; padding: 32px; }
    .header { border-bottom: 1px solid #252B28; padding-bottom: 20px; margin-bottom: 24px; }
    .tag { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-family: monospace; font-size: 11px; font-weight: bold; background: rgba(32,182,165,0.15); color: #20B6A5; border: 1px solid rgba(32,182,165,0.3); }
    h1 { font-size: 20px; font-weight: 800; color: #F4F5F1; margin: 12px 0 4px 0; }
    .ref { font-family: monospace; font-size: 12px; color: #E9E65A; }
    .section-title { font-size: 11px; font-family: monospace; color: #A6AEAA; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 24px; margin-bottom: 12px; }
    .row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; }
    .label { color: #A9B0AC; }
    .val { color: #F4F5F1; font-weight: 600; text-align: right; }
    .scope-box { background-color: #080A09; border: 1px solid #252B28; border-radius: 8px; padding: 16px; font-size: 13px; line-height: 1.6; color: #F4F5F1; white-space: pre-wrap; word-break: break-word; margin-top: 8px; }
    .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #252B28; font-size: 11px; color: #7A827E; font-family: monospace; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="tag">NEW INQUIRY TRANSMITTED</span>
      <h1>ABHIVOX TECHNOLOGIES</h1>
      <div class="ref">REF ID: ${inquiryId} · ${formattedDate}</div>
    </div>

    <div class="section-title">Client Contact &amp; Parameters</div>
    <div class="row"><span class="label">Client Name</span><span class="val">${escapeHtml(name)}</span></div>
    <div class="row"><span class="label">Company</span><span class="val">${escapeHtml(company || 'Not Specified')}</span></div>
    <div class="row"><span class="label">Work Email</span><span class="val"><a href="mailto:${escapeHtml(email)}" style="color: #20B6A5;">${escapeHtml(email)}</a></span></div>
    <div class="row"><span class="label">Phone Line</span><span class="val"><a href="tel:${escapeHtml(phone)}" style="color: #20B6A5;">${escapeHtml(phone)}</a></span></div>
    <div class="row"><span class="label">Service Focus</span><span class="val" style="color: #E9E65A;">${escapeHtml(service)}</span></div>
    <div class="row"><span class="label">Budget Range</span><span class="val">${escapeHtml(budget || 'Flexible / Need a Quote')}</span></div>
    <div class="row"><span class="label">Timeline</span><span class="val">${escapeHtml(timeline || 'Flexible')}</span></div>

    <div class="section-title">Project Scope &amp; Architecture Requirements</div>
    <div class="scope-box">${escapeHtml(description)}</div>

    <div class="footer">
      Transmitted securely via https://tech.abhivox.online/contact · Database Status: RECORDED
    </div>
  </div>
</body>
</html>
      `.trim();

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [notificationRecipient],
          reply_to: email,
          subject,
          text: textBody,
          html: htmlBody,
        }),
      });

      if (resendRes.ok) {
        emailSent = true;
      } else {
        const errText = await resendRes.text();
        emailErrorMsg = `Resend ${resendRes.status}: ${errText}`;
        console.warn('[InquiryHandler] Resend notification failed:', emailErrorMsg);
      }
    } catch (err: unknown) {
      emailErrorMsg = err instanceof Error ? err.message : String(err);
      console.warn('[InquiryHandler] Network error calling Resend:', emailErrorMsg);
    }

    // Update notification_status in Supabase asynchronously
    try {
      const updateEndpoint = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/project_inquiries?id=eq.${encodeURIComponent(inquiryId)}`;
      await fetch(updateEndpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({
          notification_status: emailSent ? 'sent' : 'failed',
          notification_error: emailErrorMsg || null,
        }),
      });
    } catch (patchErr) {
      console.error('[InquiryHandler] Failed to update notification_status:', patchErr);
    }
  } else {
    // Resend API key is not configured in this environment
    console.info(
      `[InquiryHandler] Inquiry ${inquiryId} saved to database. Email notification skipped (RESEND_API_KEY not configured). Target recipient: ${notificationRecipient}`
    );
  }

  // 7. Successful Response to Visitor
  return {
    status: 200,
    body: {
      success: true,
      inquiryId,
      emailSent,
      message:
        'Your project inquiry has been submitted successfully. Our team will review your requirements and get back to you soon.',
    },
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
