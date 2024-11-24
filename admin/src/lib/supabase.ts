import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rjuttqfoybhjjslvmkhj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdXR0cWZveWJoampzbHZta2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNzU3MDAsImV4cCI6MjA0Nzk1MTcwMH0.N1UrQJpaciY45BX0YLWT-H8n3tNwd3oSiu9Sf25h-Dk";

export const supabase = createClient(supabaseUrl, supabaseKey);