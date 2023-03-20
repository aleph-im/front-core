import { InputHTMLAttributes } from "react"
import { FormErrorInfo } from "../FormError/types"

export type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  error?: FormErrorInfo

  // Force states
  focus?: boolean
  disabled?: boolean
}
