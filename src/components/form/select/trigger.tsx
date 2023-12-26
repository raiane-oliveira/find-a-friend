import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

interface SelectProps extends Select.SelectTriggerProps {
  children: ReactNode
  placeholder?: string
}

export function SelectTrigger({
  children,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <Select.Trigger {...props}>
      <Select.Value placeholder={placeholder} />
      <Select.Icon>{children}</Select.Icon>
    </Select.Trigger>
  )
}
