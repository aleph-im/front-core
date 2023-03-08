import { InputHTMLAttributes, ReactNode } from "react"
import { FormErrorInfo } from "../FormError/types"

export type RadioButtonGroupDirection = 'row' | 'column'

export type RadioButtonGroupProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  direction: RadioButtonGroupDirection
  children: ReactNode
  error?: FormErrorInfo
}
