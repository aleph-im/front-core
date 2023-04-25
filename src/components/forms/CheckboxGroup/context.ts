import React, { ChangeEventHandler, useContext } from 'react'
import { CheckboxGroupValue } from './types'

export type CheckboxGroupContextValue = {
  name?: string
  value: CheckboxGroupValue[]
  valueSet: Set<CheckboxGroupValue>
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const CheckboxGroupContext = React.createContext<
  CheckboxGroupContextValue | undefined
>(undefined)

export const useCheckboxGroup = () => useContext(CheckboxGroupContext)
