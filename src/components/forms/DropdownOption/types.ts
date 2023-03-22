import { InputHTMLAttributes, ReactNode } from "react"

export type DropdownOptionProps = Omit<InputHTMLAttributes<HTMLLIElement>, 'value' | 'onChange'> & {
  value: string
  onChange?: (value: string, checked: boolean) => void
  children: ReactNode
}
