-- ==============================================================================
-- Migration: Create project_inquiries table with Row Level Security & Indexes
-- Project: ABHIVOX TECHNOLOGIES (tech.abhivox.online)
-- Created: 2026-10-28
-- ==============================================================================

-- 1. Create table if not exists
CREATE TABLE IF NOT EXISTS project_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  project_description TEXT NOT NULL,
  budget TEXT,
  timeline TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  notification_status TEXT NOT NULL DEFAULT 'pending',
  notification_error TEXT,
  idempotency_key TEXT UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Add validation constraints
ALTER TABLE project_inquiries
  DROP CONSTRAINT IF EXISTS chk_project_inquiries_email,
  ADD CONSTRAINT chk_project_inquiries_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE project_inquiries
  DROP CONSTRAINT IF EXISTS chk_project_inquiries_name_len,
  ADD CONSTRAINT chk_project_inquiries_name_len CHECK (char_length(trim(name)) >= 2);

ALTER TABLE project_inquiries
  DROP CONSTRAINT IF EXISTS chk_project_inquiries_desc_len,
  ADD CONSTRAINT chk_project_inquiries_desc_len CHECK (char_length(trim(project_description)) >= 10);

-- 3. Create high-performance query indexes
CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at
  ON project_inquiries(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_status
  ON project_inquiries(status);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_email
  ON project_inquiries(email);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_notification
  ON project_inquiries(notification_status);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_idempotency
  ON project_inquiries(idempotency_key)
  WHERE idempotency_key IS NOT NULL;

-- 4. Enable Row Level Security (RLS)
ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

-- 5. Strict RLS Policies:
-- (a) Allow public anonymous and authenticated visitors to INSERT new inquiries only
DROP POLICY IF EXISTS "Public can submit project inquiries" ON project_inquiries;
CREATE POLICY "Public can submit project inquiries"
  ON project_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- (b) Explicitly DENY public read/update/delete to protect client privacy
-- Public cannot SELECT, UPDATE, or DELETE any records.
-- Only service_role (backend admin key) or dashboard superusers can view inquiries.
DROP POLICY IF EXISTS "Service role has full access to project inquiries" ON project_inquiries;
CREATE POLICY "Service role has full access to project inquiries"
  ON project_inquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 6. Trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_project_inquiries_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_project_inquiries_timestamp ON project_inquiries;
CREATE TRIGGER trg_project_inquiries_timestamp
  BEFORE UPDATE ON project_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_project_inquiries_timestamp();

-- 7. Comments for schema self-documentation
COMMENT ON TABLE project_inquiries IS 'Stores client project scope transmissions and technical inquiries for ABHIVOX TECHNOLOGIES';
COMMENT ON COLUMN project_inquiries.id IS 'Unique UUID identifier and client reference token';
COMMENT ON COLUMN project_inquiries.status IS 'Pipeline status: new, reviewing, contacted, closed';
COMMENT ON COLUMN project_inquiries.notification_status IS 'Email dispatch status: pending, sent, failed';
COMMENT ON COLUMN project_inquiries.idempotency_key IS 'Unique client request token preventing duplicate form submissions';
