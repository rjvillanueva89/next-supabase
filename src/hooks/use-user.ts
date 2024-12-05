import { supabase } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  return { user }
}
