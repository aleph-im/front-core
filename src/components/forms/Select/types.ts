import { ChangeEvent, InputHTMLAttributes } from 'react'
import { FormError } from '../FormError/types'

export type SelectOption = {
  value: string
  label: string
}

export type SelectProps = Omit<
  InputHTMLAttributes<HTMLSelectElement>,
  'onChange'
> & {
  name?: string
  options: SelectOption[]
  multiple?: boolean
  value?: string | string[]
  onChange?: (
    e: ChangeEvent<HTMLSelectElement>,
    value: string | string[],
  ) => void

  label?: string
  error?: FormError
}
