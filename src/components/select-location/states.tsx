'use-client'

import { Select } from '@/components/form/select'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CaretDown } from 'phosphor-react'

import * as SelectPrimitive from '@radix-ui/react-select'
import { twMerge } from 'tailwind-merge'

interface State {
  name: string
  state_code: string
}

interface StatesProps extends SelectPrimitive.SelectProps {
  className?: string
}

export function States({ className, ...props }: StatesProps) {
  const { data: responseState } = useQuery({
    queryKey: ['states'],
    queryFn: async () => {
      const res = await axios(
        'https://countriesnow.space/api/v0.1/countries/states',
        {
          method: 'POST',
          data: {
            country: 'Brazil',
          },
        },
      )

      return res.data
    },
  })

  const states: State[] = responseState?.data.states ?? []

  return (
    <Select.Root {...props}>
      <Select.Trigger
        className={twMerge(
          `flex ring-offset-1 data-[placeholder]:text-white/70 outline-none items-center ring-white/70 focus-visible:ring-2 font-bold text-xl/8 justify-center rounded-2.5xl gap-1 w-16.5 h-16.5 border border-white`,
          className,
        )}
        placeholder="PE"
        data-select-states-trigger
      >
        <CaretDown weight="bold" className="w-4 h-4 text-white" />
      </Select.Trigger>

      <Select.Content
        data-select-states-wrapper
        className="bg-red-app max-h-48 py-2 text-white rounded-lg overflow-hidden"
      >
        {states.map((state) => (
          <Select.Item
            className="cursor-pointer font-semibold outline-none p-4 transition-colors hover:bg-primary"
            value={state.name}
            text={state.state_code}
            key={state.name}
          />
        ))}
      </Select.Content>
    </Select.Root>
  )
}
