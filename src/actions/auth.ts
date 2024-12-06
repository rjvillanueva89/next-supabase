'use server'

import { supabase } from '@/lib/supabase/server'
import { encodedRedirect } from '@/lib/utils'

export const signIn = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    encodedRedirect('error', '/auth/login', error.message)
  }

  encodedRedirect('success', '/protected', 'Sign in successful')
}

export const signOut = async () => {
  await supabase.auth.signOut()
  encodedRedirect('success', '/auth/login', 'Sign out successful')
}
