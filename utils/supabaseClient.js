import { createClient } from "@supabase/supabase-js";

const url = "https://utvbftvgpshgbeeqonfy.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dmJmdHZncHNoZ2JlZXFvbmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM0MDM1NjEsImV4cCI6MTk5ODk3OTU2MX0.K1F5haEgw3lZzjBFlnwLnt3Kqiq0DrnmYbHwCXuNvG8";




export const supabase = createClient(url, key);