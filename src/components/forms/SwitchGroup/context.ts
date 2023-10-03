import React, { ChangeEventHandler, useContext } from 'react'
import { SwitchGroupValue } from './types'

export type SwitchGroupContextValue = {
  name?: string
  value: SwitchGroupValue[]
  valueSet: Set<SwitchGroupValue>
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const SwitchGroupContext = React.createContext<
  SwitchGroupContextValue | undefined
>(undefined)

export const useSwitchGroup = () => useContext(SwitchGroupContext)
