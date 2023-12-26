'use client'

import { Select } from '@/components/form/select'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import { CaretDown } from 'phosphor-react'
import { useState } from 'react'

interface State {
  name: string
  state_code: string
}

export function SelectLocation() {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

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

  const states: State[] = responseState?.data.states ?? []
  const cities: string[] = responseCities?.data ?? []

  return (
    <>
      <div className="flex gap-2">
        <Select.Root value={state} onValueChange={setState}>
          <Select.Trigger
            className="flex ring-offset-1 data-[placeholder]:text-white/70 outline-none items-center ring-white/70 focus-visible:ring-2 font-bold text-xl/8 justify-center rounded-2.5xl gap-1 w-16.5 h-16.5 border border-white"
            placeholder="PE"
          >
            <CaretDown weight="bold" className="w-4 h-4 text-white" />
          </Select.Trigger>

          <Select.Content className="bg-red-app max-h-48 py-2 text-white rounded-lg overflow-hidden">
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

        <Select.Root value={city} onValueChange={setCity}>
          <Select.Trigger
            placeholder={
              isLoadingCities
                ? 'Carregando...'
                : !state
                  ? 'Selecione um estado'
                  : 'Sua cidade'
            }
            className="rounded-2.5xl disabled:cursor-not-allowed items-center ring-offset-1 data-[placeholder]:text-white/70 ring-white/70 outline-none focus-visible:ring-2 py-5 w-[17.5rem] justify-center bg-red-app flex gap-2 font-extrabold text-xl/8"
            disabled={!state || isLoadingCities}
          >
            <CaretDown weight="bold" className="w-4 h-4 text-white" />
          </Select.Trigger>

          <Select.Content className="bg-red-app max-h-48 py-2 text-white rounded-lg overflow-hidden">
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
      </div>

      <Link
        href={!city ? '#' : '/location'}
        className={`bg-action transition-colors w-16.5 h-16.5 grid rounded-2.5xl place-items-center ${
          !city ? 'cursor-not-allowed' : 'hover:bg-action/80'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          className="fill-secondary-500 stroke-secondary-500"
        >
          <path d="M23.9295 23.9403C24.4275 23.4481 24.4647 22.6741 24.0411 22.1399L24.0275 22.0733L23.9179 21.9662L20.2326 18.3631L20.175 18.2755L20.1466 18.2323L20.11 18.1959C19.8528 17.9398 19.5036 17.7976 19.1414 17.7976C18.7831 17.7976 18.4375 17.9368 18.1811 18.1878C15.1986 20.9181 10.6031 21.0654 7.44333 18.5291C4.28593 15.9946 3.54546 11.5708 5.70336 8.18822C7.86438 4.80075 12.2685 3.49879 15.9951 5.1606C19.7178 6.82062 21.5922 10.9144 20.3954 14.7216L20.3953 14.722C20.2486 15.1904 20.3696 15.6978 20.7073 16.0523C21.0438 16.4055 21.5434 16.5533 22.018 16.4464C22.4927 16.3396 22.88 15.9915 23.0268 15.525C24.6282 10.4675 22.2066 5.0338 17.3479 2.73417C12.493 0.436364 6.6454 1.94847 3.58708 6.30522C0.525507 10.6666 1.18477 16.5612 5.13205 20.1717C8.96761 23.68 14.7896 24.01 19.0044 21.0164L21.9969 23.9422L21.9977 23.943C22.5323 24.4634 23.3922 24.4634 23.9268 23.943L23.9295 23.9403Z" />
        </svg>
      </Link>
    </>
  )
}
