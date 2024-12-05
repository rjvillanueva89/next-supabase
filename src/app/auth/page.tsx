'use client'

import { supabase } from '@/lib/supabase/client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const AuthPage = () => {
  return (
    <div className="w-96 p-4 bg-gray-50 rounded-sm">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </div>
  )
}

export default AuthPage
