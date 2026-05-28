import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Guard: only initialise client when valid credentials are present
// This prevents a fatal crash when .env is not yet configured
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export type BookingCall = {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  service_type: string;
  message: string;
  preferred_date?: string;
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at?: string;
};

export type SiteVisit = {
  id?: string;
  page: string;
  referrer?: string;
  user_agent?: string;
  visited_at?: string;
};

export async function trackPageVisit(page: string) {
  if (!supabase) return; // Skip if Supabase is not configured
  try {
    await supabase.from('site_visits').insert({
      page,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });
  } catch {
    // Silently fail — tracking is non-critical
  }
}

export async function submitBookingCall(data: BookingCall) {
  if (!supabase) throw new Error('Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.');
  const { error } = await supabase.from('booking_calls').insert({
    ...data,
    status: 'pending',
  });
  if (error) throw error;
}
