import Image from 'next/image'
import petsHero from '@/assets/pets-hero.svg'
import logo from '@/assets/full-logo.svg'
import { SelectLocation } from './components/select-location'

export default function Home() {
  return (
    <div className="bg-primary p-6 flex flex-col justify-center text-white min-h-screen">
      <main className="container mx-auto">
        <header className="mb-4">
          <Image src={logo} alt="FindAFriend" width={215} height={56} />
        </header>

        <section className="flex items-end gap-10 justify-between">
          <h1 className="font-extrabold text-7xl max-w-[30rem]">
            Leve a felicidade para o seu lar
          </h1>

          <div className="max-w-[37rem] w-full h-80">
            <Image
              src={petsHero}
              alt="Cachorros sorrindo"
              width={592}
              height={305}
              className="w-full h-full"
            />
          </div>
        </section>

        <div className="flex justify-between mt-28">
          <h2 className="text-2xl font-semibold max-w-sm">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </h2>

          <div className="flex items-center gap-6">
            <span>Busque um amigo:</span>
            <SelectLocation />
          </div>
        </div>
      </main>
    </div>
  )
}
