'use client'

import { signOut } from '@/actions/auth'

export const SignOutButton = () => {
  const handleClick = async () => await signOut()
  return <button onClick={handleClick}>Sign Out</button>
}
