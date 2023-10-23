import { ChangeEventHandler, InputHTMLAttributes } from 'react'

export type CheckboxSize = 'md' | 'sm' | 'xs'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  id?: string
  label?: string
  value?: string | ReadonlyArray<string> | number | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  size?: CheckboxSize
}
