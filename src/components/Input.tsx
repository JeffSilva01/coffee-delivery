import { tv } from 'tailwind-variants'
import { ComponentProps } from 'react'

const input = tv({
  base: 'flex items-center rounded border border-base-button bg-base-input p-3 focus-within:border-primary-700',
})

type InputProps = ComponentProps<'input'> & {
  isOptional?: boolean
}

export function Input({ isOptional = false, className, ...rest }: InputProps) {
  return (
    <div className={input({ className })}>
      <input
        className="w-full bg-transparent text-sm text-base-text placeholder-base-label outline-none "
        {...rest}
      />
      {isOptional && <span className="text-xs text-base-label">Opcional</span>}
    </div>
  )
}
