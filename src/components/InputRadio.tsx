'use client'
import { ComponentProps, ReactNode, useId } from 'react'
import { tv } from 'tailwind-variants'

const label = tv({
  base: 'rounded-md bg-base-button p-4 text-base-text hover:bg-base-hover hover:text-base-subtitle peer-checked:border peer-checked:border-secondary-500 peer-checked:bg-secondary-300',
})

type InputRadioProps = ComponentProps<'input'> & {
  children: ReactNode
}

export function InputRadio({ children, className, ...rest }: InputRadioProps) {
  const id = useId()

  return (
    <div>
      <input id={id} {...rest} type="radio" className="peer hidden" />
      <label className={label({ className })} htmlFor={id}>
        {children}
      </label>
    </div>
  )
}
