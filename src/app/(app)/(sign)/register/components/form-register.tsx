'use client'

import { Input } from '@/components/form/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { StateAndCityFields } from './state-and-city-fields'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/axios'

const formRegisterSchema = z
  .object({
    name: z.string().min(1, 'Obrigatório'),
    email: z.string().email('E-mail inválido.'),
    cep: z
      .string()
      .min(1, 'Obrigatório')
      .transform((value) => value.replaceAll(/-/gm, '')),
    address: z.string().min(1, 'Obrigatório'),
    city: z.string().min(1, 'Obrigatório'),
    state: z.string().min(1, 'Obrigatório'),
    whatsapp: z.string().min(8, 'Número de whatsapp inválido'),
    password: z.string().min(6, 'Precisa de no mínimo 6 dígitos'),
    passwordConfirm: z.string().min(6, 'Precisa de no mínimo 6 dígitos'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'As senhas não coincidem',
    path: ['passwordConfirm'],
  })

export type FormRegisterData = z.infer<typeof formRegisterSchema>

export function FormRegister() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState(false)
  const router = useRouter()

  const formRegister = useForm<FormRegisterData>({
    resolver: zodResolver(formRegisterSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = formRegister

  async function handleRegisterOrg(data: FormRegisterData) {
    try {
      await api.post('/orgs', {
        name: data.name,
        email: data.email,
        password: data.password,
        address: data.address,
        cep: data.cep,
        whatsapp: data.whatsapp,
        city: data.city,
        state: data.state,
      })

      router.push('/login')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <form
      id="register-form"
      onSubmit={handleSubmit(handleRegisterOrg)}
      className="text-secondary-500 flex flex-col gap-8"
    >
      <label className="space-y-2">
        <span className="font-semibold">Nome do responsável</span>
        <Input
          placeholder="John Doe"
          {...register('name')}
          className={errors.name && 'border-red-app focus-visible:ring-0'}
        />
        {errors.name && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.name.message}
          >
            {errors.name.message}
          </span>
        )}
      </label>

      <label className="space-y-2">
        <span className="font-semibold">Email</span>
        <Input
          type="email"
          placeholder="nome@email.com"
          className={errors.email && 'border-red-app focus-visible:ring-0'}
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
        <span className="font-semibold">CEP</span>
        <Input
          placeholder="00000-000"
          className={errors.cep && 'border-red-app focus-visible:ring-0'}
          {...register('cep')}
        />
        {errors.cep && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.cep.message}
          >
            {errors.cep.message}
          </span>
        )}
      </label>

      <label className="space-y-2">
        <span className="font-semibold">Endereço</span>
        <Input
          placeholder="Rua do Limoeiro"
          className={errors.address && 'border-red-app focus-visible:ring-0'}
          {...register('address')}
        />
        {errors.address && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.address.message}
          >
            {errors.address.message}
          </span>
        )}
      </label>

      <FormProvider {...formRegister}>
        <StateAndCityFields />
      </FormProvider>

      <div className="bg-slate-50 overflow-hidden rounded-2.5xl h-38 w-full border border-dashed border-secondary-500/70">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63327.874667864846!2d-35.9397598464724!3d-7.241728890897763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e1dfd800297%3A0x558741639b7ce826!2zVmlsYSBTw610aW8gU8OjbyBKb8Ojbw!5e0!3m2!1spt-BR!2sbr!4v1703692330907!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <label className="space-y-2">
        <span className="font-semibold">Whatsapp</span>
        <Input
          placeholder="(81) 91234-5678"
          className={errors.whatsapp && 'border-red-app focus-visible:ring-0'}
          {...register('whatsapp')}
        />
        {errors.whatsapp && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.whatsapp.message}
          >
            {errors.whatsapp.message}
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

      <label className="space-y-2">
        <div className="font-semibold">Confirmar Senha</div>

        <div
          className={`relative ${
            errors.passwordConfirm
              ? 'border-red-app ring-0'
              : 'border-slate-350 focus-within:ring-2 ring-secondary-400'
          } border rounded-input`}
        >
          <input
            type={isPasswordConfirmVisible ? 'text' : 'password'}
            placeholder="Digite sua senha novamente"
            className={`text-lg outline-none font-semibold rounded-input p-4 pr-14 placeholder:text-secondary-500/75 bg-slate-25 w-full`}
            {...register('passwordConfirm')}
          />
          <button
            className="absolute top-1/2 outline-none focus-visible:ring-2 ring-secondary-400 -translate-y-1/2 text-secondary-500/50 right-6"
            type="button"
            onClick={() =>
              setIsPasswordConfirmVisible(!isPasswordConfirmVisible)
            }
          >
            {isPasswordConfirmVisible ? <Eye /> : <EyeOff />}
          </button>
        </div>

        {errors.passwordConfirm && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.passwordConfirm.message}
          >
            {errors.passwordConfirm.message}
          </span>
        )}
      </label>

      <button
        type="submit"
        className="w-full py-4 text-xl/9 disabled:cursor-not-allowed disabled:opacity-80 disabled:animate-pulse transition-colors duration-300 hover:bg-secondary-400 bg-secondary-500 rounded-2.5xl text-white font-extrabold"
        disabled={isSubmitting}
      >
        Cadastrar
      </button>
    </form>
  )
}
