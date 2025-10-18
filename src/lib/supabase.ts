import { createClient } from '@supabase/supabase-js'

// For demo purposes, we'll use placeholder values
// In production, you would get these from your Supabase project
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Create a mock client for demo purposes if env vars are not set
const isDemo = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = isDemo ? null : createClient(supabaseUrl, supabaseAnonKey)

// Auth helper functions
export const signUp = async (email: string, password: string) => {
  // Demo mode - simulate successful signup
  if (isDemo) {
    return { 
      data: { 
        user: { 
          id: 'demo-user-id', 
          email, 
          created_at: new Date().toISOString() 
        } 
      }, 
      error: null 
    }
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/dashboard`
    }
  })
  return { data, error }
}

export const signIn = async (email: string, password: string) => {
  // Demo mode - simulate successful signin
  if (isDemo) {
    // Simple validation for demo
    if (!email || !password) {
      return { 
        data: null, 
        error: { message: 'Email and password are required' } 
      }
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return { 
        data: null, 
        error: { message: 'Invalid email format' } 
      }
    }
    if (password.length < 6) {
      return { 
        data: null, 
        error: { message: 'Password must be at least 6 characters' } 
      }
    }
    
    return { 
      data: { 
        user: { 
          id: 'demo-user-id', 
          email, 
          created_at: new Date().toISOString() 
        } 
      }, 
      error: null 
    }
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return { data, error }
}

export const signOut = async () => {
  // Demo mode - simulate successful signout
  if (isDemo) {
    return { error: null }
  }

  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  // Demo mode - return null user
  if (isDemo) {
    return { user: null, error: null }
  }

  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}