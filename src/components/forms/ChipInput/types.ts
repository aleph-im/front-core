import { InputHTMLAttributes } from 'react'
import { FormError } from '../FormError/types'

export type ChipInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  value?: string[]
  defaultValue?: string[]
  placeholder?: string
  onAdd?: (tag: string) => void
  onRemove?: (tag: string) => void
  onChange?: (value: string[]) => void

  label?: string
  error?: FormError
}

export type ChipItemProps = {
  tag: string
  onRemove: (tag: string) => void
}
