import { InputHTMLAttributes, ReactNode } from 'react'
import { FormError } from '../FormError/types'

export type ButtonStyle = 'wrapped' | 'stuck'

export type ButtonProps = {
  button?: ReactNode
  buttonStyle?: ButtonStyle
}

export type IconProps = {
  icon?: ReactNode
}

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  placeholder?: string
  defaultValue?: string
  dataView?: boolean
  autoWidth?: boolean

  label?: string
  error?: FormError

  // Force states
  focus?: boolean
  disabled?: boolean
} & ButtonProps &
  IconProps
