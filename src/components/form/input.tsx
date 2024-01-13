import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ({ className, ...props }: InputProps, ref: any) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          `text-lg border-slate-350 disabled:cursor-not-allowed disabled:opacity-75 focus-visible:ring-2 ring-secondary-400 outline-none font-semibold rounded-input p-4 placeholder:text-secondary-500/75 border bg-slate-25 w-full`,
          className,
        )}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
