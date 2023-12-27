import Image from 'next/image'

import logo from '@/assets/full-logo.svg'
import pets from '@/assets/pets-hero.svg'

import { FormRegister } from './components/form-register'
import Link from 'next/link'

export default function register() {
  return (
    <div className="flex gap-8 pt-14 justify-between">
      <div className="bg-primary flex flex-col items-center justify-between max-w-[30.5rem] h-[41rem] w-full py-10 rounded-2.5xl">
        <Image
          src={logo}
          alt="Find A Friend"
          className="mt-16.5"
          width={174}
          height={45}
        />

        <Image src={pets} alt="Cachorros sorrindo" width={384} height={195} />
      </div>

      <section className="flex flex-col max-w-lg mx-auto mt-16 w-full text-secondary-500">
        <h1 className="text-5.5xl leading-[90%] mb-16.5 mx-auto font-bold text-center max-w-md">
          Cadastre sua organização
        </h1>

        <FormRegister />

        <div className="mt-8 mb-4">
          <Link
            href="/login"
            className="w-full block underline text-center transition-colors duration-300 text-secondary-500 hover:no-underline hover:text-secondary-400 rounded-2.5xl font-extrabold text-xl/9"
          >
            Já possui conta?
          </Link>
        </div>
      </section>
    </div>
  )
}
