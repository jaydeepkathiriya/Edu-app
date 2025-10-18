import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if we're in demo mode
    const isDemo = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY
    
    if (isDemo) {
      // Demo mode - just set loading to false
      setLoading(false)
      return
    }

    // Only set up Supabase auth if we have proper credentials
    if (supabase) {
      // Get initial session
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      })

      // Listen for auth changes
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      })

      return () => subscription.unsubscribe()
    } else {
      setLoading(false)
    }
  }, [])

  const signUp = async (email: string, password: string) => {
    try {
      const result = await import('../lib/supabase').then(module => module.signUp(email, password))
      
      // If successful and we have a user, set it in state
      if (result.data?.user && !result.error) {
        setUser(result.data.user as User)
      }
      
      return result
    } catch (error) {
      return { data: null, error: { message: 'Authentication service unavailable' } }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const result = await import('../lib/supabase').then(module => module.signIn(email, password))
      
      // If successful and we have a user, set it in state
      if (result.data?.user && !result.error) {
        setUser(result.data.user as User)
      }
      
      return result
    } catch (error) {
      return { data: null, error: { message: 'Authentication service unavailable' } }
    }
  }

  const signOut = async () => {
    try {
      const result = await import('../lib/supabase').then(module => module.signOut())
      
      // Clear user state
      setUser(null)
      setSession(null)
      
      return result
    } catch (error) {
      return { error: { message: 'Sign out failed' } }
    }
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}