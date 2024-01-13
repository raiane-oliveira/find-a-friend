import { Select } from '@/components/form/select'
import { SelectProps } from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

interface SelectInputProps extends SelectProps {
  options: {
    value: string
    text: string
  }[]
  placeholder: string
}

export function SelectInput({
  options,
  placeholder,
  ...props
}: SelectInputProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger
        placeholder={placeholder}
        className="flex outline-none border border-slate-350 data-[placeholder]:text-secondary-500/70 focus-visible:ring-2 ring-secondary-500 justify-between w-full bg-slate-50 font-semibold p-4 rounded-input"
      >
        <CaretDown
          weight="bold"
          className="w-5 h-5 mt-0.5 text-secondary-500"
        />
      </Select.Trigger>

      <Select.Content className="bg-slate-50 border border-slate-350 rounded-2xl py-2 text-secondary-500 overflow-hidden">
        {options.map((option) => (
          <Select.Item
            key={option.value}
            value={option.value}
            text={option.text}
            className="cursor-pointer transition-colors duration-200 hover:bg-slate-350/50 font-semibold p-3 outline-none"
          />
        ))}
      </Select.Content>
    </Select.Root>
  )
}
