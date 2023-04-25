import { InputHTMLAttributes, ReactNode } from 'react'
import { FormErrorInfo } from '../FormError/types'

export type DropdownProps = Omit<
  InputHTMLAttributes<HTMLDivElement>,
  'onChange'
> & {
  name?: string
  multiple?: boolean
  value?: string | string[]
  defaultValue?: string | string[]
  onChange?: (value: string | string[]) => void
  placeholder?: string

  label?: string
  error?: FormErrorInfo
  children: ReactNode
}
