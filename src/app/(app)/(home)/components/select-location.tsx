'use client'

import { Cities } from '@/components/select-location/cities'
import { Search } from '@/components/select-location/search'
import { States } from '@/components/select-location/states'
import { useState } from 'react'

export function SelectLocation() {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  return (
    <>
      <div className="flex gap-2">
        <States value={state} onValueChange={setState} />
        <Cities value={city} onValueChange={setCity} state={state} />
      </div>

      <Search state={state} city={city} />
    </>
  )
}
