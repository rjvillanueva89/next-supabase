import { SignOutButton } from '@/components/auth/sign-out-button'
import { supabase } from '@/lib/supabase/server'

const ProtectedPage = async () => {
  const user = await supabase.auth.getUser()

  console.log(user)

  return (
    <div>
      Protected Page <SignOutButton />
    </div>
  )
}

export default ProtectedPage
