import { SignUpForm } from '@/components/auth/sign-up-form'

const SignUpPage = () => {
  return (
    <div className="w-96 flex flex-col bg-gray-50 p-8 rounded-sm">
      <h1 className="text-2xl mb-4">Sign up</h1>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
