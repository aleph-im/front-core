import { InputHTMLAttributes } from 'react'
import { FormError } from '../FormError/types'

export type ChipInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  placeholder?: string
  label?: string
  error?: FormError
  onAdd?: (tag: string) => void
  onRemove?: (tag: string) => void
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
}

export type ChipItemProps = {
  tag: string
  onRemove: (tag: string) => void
}
