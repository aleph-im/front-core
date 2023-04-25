import { InputHTMLAttributes } from 'react'
import { FormErrorInfo } from '../FormError/types'

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  placeholder?: string
  defaultValue?: string

  label?: string
  error?: FormErrorInfo

  // Force states
  focus?: boolean
  disabled?: boolean
}
