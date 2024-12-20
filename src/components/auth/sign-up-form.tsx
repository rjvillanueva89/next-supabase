'use client'

import { supabase } from '@/lib/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const FormSchema = z.object({
  email: z.string().email({ message: 'Valid email is required' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters',
  }),
})

type FormData = z.infer<typeof FormSchema>

export const SignUpForm = () => {
  const [isSuccessful, setIsSuccessful] = useState(false)
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  })
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted },
  } = form

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      console.log(error)
      return
    }

    setIsSuccessful(true)
  })

  if (isSuccessful) {
    return <div>Sign up successful</div>
  }

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col gap-4">
      <FormField
        control={control}
        name="email"
        render={() => (
          <FormItem>
            <FormControl>
              <Input type="email" placeholder="Email" {...register('email')} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="password"
        render={() => (
          <FormItem>
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                {...register('password')}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" disabled={isSubmitting || isSubmitted}>
        Submit
      </Button>
    </Form>
  )
}
