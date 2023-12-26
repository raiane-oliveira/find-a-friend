'use client'

import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

interface SelectProps extends Select.SelectProps {
  children: ReactNode
}

export function SelectRoot({ children, ...props }: SelectProps) {
  return <Select.Root {...props}>{children}</Select.Root>
}
