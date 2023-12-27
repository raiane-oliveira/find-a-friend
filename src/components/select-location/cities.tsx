'use-client'

import { Select } from '@/components/form/select'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CaretDown } from 'phosphor-react'

import * as SelectPrimitive from '@radix-ui/react-select'
import { twMerge } from 'tailwind-merge'

interface CitiesProps extends SelectPrimitive.SelectProps {
  state: string
  className?: string
  classNameContent?: string
}

export function Cities({
  state,
  className,
  classNameContent,
  ...props
}: CitiesProps) {
  const { data: responseCities, isLoading: isLoadingCities } = useQuery({
    queryKey: ['cities', state],
    queryFn: async () => {
      const res = await axios(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        {
          method: 'POST',
          data: {
            country: 'Brazil',
            state,
          },
        },
      )

      return res.data
    },
    enabled: !!state,
  })

  const cities: string[] = responseCities?.data ?? []

  return (
    <Select.Root {...props}>
      <Select.Trigger
        placeholder={isLoadingCities ? 'Carregando...' : 'Sua cidade'}
        className={twMerge(
          `rounded-2.5xl disabled:cursor-not-allowed items-center ring-offset-1 data-[placeholder]:text-white/70 ring-white/70 outline-none focus-visible:ring-2 py-5 w-[17.5rem] justify-center bg-red-app flex gap-2 font-extrabold text-xl/8`,
          className,
        )}
        disabled={!state || isLoadingCities}
        data-select-cities-trigger
      >
        <CaretDown weight="bold" className="w-4 h-4 text-white" />
      </Select.Trigger>

      <Select.Content
        data-select-cities-wrapper
        className={twMerge(
          'bg-red-app max-h-48 py-2 text-white rounded-lg overflow-hidden',
          classNameContent,
        )}
      >
        {cities.map((city) => (
          <Select.Item
            className="cursor-pointer font-semibold outline-none p-4 transition-colors hover:bg-primary"
            value={city}
            text={city}
            key={city}
          />
        ))}
      </Select.Content>
    </Select.Root>
  )
}
