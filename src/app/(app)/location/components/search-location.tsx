'use client'

import { Cities } from '@/components/select-location/cities'
import { States } from '@/components/select-location/states'
import { Search } from '@/components/select-location/search'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export function SearchLocation() {
  const searchParams = useSearchParams()

  const [state, setState] = useState(() => {
    const value = searchParams.get('state')
    if (!value) return undefined
    return value
  })

  const [city, setCity] = useState(() => {
    const value = searchParams.get('city')
    if (!value) return undefined
    return value
  })

  return (
    <>
      <States
        value={state ?? undefined}
        onValueChange={setState}
        className="rounded-2xl w-16 text-white text-base h-[3.75rem] border-primary"
      />
      <Cities
        value={city ?? undefined}
        onValueChange={setCity}
        state={state ?? ''}
        className="rounded-2xl w-full text-white h-[3.75rem] border text-base border-primary max-w-36 p-4 max-h-full"
      />

      <Search
        city={city ?? ''}
        state={state ?? ''}
        className="rounded-2xl w-[3.75rem] h-[3.75rem] search-location-button"
      />
    </>
  )
}
