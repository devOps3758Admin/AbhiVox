"use client";

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Input, Textarea, Select, Button, Card, CardContent } from '../ui';
import { contactInfo, budgetOptions } from '../../data';
import { submitProjectInquiry, type InquiryFormData } from '../../lib/inquiries';

type ViewMode = 'form' | 'review' | 'thankyou';


const timelineOptions = [
  { value: '', label: 'Select target deployment timeline (optional)' },
  { value: 'Immediate (< 1 month)', label: 'Immediate (< 1 month)' },
  { value: '1 - 3 months', label: '1 - 3 months' },
  { value: '3 - 6 months', label: '3 - 6 months' },
  { value: 'Flexible / Planning Stage', label: 'Flexible / Planning Stage' },
];

const initialFormData: InquiryFormData = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  timeline: '',
  projectDetails: '',
};

const validationRules: Record<keyof InquiryFormData, (value: string | undefined) => true | string> = {
  fullName: (value) => (value && value.trim().length >= 2) || 'Full name must be at least 2 characters.',
  company: () => true,
  email: (value) =>
    (value && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value.trim())) ||
    'Please enter a valid work email address.',
  phone: (value) =>
    (value && value.replace(/\D/g, '').length >= 10) ||
    'Please enter a valid phone number with country/area code (at least 10 digits).',
  service: (value) => (value && value.trim().length > 0) || 'Please select a primary engineering service.',
  budget: () => true,
  timeline: () => true,
  projectDetails: (value) =>
    (value && value.trim().length >= 10) ||
    'Please provide at least 10 characters describing your project requirements.',
};

export function ContactForm() {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof InquiryFormData, boolean>>>({});
  const [viewMode, setViewMode] = useState<ViewMode>('form');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState<boolean>(false);
  const [idempotencyKey, setIdempotencyKey] = useState<string>(() =>
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `IDEM-${Date.now()}`
  );

  const validateField = (name: keyof InquiryFormData, value: string | undefined) => {
    const rule = validationRules[name];
    if (rule) {
      const result = rule(value);
      return result === true ? '' : result;
    }
    return '';
  };

  const handleChange = (name: keyof InquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name: keyof InquiryFormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, formData[name]) }));
  };

  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};
    let hasErrors = false;

    (Object.keys(validationRules) as Array<keyof InquiryFormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched(
      (Object.keys(validationRules) as Array<keyof InquiryFormData>).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Partial<Record<keyof InquiryFormData, boolean>>
      )
    );

    return !hasErrors;
  };

  // Switch to review mode so visitor can review details before sending
  const handleReview = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      setErrorMessage('Please fix the required fields marked below before proceeding.');
      return;
    }
    setErrorMessage(null);
    setViewMode('review');
  };

  // Edit details button action: return to form with entered data preserved
  const handleEditDetails = () => {
    setErrorMessage(null);
    setViewMode('form');
  };

  // Submit Project Inquiry (Primary submission action)
  const handleSendDetails = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    if (!validateAll()) {
      setViewMode('form');
      setErrorMessage('Please fix the validation errors marked below before submitting.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await submitProjectInquiry(formData, idempotencyKey);

      if (response.success && response.inquiryId) {
        setInquiryId(response.inquiryId);
        setViewMode('thankyou');
      } else {
        setErrorMessage(
          response.message ||
            'Database transmission error. Your project scope was not recorded. Please retry or contact us directly.'
        );
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network communication error';
      setErrorMessage(`Failed to transmit inquiry: ${msg}. Please retry or contact us directly.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setErrorMessage(null);
    setInquiryId(null);
    setCopiedRef(false);
    setIdempotencyKey(
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `IDEM-${Date.now()}`
    );
    setViewMode('form');
  };

  const handleCopyReference = () => {
    if (!inquiryId) return;
    navigator.clipboard?.writeText(inquiryId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2500);
  };

  return (
    <Card className="bg-[#101211] border border-[#252B28] shadow-2xl relative overflow-hidden">
      {/* Subtle top indicator glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#20B6A5] to-transparent opacity-60" aria-hidden="true" />

      <CardContent className="p-6 sm:p-8 md:p-10">
        {/* DIRECT PHONE & WHATSAPP QUICK ACCESS BANNER */}
        <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-[#252B28] flex items-start gap-3 text-xs text-[#A9B0AC]">
          <span className="w-2 h-2 rounded-full bg-[#20B6A5] mt-1 flex-shrink-0 animate-pulse" aria-hidden="true" />
          <div>
            <span className="text-[#F4F5F1] font-semibold">Direct Engineering Contact:</span> Form submissions connect securely to our database. You can also contact our engineering leads directly at{' '}
            <a href="tel:+917379791375" className="text-[#20B6A5] underline font-mono hover:text-[#3DD5C3]">
              +91 7379791375
            </a>{' '}
            or{' '}
            <a href="tel:+919565535583" className="text-[#20B6A5] underline font-mono hover:text-[#3DD5C3]">
              +91 95655 35583
            </a>
            , or via{' '}
            <a
              href="https://wa.me/917379791375"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#20B6A5] underline font-semibold hover:text-[#3DD5C3]"
            >
              WhatsApp
            </a>.
          </div>
        </div>

        {/* =========================================================================
            STATE 1: THANK YOU CONFIRMATION (Confirmed after DB Insert)
           ========================================================================= */}
        {viewMode === 'thankyou' ? (
          <div className="p-4 sm:p-8 text-center space-y-6" role="status" aria-live="polite">
            <div className="relative inline-flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#20B6A5]/10 border-2 border-[#20B6A5] text-[#20B6A5] flex items-center justify-center shadow-[0_0_30px_rgba(32,182,165,0.3)]">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#20B6A5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/30 uppercase mb-3">
                TRANSMISSION VERIFIED &amp; LOGGED
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F5F1] tracking-tight">
                Thank You for Contacting ABHIVOX TECHNOLOGIES!
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#A9B0AC] max-w-lg mx-auto leading-relaxed">
                Your project inquiry has been submitted successfully. Our team will review your requirements and get back to you soon.
              </p>
            </div>

            {/* Official Inquiry Reference Card */}
            {inquiryId && (
              <div className="max-w-md mx-auto p-4 sm:p-5 rounded-xl bg-[#080A09] border border-[#252B28] text-left font-mono">
                <div className="flex items-center justify-between text-[11px] text-[#A6AEAA] mb-1.5">
                  <span>INQUIRY REFERENCE:</span>
                  <button
                    type="button"
                    onClick={handleCopyReference}
                    className="text-[#20B6A5] hover:underline text-[10px] font-sans font-semibold inline-flex items-center gap-1"
                    aria-label="Copy inquiry reference to clipboard"
                  >
                    {copiedRef ? '✓ Copied' : 'Copy Token'}
                  </button>
                </div>
                <div className="text-sm sm:text-base font-bold text-[#E9E65A] break-all select-all">
                  {inquiryId}
                </div>
                <div className="text-[10px] text-[#7A827E] mt-2">
                  Please keep this reference token for correspondence with our engineering leads.
                </div>
              </div>
            )}

            {/* Confirmation Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="btn btn-primary-teal btn-lg w-full sm:w-auto justify-center group"
              >
                <span>Back to Homepage</span>
                <svg className="w-4 h-4 text-[#080A09] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Button
                variant="secondary"
                onClick={handleReset}
                className="btn-secondary-dark btn-lg w-full sm:w-auto justify-center"
              >
                Submit Another Scope
              </Button>
            </div>
          </div>
        ) : viewMode === 'review' ? (
          /* =========================================================================
             STATE 2: SCOPE REVIEW MODE (Send Details via Email + Edit Details)
             ========================================================================= */
          <div className="space-y-6" role="region" aria-label="Project Scope Review">
            <div className="flex items-center justify-between border-b border-[#252B28] pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#20B6A5]">
                  STEP 02 // REVIEW SCOPE
                </span>
                <h3 className="text-xl font-bold text-[#F4F5F1] mt-1">
                  Verify Transmission Details
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#E9E65A]/10 border border-[#E9E65A]/30 text-[#E9E65A] font-mono text-xs font-semibold">
                READY TO TRANSMIT
              </span>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-xs text-[#EF4444] space-y-1" role="alert" aria-live="assertive">
                <div className="font-bold">Transmission Halted:</div>
                <div>{errorMessage}</div>
              </div>
            )}

            {/* Formatted Technical Preview Terminal */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#080A09] border border-[#252B28] font-mono text-xs space-y-3.5 shadow-inner">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                <span className="text-[#A6AEAA]">NAME:</span>
                <span className="text-[#F4F5F1] font-semibold text-sm">{formData.fullName}</span>
              </div>

              {formData.company && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                  <span className="text-[#A6AEAA]">ORGANIZATION:</span>
                  <span className="text-[#F4F5F1] font-semibold">{formData.company}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                <span className="text-[#A6AEAA]">WORK EMAIL:</span>
                <span className="text-[#20B6A5] font-semibold select-all">{formData.email}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                <span className="text-[#A6AEAA]">PHONE NUMBER:</span>
                <span className="text-[#F4F5F1] font-semibold">{formData.phone}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                <span className="text-[#A6AEAA]">PRIMARY SERVICE:</span>
                <span className="text-[#E9E65A] font-semibold">{formData.service}</span>
              </div>

              {formData.budget && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                  <span className="text-[#A6AEAA]">BUDGET TARGET:</span>
                  <span className="text-[#F4F5F1] font-semibold">{formData.budget}</span>
                </div>
              )}

              {formData.timeline && (
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-white/5">
                  <span className="text-[#A6AEAA]">EXPECTED TIMELINE:</span>
                  <span className="text-[#F4F5F1] font-semibold">{formData.timeline}</span>
                </div>
              )}

              <div className="pt-2">
                <span className="text-[#A6AEAA] block mb-1.5 font-bold uppercase tracking-wider text-[11px]">
                  PROJECT REQUIREMENTS &amp; SCOPE:
                </span>
                <div className="p-3.5 rounded-lg bg-black/60 border border-white/5 text-[#F4F5F1] text-xs leading-relaxed whitespace-pre-wrap break-words font-sans">
                  {formData.projectDetails}
                </div>
              </div>
            </div>

            {/* Action Buttons: "Submit Project Inquiry" & "Edit Details" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                type="button"
                onClick={() => handleSendDetails()}
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="btn-primary-teal btn-lg w-full sm:flex-1 justify-center group min-h-[48px]"
                aria-label="Submit Project Inquiry"
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}</span>
                {!isSubmitting && (
                  <svg className="w-4 h-4 text-[#080A09] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={handleEditDetails}
                disabled={isSubmitting}
                className="btn-secondary-dark btn-lg w-full sm:w-auto justify-center min-h-[48px]"
              >
                Edit Details
              </Button>
            </div>

            <div className="text-center text-[11px] text-[#7A827E] font-mono">
              Clicks transmit securely to Supabase database with automated engineer notification.
            </div>
          </div>
        ) : (
          /* =========================================================================
             STATE 3: INPUT FORM (Default editable state)
             ========================================================================= */
          <form onSubmit={handleSendDetails} noValidate className="space-y-6">
            {errorMessage && (
              <div className="p-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-xs text-[#EF4444] space-y-1" role="alert" aria-live="assertive">
                <div className="font-bold">Notice:</div>
                <div>{errorMessage}</div>
              </div>
            )}

            {/* Honeypot field (hidden from real users to mitigate automated spam) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp-website">Leave this field empty</label>
              <input type="text" id="hp-website" name="_hp_website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Full Name *"
                placeholder="Abhishek Sharma"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                error={touched.fullName ? errors.fullName : undefined}
                disabled={isSubmitting}
                required
                autoComplete="name"
              />

              <Input
                label="Company / Organization"
                placeholder="Enterprise / Business Name (Optional)"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                onBlur={() => handleBlur('company')}
                disabled={isSubmitting}
                autoComplete="organization"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                label="Work Email *"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                error={touched.email ? errors.email : undefined}
                disabled={isSubmitting}
                required
                autoComplete="email"
              />

              <Input
                label="Phone Number *"
                type="tel"
                placeholder="+91 7379791375"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                error={touched.phone ? errors.phone : undefined}
                disabled={isSubmitting}
                required
                autoComplete="tel"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-1">
                <Select
                  label="Primary Service *"
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  onBlur={() => handleBlur('service')}
                  error={touched.service ? errors.service : undefined}
                  disabled={isSubmitting}
                  required
                  options={[
                    { value: '', label: 'Select service area' },
                    ...contactInfo.services.map((s) => ({ value: s, label: s })),
                  ]}
                />
              </div>

              <div className="md:col-span-1">
                <Select
                  label="Budget Target (Optional)"
                  value={formData.budget || ''}
                  onChange={(e) => handleChange('budget', e.target.value)}
                  disabled={isSubmitting}
                  options={budgetOptions}
                />
              </div>

              <div className="md:col-span-1">
                <Select
                  label="Timeline (Optional)"
                  value={formData.timeline || ''}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                  disabled={isSubmitting}
                  options={timelineOptions}
                />
              </div>
            </div>

            <Textarea
              label="Project Scope & Architecture Requirements *"
              placeholder="Describe what you need built, existing tech stack, timeline, scale requirements, or operational bottlenecks..."
              value={formData.projectDetails}
              onChange={(e) => handleChange('projectDetails', e.target.value)}
              onBlur={() => handleBlur('projectDetails')}
              error={touched.projectDetails ? errors.projectDetails : undefined}
              disabled={isSubmitting}
              rows={4}
              required
            />

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="btn-primary-teal w-full sm:w-auto justify-center group min-h-[48px]"
                  aria-label="Submit Project Inquiry"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}</span>
                  {!isSubmitting && (
                    <svg className="w-4 h-4 text-[#080A09] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  onClick={handleReview}
                  disabled={isSubmitting}
                  className="btn-primary-teal w-full sm:w-auto justify-center group min-h-[48px]"
                  aria-label="Review Details First"
                >
                  <span>Review Details First</span>
                  <svg className="w-4 h-4 text-[#080A09] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </Button>
              </div>

              <div className="text-xs text-[#7A827E] font-mono text-center sm:text-right">
                <div>ENCRYPTED // RLS PROTECTED</div>
                <div className="text-[10px] text-[#A6AEAA]">Strict client data privacy</div>
              </div>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
