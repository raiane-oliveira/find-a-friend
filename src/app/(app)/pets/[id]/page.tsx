import { api } from '@/data/api'
import { PageProps } from '../../../../../.next/types/app/layout'
import Image from 'next/image'
import {
  AdoptionRequirement,
  Image as ImageI,
  Levels,
  Pet,
  Sizes,
} from '@/data/contracts/pets'
import { AlertCircle, Maximize, Zap } from 'lucide-react'
import Link from 'next/link'
import { Maps } from './components/maps'

import logo from '@/assets/logo.svg'
import { PetImages } from './components/pet-images'

interface PetProfile extends Omit<Omit<Pet, 'Image'>, 'AdoptionRequiremnt'> {
  images: ImageI[]
  requirements: AdoptionRequirement[]
}

export default async function PetProfilePage({ params }: PageProps) {
  const res = await api(`/pets/${params.id}/details`)
  const { pet }: { pet: PetProfile } = await res.json()

  const energy = [1, 2, 3, 4, 5]

  const energyText = pet.energy <= 3 ? 'Pouca energia' : 'Muita energia'
  const environmentText = {
    LOW: 'pequeno',
    MEDIUM: 'médio',
    HIGH: 'amplo',
  }

  const sizes = Object.keys(Sizes).filter((value) => isNaN(Number(value)))
  const sizeText = {
    XS: 'Pequenino',
    S: 'Pequeno',
    M: 'Médio',
    L: 'Grande',
    XL: 'Gigante',
  }

  return (
    <main className="overflow-y-auto max-h-screen h-full">
      <div className="max-w-[44rem] mx-auto mt-10 mb-44 w-full">
        <span className="text-[#8FA7B2] text-lg text-center block mb-10 font-semibold">
          Seu novo amigo
        </span>

        <article className="bg-white rounded-2.5xl overflow-hidden w-full h-full">
          <PetImages images={pet.images} />

          <section className="my-16.5 px-16.5 text-secondary-500">
            <h1 className="capitalize text-5.5xl/10 font-extrabold">
              {pet.name}
            </h1>

            <p className="text-lg font-semibold mt-6 mb-11">{pet.about}</p>

            <div className="flex gap-3.5">
              <div className="rounded-2.5xl border-2 border-secondary-500/10 p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {energy.map((n) => (
                    <Zap
                      key={n}
                      className={`${
                        n <= pet.energy
                          ? 'opacity-100'
                          : 'opacity-20 fill-secondary-500'
                      } w-5 h-5`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-lg/none block mt-auto">
                  {energyText}
                </span>
              </div>
              <div className="rounded-2.5xl border-2 border-secondary-500/10 p-6 flex flex-col gap-4">
                <Maximize className="w-6 h-6" />
                <span className="font-semibold text-lg/none block mt-auto">
                  Ambiente{' '}
                  {
                    environmentText[
                      pet.environment as unknown as keyof typeof Levels
                    ]
                  }
                </span>
              </div>
              <div className="flex-1 rounded-2.5xl border-2 border-secondary-500/10 p-6 flex flex-col gap-4">
                <div className="flex gap-1 pt-2">
                  {sizes.map((size) => (
                    <div
                      key={size[0]}
                      className={`${
                        (size as unknown as Sizes) === pet.size
                          ? 'opacity-100'
                          : 'opacity-20'
                      } w-3 h-3 rounded-full bg-secondary-500`}
                    />
                  ))}
                </div>

                <span className="font-semibold text-lg/none block mt-auto">
                  {sizeText[pet.size as unknown as keyof typeof Sizes]}
                </span>
              </div>
            </div>
          </section>

          <Maps />

          <div className="mt-10 flex flex-col px-16.5 gap-12">
            <hr className="bg-slate-350 h-[0.0625rem]" />

            <section className="text-secondary-500 flex items-start gap-4">
              <div className="bg-[#F27006] rounded-2xl w-16 h-16 grid place-content-center">
                <Image
                  src={logo}
                  alt="Logo do Find A Friend"
                  width={24}
                  height={24}
                />
              </div>

              <div className="space-y-4 flex-1 pt-0.5">
                <div>
                  <span className="font-bold text-3xl/6">Seu Cãopanheiro</span>
                  <p className="font-semibold leading-7">
                    Rua do meio, 123, Boa viagem, Recife - PE
                  </p>
                </div>

                <Link
                  href={`/`}
                  className="py-4 px-6 w-max rounded-input text-lg bg-secondary-500/5 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.778 16.2225 15.9058 16.1491 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29866 8.39101 7.308Z"
                      fill="#0D3B66"
                    />
                  </svg>
                  81 1234.4567
                </Link>
              </div>
            </section>

            <hr className="bg-slate-350 h-[0.0625rem]" />
          </div>

          {pet.requirements.length !== 0 && (
            <section className="mt-14 px-16.5">
              <h2 className="text-3xl/6 font-bold mb-10 text-secondary-500">
                Requisitos para adoção
              </h2>

              <div className="grid gap-2.5 text-primary mb-12">
                {pet.requirements.map((requirement) => (
                  <div
                    key={requirement.id}
                    className="border bg-adoption-requirement rounded-input border-primary px-10 py-3.5 flex items-center gap-3.5"
                  >
                    <AlertCircle className="w-6 h-6" />
                    <span className="font-semibold text-lg">
                      {requirement.requirement}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="bg-slate-350 h-[0.0625rem]" />
            </section>
          )}

          <Link
            href="/"
            className="bg-whatsapp transition-opacity hover:opacity-85 mt-12 mb-16.5 rounded-2.5xl text-white font-extrabold text-lg/8 flex gap-4 items-center mx-16.5 justify-center py-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1_918)">
                <path
                  d="M3.2547 16.1029L3.38118 15.7313L3.14793 15.4156C2.02349 13.8936 1.36316 12.0213 1.36316 10C1.36316 4.90924 5.56648 0.75 10.7566 0.75H10.7617C15.9517 0.75 20.1551 4.91043 20.1551 10C20.1551 15.0896 15.9517 19.25 10.7617 19.25C8.84732 19.25 7.07548 18.6893 5.59015 17.7195L5.2931 17.5256L4.95474 17.6322L2.46747 18.4158L3.2547 16.1029Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M15.6508 13.6596C15.4441 14.2775 14.6238 14.7899 13.9695 14.9396C13.5219 15.0405 12.9372 15.121 10.9689 14.2571C8.4512 13.1528 6.82987 10.4443 6.7035 10.2685C6.58249 10.0928 5.68616 8.83434 5.68616 7.53279C5.68616 6.23125 6.31049 5.59749 6.56215 5.32539C6.76883 5.10204 7.11044 5 7.43813 5C7.54415 5 7.63946 5.00567 7.72513 5.0102C7.97679 5.02154 8.10316 5.03741 8.26914 5.45803C8.47583 5.98523 8.97914 7.28677 9.03911 7.42055C9.10016 7.55433 9.1612 7.73573 9.07553 7.91147C8.99521 8.09287 8.92453 8.17336 8.79816 8.32755C8.6718 8.48174 8.55186 8.59965 8.42549 8.76518C8.30984 8.90916 8.17919 9.06335 8.32483 9.32978C8.47047 9.59055 8.97379 10.4601 9.71485 11.1585C10.6712 12.0598 11.4465 12.3478 11.7238 12.4703C11.9305 12.561 12.1768 12.5394 12.3278 12.3694C12.5195 12.1506 12.7562 11.7878 12.9971 11.4306C13.1685 11.1744 13.3848 11.1426 13.6118 11.2333C13.8431 11.3184 15.0672 11.9589 15.3188 12.0916C15.5705 12.2254 15.7365 12.2889 15.7975 12.4011C15.8575 12.5133 15.8575 13.0405 15.6508 13.6596Z"
                  fill="#FAFAFA"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_918">
                  <rect
                    width="20.292"
                    height="20"
                    fill="white"
                    transform="translate(0.613159)"
                  />
                </clipPath>
              </defs>
            </svg>
            Entrar em contato
          </Link>
        </article>
      </div>
    </main>
  )
}
