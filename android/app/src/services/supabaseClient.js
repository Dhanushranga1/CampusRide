import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tgclaahavzydssukuhhv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnY2xhYWhhdnp5ZHNzdWt1aGh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE5MzA3ODgsImV4cCI6MjAzNzUwNjc4OH0.a61nBfdq62xvMVkTfzp_ssRVqcyNnlsW8kWBJBjZ0ck';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
