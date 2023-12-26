import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

interface SelectProps extends Select.SelectItemProps {
  children?: ReactNode
  text: string
}

export function SelectItem({ children, text, ...props }: SelectProps) {
  return (
    <Select.Item {...props}>
      <Select.ItemText>
        <span data-itemText>{text}</span>
      </Select.ItemText>

      {children}
    </Select.Item>
  )
}
