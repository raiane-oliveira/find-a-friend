import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['600', '400', '800', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Find A Friend',
  description: 'Encontre o animal de estimação ideal para seu estilo de vida!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
