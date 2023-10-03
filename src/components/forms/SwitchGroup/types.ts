import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'
import { FormError } from '../FormError/types'

export type SwitchGroupDirection = 'row' | 'column'
export type SwitchGroupValue =
  | string
  | ReadonlyArray<string>
  | number
  | undefined

export type SwitchGroupProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  name?: string
  value?: SwitchGroupValue[]
  defaultValue?: SwitchGroupValue[]
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: SwitchGroupValue[],
  ) => void

  direction: SwitchGroupDirection
  children: ReactNode

  label?: string
  error?: FormError
}
