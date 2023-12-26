'use client'

import { api } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeOff, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginFormSchema = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(6, 'Senha inválida'),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function FormLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })
  const router = useRouter()

  async function handleLogin(data: LoginFormData) {
    try {
      const response = await api.post('/sessions', {
        data,
      })

      console.log(response)
      router.push('/')
    } catch (err) {
      alert(
        'Não conseguimos fazer login na aplicação. Cheque suas credenciais ou tente novamente mais tarde.',
      )
    }
  }

  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      id="login-form"
      className="mt-24 mb-16 flex flex-col gap-4"
    >
      <label className="space-y-2">
        <div className="font-semibold">Email</div>
        <input
          type="email"
          placeholder="nome@email.com"
          className={`text-lg ${
            errors.email
              ? 'border-red-app'
              : 'border-slate-350 focus-visible:ring-2 ring-secondary-400'
          } outline-none font-semibold rounded-input p-4 placeholder:text-secondary-500/75 border bg-slate-25 w-full`}
          {...register('email')}
        />

        {errors.email && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.email.message}
          >
            {errors.email.message}
          </span>
        )}
      </label>

      <label className="space-y-2">
        <div className="font-semibold">Senha</div>

        <div
          className={`relative ${
            errors.password
              ? 'border-red-app ring-0'
              : 'border-slate-350 focus-within:ring-2 ring-secondary-400'
          } border rounded-input`}
        >
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Digite sua senha"
            className={`text-lg outline-none font-semibold rounded-input p-4 pr-14 placeholder:text-secondary-500/75 bg-slate-25 w-full`}
            {...register('password')}
          />
          <button
            className="absolute top-1/2 outline-none focus-visible:ring-2 ring-secondary-400 -translate-y-1/2 text-secondary-500/50 right-6"
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>

        {errors.password && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.password.message}
          >
            {errors.password.message}
          </span>
        )}
      </label>
    </form>
  )
}
