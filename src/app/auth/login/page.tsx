import { LoginForm } from '@/components/auth/login-form'

const LoginPage = () => {
  return (
    <div className="w-96 flex flex-col bg-gray-50 p-8 rounded-sm">
      <h1 className="text-2xl mb-4">Login</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage
