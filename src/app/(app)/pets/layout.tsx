import logo from '@/assets/logo.svg'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

interface PetsLayoutProps {
  children: ReactNode
}

export default function PetsLayout({ children }: PetsLayoutProps) {
  return (
    <div className="min-h-screen grid bg-red-150 grid-cols-[6rem_1fr]">
      <aside className="bg-primary py-8 px-6 flex flex-col">
        <Link href="/">
          <Image src={logo} alt="Find A Friend" width={45} height={45} />
        </Link>

        <button
          type="button"
          className="bg-action w-max rounded-2xl p-3 mt-auto text-secondary-500 transition-opacity duration-200 hover:opacity-85"
          title="Sair da aplicação"
        >
          <ArrowLeft width={24} height={24} strokeWidth={2.5} />
        </button>
      </aside>
      {children}
    </div>
  )
}
