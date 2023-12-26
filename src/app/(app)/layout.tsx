'use client'

import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
