'use client'

import { Input } from '@/components/form/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { UploadPhotos } from './upload-photos'
import { AddAdoptionRequirements } from './add-adoption-requirements'
import { FormCreatePetSelectFields } from './form-create-pet-select-fields'
import { api } from '@/lib/axios'
import { useOrgDetails } from './org-details-context'
import { AxiosError } from 'axios'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_IMAGE_FORMATS = ['image/jpeg', 'image/jpg', 'image/png']

const formCreatePetSchema = z.object({
  name: z.string().min(1, 'Obrigatório'),
  about: z
    .string()
    .min(1, 'Obrigatório')
    .max(300, 'Ultrapassou o limite de 300 caracteres'),
  age: z.enum(['1', '6', '10', '15'], {
    required_error: 'Obrigatório',
  }),
  size: z.string({
    required_error: 'Obrigatório',
  }),
  energy: z.string({
    required_error: 'Obrigatório',
  }),
  independence: z.string({
    required_error: 'Obrigatório',
  }),
  environment: z.string({
    required_error: 'Obrigatório',
  }),
  photos: z
    .any()
    .transform((files) => files && Array.from(files))
    .refine(
      (files: File[]) =>
        files &&
        files.every((file) => ACCEPTED_IMAGE_FORMATS.includes(file.type)),
      'Formato de imagem inválido',
    )
    .refine(
      (files: File[]) =>
        files && files.every((file) => file.size <= MAX_FILE_SIZE),
      'Tamanho máximo de imagem é 5MB',
    )
    .refine(
      (files) => files && files.length <= 6,
      'Adicione no máximo até 6 imagens',
    ),
  requirements: z
    .array(
      z.object({
        name: z.string(),
      }),
    )
    .max(6, 'Você já atingiu o número de máximo de requisitos'),
})

export type FormCreatePetData = z.infer<typeof formCreatePetSchema>

export function FormCreatePet() {
  const { org } = useOrgDetails()

  const formCreatePet = useForm<FormCreatePetData>({
    resolver: zodResolver(formCreatePetSchema),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = formCreatePet

  async function handleCreatePet(data: FormCreatePetData) {
    const {
      name,
      about,
      age,
      size,
      independence,
      environment,
      energy,
      requirements,
    } = data

    try {
      const {
        data: { petId },
      } = await api.post<{ petId: string }>('/pets', {
        name,
        about,
        age,
        size,
        independence,
        environment,
        energy,
        city: org.city,
        state: org.state,
      })

      await Promise.all([
        api.post(`/pets/${petId}/upload-image`, {
          url: 'http://localhost:3000/image.png',
        }),
        api.post(`/pets/${petId}/requirements`, {
          requirements,
        }),
      ])

      alert('Pet criado com sucesso!')
      reset()
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.message)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreatePet)}
      className="flex flex-col gap-6"
      encType="multipart/form-data"
    >
      <label className="space-y-2 text-secondary-500">
        <span className="font-semibold">Nome</span>
        <Input {...register('name')} />

        {errors.name && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.name.message}
          >
            {errors.name.message}
          </span>
        )}
      </label>

      <label className="space-y-2 text-secondary-500">
        <span className="font-semibold">Sobre</span>
        <textarea
          {...register('about')}
          className={`border bg-slate-50 border-slate-350 focus:ring-secondary-500 font-semibold p-4 text-lg outline-0 focus:ring-2 rounded-input min-h-[7.5rem] block w-full resize-none`}
        />

        {errors.about && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.about.message}
          >
            {errors.about.message}
          </span>
        )}
      </label>

      <FormProvider {...formCreatePet}>
        <FormCreatePetSelectFields />
        <UploadPhotos />
        <AddAdoptionRequirements />
      </FormProvider>

      <button
        type="submit"
        className="mt-4 rounded-2.5xl disabled:cursor-progress disabled:opacity-80 bg-action font-extrabold text-lg/6 transition-colors hover:bg-action/80 text-secondary-500 py-5"
        disabled={isSubmitting}
      >
        Confirmar
      </button>
    </form>
  )
}
