import { ChangeEvent, InputHTMLAttributes } from "react"
import { FormErrorInfo } from "../FormError/types"

export type Option = {
  value: string
  label: string
}

export type SelectProps = Omit<InputHTMLAttributes<HTMLSelectElement>,  'onChange'> & {
  options: Option[]
  multiple?: boolean
  value?: string | string[]
  onChange?: (e: ChangeEvent<HTMLSelectElement>, value: string | string[]) => void

  label?: string
  error?: FormErrorInfo
}
