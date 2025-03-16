import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://dwjmwbjthnyzddvvajli.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3am13Ymp0aG55emRkdnZhamxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNzEyNzQsImV4cCI6MjA1NzY0NzI3NH0.Y6SABE7Mkp3_1dPw3KXe0OUMQj3lLNe5xLfKUZ9hm2s"; // Replace with your actual Supabase Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
