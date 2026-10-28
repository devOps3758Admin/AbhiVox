/**
 * Project Inquiries Client Service
 * ABHIVOX TECHNOLOGIES (tech.abhivox.online)
 *
 * Communicates with the secure backend endpoint /api/inquiries
 * and provides client-side idempotency, validation, and direct Supabase fallback.
 */

export interface InquiryFormData {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  timeline?: string;
  projectDetails: string;
}

export interface SubmitInquiryResponse {
  success: boolean;
  inquiryId?: string;
  message: string;
  errors?: Record<string, string>;
  isConfigurationMode?: boolean;
}

// Generate a resilient client-side idempotency key for this transmission attempt
function generateIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `IDEM-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

export async function submitProjectInquiry(
  formData: InquiryFormData,
  cachedIdempotencyKey?: string
): Promise<SubmitInquiryResponse> {
  const idempotencyKey = cachedIdempotencyKey || generateIdempotencyKey();

  const payload = {
    name: formData.fullName.trim(),
    company: formData.company?.trim() || null,
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    service: formData.service.trim(),
    budget: formData.budget?.trim() || null,
    timeline: formData.timeline?.trim() || null,
    project_description: formData.projectDetails.trim(),
    idempotency_key: idempotencyKey,
  };

  // 1. Attempt secure backend endpoint (/api/inquiries)
  try {
    const response = await fetch('/api/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.success) {
      return {
        success: true,
        inquiryId: data.inquiryId,
        message:
          data.message ||
          'Your project inquiry has been submitted successfully. Our team will review your requirements and get back to you soon.',
      };
    }

    if (response.status === 400 && data.errors) {
      return {
        success: false,
        errors: data.errors,
        message: data.message || 'Validation error. Please check the marked fields.',
      };
    }

    if (response.status === 429) {
      return {
        success: false,
        message: data.message || 'Too many submissions. Please wait a few minutes before retrying.',
      };
    }

    // If endpoint exists but returned a specific error
    if (!response.ok && response.status !== 404) {
      return {
        success: false,
        message:
          data.message ||
          'Unable to record project scope to the database. Please try again or reach out to us directly.',
      };
    }
  } catch {
    // If network to /api/inquiries failed, proceed to direct Supabase fallback below
  }

  // 2. Direct Supabase Fallback (For static deployments without serverless functions)
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
    try {
      const endpoint = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/project_inquiries`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          name: payload.name,
          company: payload.company,
          email: payload.email,
          phone: payload.phone,
          service: payload.service,
          budget: payload.budget,
          timeline: payload.timeline,
          project_description: payload.project_description,
          idempotency_key: idempotencyKey,
          status: 'new',
          notification_status: 'pending',
          created_at: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        const rows = await res.json().catch(() => []);
        const insertedId = rows?.[0]?.id || `ABX-${Date.now().toString(36).toUpperCase()}`;

        return {
          success: true,
          inquiryId: insertedId,
          message:
            'Your project inquiry has been submitted successfully. Our team will review your requirements and get back to you soon.',
        };
      }

      const errText = await res.text();
      return {
        success: false,
        message: `Database submission failed: ${errText || res.statusText}. Please reach us directly at +91 7379791375.`,
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      return {
        success: false,
        message: `Network error connecting to database: ${msg}. Please reach our engineering leads directly.`,
      };
    }
  }

  // 3. Honest Notice when environment credentials are not present
  return {
    success: false,
    isConfigurationMode: true,
    message:
      'Backend database connection is not configured in this environment. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set, or reach us directly at +91 7379791375.',
  };
}
