import { clsx, type ClassValue } from 'clsx'
import { redirect } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const encodedRedirect = (
  type: 'error' | 'success',
  path: string,
  message: string
) => {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`)
}
