import { InputHTMLAttributes } from "react"

export type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string
  name: string
  label: string
  value: string

  checked?: boolean
  onChange: (value: string) => void;
}
