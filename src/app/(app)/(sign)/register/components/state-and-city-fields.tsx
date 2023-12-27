'use client'

import { Cities } from '@/components/select-location/cities'
import { States } from '@/components/select-location/states'
import { Controller, useFormContext } from 'react-hook-form'
import { FormRegisterData } from './form-register'

export function StateAndCityFields() {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<FormRegisterData>()

  const state = watch('state')

  return (
    <div className="flex gap-4">
      <label className="space-y-2">
        <span className="font-semibold">Estado</span>
        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <States
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              className={`${
                errors.state ? 'border-red-app' : 'border-slate-350'
              } bg-slate-50 h-auto p-4 rounded-input font-semibold [&_svg]:text-secondary-500 data-[placeholder]:text-secondary-500/60`}
              classNameContent="bg-slate-50 border border-slate-350 text-secondary-500"
            />
          )}
        />
        {errors.state && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.state.message}
          >
            {errors.state.message}
          </span>
        )}
      </label>

      <label className="space-y-2 w-full">
        <span className="font-semibold">Cidade</span>
        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Cities
              {...field}
              value={field.value}
              onValueChange={field.onChange}
              state={state}
              className={`${
                errors.city ? 'border-red-app' : 'border-slate-350'
              } bg-slate-50 p-4 rounded-input border font-bold flex-1 w-full [&_svg]:text-secondary-500 data-[placeholder]:text-secondary-500/60`}
              classNameContent="bg-slate-50 border border-slate-350 text-secondary-500"
            />
          )}
        />
        {errors.city && (
          <span
            className="text-red-app text-sm block mt-2"
            aria-describedby={errors.city.message}
          >
            {errors.city.message}
          </span>
        )}
      </label>
    </div>
  )
}
