'use client'

import { Select } from '@/components/form/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CaretDown } from 'phosphor-react'
import { Dispatch, SetStateAction, useState } from 'react'

type SetStateHandler = Dispatch<SetStateAction<string | null>>

export function FiltersPet() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [age, setAge] = useState(() => searchParams.get('age'))
  const [energy, setEnergy] = useState(() => searchParams.get('energy'))
  const [size, setSize] = useState(() => searchParams.get('size'))
  const [independence, setIndependence] = useState(() =>
    searchParams.get('independence'),
  )

  function handleChangeFilters(
    filter: string,
    value: string,
    handler: SetStateHandler,
  ) {
    const currentSearchParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    )

    currentSearchParams.set(filter, value)

    const search = currentSearchParams.toString()
    const query = search ? `?${search}` : ''

    router.push(`${pathname}${query}`)
    handler(value)
  }

  return (
    <section className="pt-8 pl-14 pr-10 pb-12 flex flex-col gap-7">
      <span className="text-xl/9 font-extrabold">Filtros</span>

      <label className="space-y-3">
        <span className="text-xs font-medium block">Idade</span>
        <Select.Root
          value={age ?? undefined}
          onValueChange={(value) => handleChangeFilters('age', value, setAge)}
        >
          <Select.Trigger
            placeholder="Escolha a idade"
            className="flex outline-none data-[placeholder]:text-white/70 focus-visible:ring-2 ring-white justify-between w-full bg-[#F75F64] font-extrabold p-5 rounded-2xl"
          >
            <CaretDown weight="bold" className="w-6 h-6 text-white" />
          </Select.Trigger>

          <Select.Content className="bg-[#F75F64] rounded-2xl py-2 text-white overflow-hidden">
            <Select.Item
              value="1"
              text="Filhote"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="6"
              text="Jovem Adulto"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="10"
              text="Adulto"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="15"
              text="Sênior"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
          </Select.Content>
        </Select.Root>
      </label>

      <label className="space-y-3">
        <span className="text-xs font-medium block">Nível de Energia</span>
        <Select.Root
          value={energy ?? undefined}
          onValueChange={(value) =>
            handleChangeFilters('energy', value, setEnergy)
          }
        >
          <Select.Trigger
            placeholder="Escolha a energia"
            className="flex outline-none data-[placeholder]:text-white/70 focus-visible:ring-2 ring-white justify-between w-full bg-[#F75F64] font-extrabold p-5 rounded-2xl"
          >
            <CaretDown weight="bold" className="w-6 h-6 text-white" />
          </Select.Trigger>

          <Select.Content className="bg-[#F75F64] rounded-2xl py-2 text-white overflow-hidden">
            <Select.Item
              value="1"
              text="01"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="2"
              text="02"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="3"
              text="03"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="4"
              text="04"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="5"
              text="05"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
          </Select.Content>
        </Select.Root>
      </label>

      <label className="space-y-3">
        <span className="text-xs font-medium block">Porte do animal</span>
        <Select.Root
          value={size ?? undefined}
          onValueChange={(value) => handleChangeFilters('size', value, setSize)}
        >
          <Select.Trigger
            placeholder="Escolha o porte"
            className="flex outline-none data-[placeholder]:text-white/70 focus-visible:ring-2 ring-white justify-between w-full bg-[#F75F64] font-extrabold p-5 rounded-2xl"
          >
            <CaretDown weight="bold" className="w-6 h-6 text-white" />
          </Select.Trigger>

          <Select.Content className="bg-[#F75F64] rounded-2xl py-2 text-white overflow-hidden">
            <Select.Item
              value="XS"
              text="Muito pequeno"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="S"
              text="Pequeno"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="M"
              text="Médio"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="L"
              text="Grande"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="XL"
              text="Gigante"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
          </Select.Content>
        </Select.Root>
      </label>

      <label className="space-y-3">
        <span className="text-xs font-medium block">
          Nível de independência
        </span>
        <Select.Root
          value={independence ?? undefined}
          onValueChange={(value) =>
            handleChangeFilters('independence', value, setIndependence)
          }
        >
          <Select.Trigger
            placeholder="Escolha a independência"
            className="flex outline-none data-[placeholder]:text-white/70 focus-visible:ring-2 ring-white justify-between w-full bg-[#F75F64] font-extrabold p-5 rounded-2xl"
          >
            <CaretDown weight="bold" className="w-6 h-6 text-white" />
          </Select.Trigger>

          <Select.Content className="bg-[#F75F64] rounded-2xl py-2 text-white overflow-hidden">
            <Select.Item
              value="LOW"
              text="Baixo"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="MEDIUM"
              text="Médio"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
            <Select.Item
              value="HIGH"
              text="Alto"
              className="cursor-pointer transition-colors duration-200 hover:bg-red-app font-semibold p-3 outline-none"
            />
          </Select.Content>
        </Select.Root>
      </label>
    </section>
  )
}
