import Image from 'next/image'
import { FormLogin } from './components/form-login'

import logo from '@/assets/full-logo.svg'
import pets from '@/assets/pets-hero.svg'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex justify-between">
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

      <section className="flex self-end flex-col max-w-xl w-full text-secondary-500">
        <h1 className="text-5.5xl font-bold">Boas-vindas!</h1>

        <FormLogin />

        <div className="space-y-5">
          <button
            type="submit"
            form="login-form"
            className="w-full py-4 text-xl/9 transition-colors duration-300 hover:bg-secondary-400 bg-secondary-500 rounded-2.5xl text-white font-extrabold"
          >
            Login
          </button>

          <Link
            href="/register"
            className="w-full block text-center transition-colors duration-300 hover:bg-secondary-500/10 py-4 bg-secondary-500/5 text-secondary-500 rounded-2.5xl font-extrabold text-xl/9"
          >
            Cadastrar minha organização
          </Link>
        </div>
      </section>
    </div>
  )
}
