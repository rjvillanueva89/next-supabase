import { type PropsWithChildren } from 'react'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      {children}
    </div>
  )
}

export default AuthLayout
