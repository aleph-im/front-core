import { InputHTMLAttributes, ReactNode } from 'react'
import { FormError } from '../FormError/types'

export type DropdownProps = Omit<
  InputHTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> & {
  name?: string
  multiple?: boolean
  value?: string | string[]
  defaultValue?: string | string[]
  onChange?: (value: string | string[]) => void
  placeholder?: string

  label?: string
  error?: FormError
  children: ReactNode
}
