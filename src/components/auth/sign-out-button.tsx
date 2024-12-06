'use client'

import { signOut } from '@/actions/sign-out'

export const SignOutButton = () => {
  const handleClick = async () => await signOut()
  return <button onClick={handleClick}>Sign Out</button>
}
