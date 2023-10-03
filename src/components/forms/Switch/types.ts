import { ChangeEventHandler, InputHTMLAttributes } from 'react'

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string
  label?: string
  value?: string | ReadonlyArray<string> | number | undefined
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}
