import { InputHTMLAttributes, ReactNode } from "react"
import { FormErrorInfo } from "../FormError/types"

export type ButtonProps = {
  button?: ReactNode
  buttonStyle?: 'wrapped' | 'stuck'
}

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  placeholder?: string
  defaultValue?: string
  
  label?: string
  error?: FormErrorInfo
  
  // Force states
  focus?: boolean
  disabled?: boolean
} & ButtonProps
