import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

interface SelectProps extends Select.SelectContentProps {
  children: ReactNode
}

export function SelectContent({ children, ...props }: SelectProps) {
  return (
    <Select.Portal {...props}>
      <Select.Content
        side="bottom"
        position="popper"
        sideOffset={12}
        {...props}
        className={`w-[--radix-select-trigger-width] ${props.className}`}
      >
        <Select.Viewport>{children}</Select.Viewport>
      </Select.Content>
    </Select.Portal>
  )
}
