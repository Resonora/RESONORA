import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mfmlyujgmmylxtjwjtqe.supabase.co';
const supabaseKey = 'sb_publishable_7eSWc14EeyQjYD6HSxXQwA_rYf0GrGA';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);