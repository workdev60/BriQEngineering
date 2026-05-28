-- BriQ Engineering — Supabase Database Setup
-- Run these SQL statements in your Supabase SQL editor

-- 1. Booking Calls table (stores all client consultation requests)
CREATE TABLE IF NOT EXISTS booking_calls (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  service_type TEXT NOT NULL,
  message TEXT NOT NULL,
  preferred_date DATE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Site Visits table (tracks all page views)
CREATE TABLE IF NOT EXISTS site_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  visited_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security
ALTER TABLE booking_calls ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_visits ENABLE ROW LEVEL SECURITY;

-- 4. Allow public inserts (clients can submit bookings and visit tracking)
CREATE POLICY "Allow public insert on booking_calls"
  ON booking_calls FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public insert on site_visits"
  ON site_visits FOR INSERT TO anon WITH CHECK (true);

-- 5. Allow authenticated reads (for admin dashboard)
-- Since the admin page uses password auth on the frontend, we allow anon reads too.
-- For production, replace with proper Supabase Auth.
CREATE POLICY "Allow anon read on booking_calls"
  ON booking_calls FOR SELECT TO anon USING (true);

CREATE POLICY "Allow anon update on booking_calls"
  ON booking_calls FOR UPDATE TO anon USING (true);

CREATE POLICY "Allow anon read on site_visits"
  ON site_visits FOR SELECT TO anon USING (true);
