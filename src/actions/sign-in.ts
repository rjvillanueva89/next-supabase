'use server'

import { supabase } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  console.log(data)
  console.log(error)

  redirect('/protected')
}
