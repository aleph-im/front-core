import { ChangeEvent, InputHTMLAttributes } from "react"
import { FormErrorInfo } from "../FormError/types"

export type SelectOption = {
  value: string
  label: string
}

export type SelectProps = Omit<InputHTMLAttributes<HTMLSelectElement>,  'onChange'> & {
  options: SelectOption[]
  multiple?: boolean
  value?: string | string[]
  onChange?: (e: ChangeEvent<HTMLSelectElement>, value: string | string[]) => void

  label?: string
  error?: FormErrorInfo
}
