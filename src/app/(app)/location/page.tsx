import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { SearchLocation } from './components/search-location'

import { FiltersPet } from './components/filters-pet'
import Link from 'next/link'
import { PageProps } from '../../../../.next/types/app/layout'
import { api } from '@/data/api'

const mockupPets = [
  {
    name: 'Alfredo',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Juscelino',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Getúlio',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Alfredo',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Juscelino',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Getúlio',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Alfredo',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Juscelino',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
  {
    name: 'Getúlio',
    url: 'https://s3-alpha-sig.figma.com/img/cb04/7b62/0fa356fda7bdd533cec654e569fe1493?Expires=1704672000&Signature=mD2okCPDgGfjJFyHC-q~vjBqxCs5UDe9GNF2x2Ruq1R3nTiGa1h4sTBjrs~7-vN9eaEEwPSfBhpl2t9VOLyzWGeuBGjExMoy6Wj~r7RtHdYAzntrUVezP~FIABqfgC3mtTajQhbTqMdGqiNdfk~MS~BfN-kIDcBt25Fbdqc9uNIv6kRITiUOHqrlx2ke2tcrgdwAnXBok1D8GKSvcOH7vZn8DUptIVWQNZJqqGk6oTqxvk1FqYMh27SQSJyuViy0Uuw8cZ~ay1OKoJQ-7Tbw92sma~vezr1HJQnVnBM4O5P6aYsfZY6x2K21V4GqvVx6QaCk6~Bz0hq3cAWfYbJRSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  },
]

export default async function Location({ searchParams }: PageProps) {
  const filters = new URLSearchParams(Object.entries(searchParams)).toString()

  const res = await api(`/pets/available?${filters}`)
  const { pets } = await res.json()

  console.log(pets)

  return (
    <div className="grid min-h-screen bg-red-150 grid-cols-location gap-8">
      <aside className="bg-primary text-white">
        <header className="bg-red-app max-h-60 h-full flex flex-col justify-end space-y-6 py-7 pl-14 pr-10">
          <Link href="/">
            <Image src={logo} alt="" width={45} height={45} />
          </Link>

          <div className="flex gap-3">
            <SearchLocation />
          </div>
        </header>

        <FiltersPet />
      </aside>
      <main className="py-38 pr-24 max-w-screen-2xl">
        <header className="flex mb-12 justify-between items-center">
          <h2 className="text-secondary-500 text-xl/8">
            Encontre <strong className="font-extrabold">324 amigos</strong> na
            sua cidade
          </h2>
        </header>

        <div className="grid grid-cols-pets gap-8 [&>a:nth-child(odd)_div[data-logo]]:bg-primary">
          {mockupPets.map((pet, index) => (
            <Link
              key={index}
              href={`/pets/${pet.name}`}
              className="bg-white group duration-300 flex transition-colors text-secondary-500 hover:text-white hover:bg-secondary-500 flex-col items-center rounded-2.5xl p-1 pb-4 overflow-hidden"
            >
              <div className="h-34 w-full rounded-2.5xl overflow-hidden">
                <Image
                  src={pet.url}
                  alt=""
                  className="group-hover:scale-110 transition-transform duration-300 h-full w-full object-cover"
                  width={274}
                  height={135}
                />
              </div>

              <div
                aria-hidden
                className="p-1 relative z-10 bg-white duration-300 transition-colors group-hover:bg-secondary-500 rounded-2xl -mt-6 overflow-hidden"
              >
                <div
                  data-logo
                  className="bg-action p-4 rounded-xl grid place-content-center w-full h-full"
                >
                  <Image
                    src={logo}
                    alt=""
                    className="w-5 h-5"
                    width={15}
                    height={15}
                  />
                </div>
              </div>

              <span className="font-bold text-lg">{pet.name}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
