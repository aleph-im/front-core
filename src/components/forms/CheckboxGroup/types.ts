import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react"
import { FormErrorInfo } from "../FormError/types"

export type CheckboxGroupDirection = 'row' | 'column'
export type CheckboxGroupValue = (string | ReadonlyArray<string> | number | undefined)

export type CheckboxGroupProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  name?: string
  value?: CheckboxGroupValue[]
  defaultValue?: CheckboxGroupValue[]
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: CheckboxGroupValue[]) => void

  direction: CheckboxGroupDirection
  children: ReactNode
  
  label?: string
  error?: FormErrorInfo
}
