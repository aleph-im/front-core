import { ChangeEventHandler, InputHTMLAttributes } from "react"

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string
  label?: string
  value?: string | ReadonlyArray<string> | number | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}
