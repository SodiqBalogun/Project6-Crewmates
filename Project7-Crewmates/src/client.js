import { createClient } from '@supabase/supabase-js';

const URL = "https://dhfbngzidgethspvoodf.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZmJuZ3ppZGdldGhzcHZvb2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0ODIwOTEsImV4cCI6MjA0NjA1ODA5MX0.We7gWTono0LoZ6MU-2V8LabcNgC57H_xURHMaUZZjEU";
const supabase = createClient(URL, API_KEY);

export default supabase;