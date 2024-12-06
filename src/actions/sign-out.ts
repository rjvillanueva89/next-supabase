'use server'

import { supabase } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export const signOut = async () => {
  const { error } = await supabase.auth.signOut({ scope: 'local' })

  console.log(error)

  redirect('/auth/login')
}
