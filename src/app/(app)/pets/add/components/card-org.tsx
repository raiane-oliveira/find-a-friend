'use client'

import logo from '@/assets/logo.svg'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { useOrgDetails } from './org-details-context'

export function CardOrg() {
  const { org } = useOrgDetails()

  return (
    <div className="bg-secondary-500 text-white rounded-2.5xl py-7 px-16.5 flex gap-4">
      <div className="bg-[#F27006] rounded-2.5xl w-16 h-16 grid place-content-center">
        <Image src={logo} alt="Logo do Find A Friend" width={32} height={32} />
      </div>

      <section className="space-y-1.5 flex-1">
        <h2 className="text-3xl/7 font-bold">{org.name}</h2>
        <p className="leading-7">
          {org.address}, {org.city} - {org.state}
        </p>
      </section>

      <button
        type="button"
        className="bg-secondary-400 rounded-2xl p-5 my-auto transition-colors hover:bg-secondary-400/70"
      >
        <LogOut className="w-6 h-6" strokeWidth={2.5} />
      </button>
    </div>
  )
}
