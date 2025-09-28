import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cyhcdvkstwfpnqdjpcle.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5aGNkdmtzdHdmcG5xZGpwY2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NTc1MTgsImV4cCI6MjA3NDUzMzUxOH0.AnQ0yNQygrwoAsBShku5abNuAg3pAdhn4NqTOYt1z9U'


export const supabase = createClient(supabaseUrl, supabaseKey)

export type Review = {
  id?: number
  name: string
  rating: number
  comment: string
  created_at?: string
}