'use client'

import { useUser } from '@/hooks/use-user'
import { supabase } from '@/lib/supabase/client'

export const SignOutButton = () => {
  const { user } = useUser()
  const handleClick = async () => await supabase.auth.signOut()

  console.log(user)

  if (!user) return null

  return <button onClick={handleClick}>Sign Out</button>
}
