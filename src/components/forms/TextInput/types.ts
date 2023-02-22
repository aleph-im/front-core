import { InputHTMLAttributes, ReactNode } from "react"

export type FormError = {
  message: string
  type?: 'warn' | 'error'
}

export type ButtonProps = {
  button?: ReactNode
  buttonStyle?: 'wrapped' | 'stuck'
}

export type TextInputProps<T = any> = InputHTMLAttributes<T> & {
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  error?: FormError

  // Force states
  focus?: boolean
  disabled?: boolean
} & ButtonProps
