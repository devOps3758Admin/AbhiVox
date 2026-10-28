/**
 * Supabase Client & Contact Submission Service
 * ABHIVOX TECHNOLOGIES (tech.abhivox.online)
 *
 * Uses standard REST API to avoid unnecessary bundle overhead.
 * Protects data with Supabase Row Level Security (RLS) where anon key
 * only has INSERT permissions (no public reading or modification).
 */

import { submitProjectInquiry, type InquiryFormData, type SubmitInquiryResponse } from './inquiries';

export interface ContactSubmissionPayload {
  fullName: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  budget?: string;
  timeline?: string;
}

export interface SubmissionResult {
  success: boolean;
  isDemoMode?: boolean;
  inquiryId?: string;
  message: string;
  error?: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.startsWith('http'));
}

export async function submitContactInquiry(
  payload: ContactSubmissionPayload
): Promise<SubmissionResult> {
  const formData: InquiryFormData = {
    fullName: payload.fullName,
    company: payload.company,
    email: payload.email,
    phone: payload.phone,
    service: payload.service,
    budget: payload.budget,
    timeline: payload.timeline,
    projectDetails: payload.projectDetails,
  };

  const response: SubmitInquiryResponse = await submitProjectInquiry(formData);

  return {
    success: response.success,
    isDemoMode: response.isConfigurationMode,
    inquiryId: response.inquiryId,
    message: response.message,
    error: response.errors ? JSON.stringify(response.errors) : undefined,
  };
}
