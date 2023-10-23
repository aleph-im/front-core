import { ChangeEventHandler, InputHTMLAttributes } from 'react'

export type RadioSize = 'md' | 'sm' | 'xs'

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  id?: string
  label?: string
  value?: string | ReadonlyArray<string> | number | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  size?: RadioSize
}
