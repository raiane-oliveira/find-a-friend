import { Controller, useFormContext } from 'react-hook-form'
import { SelectInput } from './select-input'

import {
  ageOptions,
  energyOptions,
  environmentOptions,
  independenceOptions,
  sizeOptions,
} from '../select-options'
import { FormCreatePetData } from './form-create-pet'

export function FormCreatePetSelectFields() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormCreatePetData>()

  return (
    <>
      <label className="space-y-2 text-secondary-500">
        <span className="font-semibold">Idade</span>
        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <SelectInput
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Escolha a idade"
              options={ageOptions}
            />
          )}
        />

        {errors.age && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.age.message}
          >
            {errors.age.message}
          </span>
        )}
      </label>

      <label className="space-y-2 text-secondary-500">
        <span className="font-semibold">Porte</span>
        <Controller
          control={control}
          name="size"
          render={({ field }) => (
            <SelectInput
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Escolha o porte"
              options={sizeOptions}
            />
          )}
        />

        {errors.size && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.size.message}
          >
            {errors.size.message}
          </span>
        )}
      </label>

      <label className="space-y-2 text-secondary-500">
        <span className="font-semibold">Nível de energia</span>
        <Controller
          control={control}
          name="energy"
          render={({ field }) => (
            <SelectInput
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Escolha a energia"
              options={energyOptions}
            />
          )}
        />

        {errors.energy && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.energy.message}
          >
            {errors.energy.message}
          </span>
        )}
      </label>

      <label className="space-y-2 text-secondary-500">
        <span className="font-semibold">Nível de independência</span>
        <Controller
          control={control}
          name="independence"
          render={({ field }) => (
            <SelectInput
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Escolha a independência"
              options={independenceOptions}
            />
          )}
        />

        {errors.independence && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.independence.message}
          >
            {errors.independence.message}
          </span>
        )}
      </label>

      <label className="space-y-2 text-secondary-500">
        <span className="font-semibold">Ambiente</span>
        <Controller
          control={control}
          name="environment"
          render={({ field }) => (
            <SelectInput
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Escolha o ambiente"
              options={environmentOptions}
            />
          )}
        />

        {errors.environment && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.environment.message}
          >
            {errors.environment.message}
          </span>
        )}
      </label>
    </>
  )
}
