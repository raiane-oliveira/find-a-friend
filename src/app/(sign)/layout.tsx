import { ReactNode } from 'react'

interface SignLayoutProps {
  children: ReactNode
}

export default function SignLayout({ children }: SignLayoutProps) {
  return (
    <div className="container min-h-screen mx-auto p-6 grid items-center">
      {children}
    </div>
  )
}
