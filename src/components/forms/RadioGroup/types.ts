import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react"
import { FormErrorInfo } from "../FormError/types"

export type RadioGroupDirection = 'row' | 'column'
export type RadioGroupValue = string | ReadonlyArray<string> | number | undefined

export type RadioGroupProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  name?: string
  value?: RadioGroupValue
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: RadioGroupValue) => void
  
  direction: RadioGroupDirection
  children: ReactNode
  label?: string
  error?: FormErrorInfo
}
