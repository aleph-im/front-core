import { InputHTMLAttributes, ReactNode } from 'react'
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

  // Force states
  focus?: boolean
  disabled?: boolean
}

export type ChipItemProps = {
  id: string
  tag: string | ReactNode
  onRemove: (tag: string) => void
}
