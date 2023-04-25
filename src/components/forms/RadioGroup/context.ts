import React, { ChangeEventHandler, useContext } from 'react'

export type RadioGroupContextValue = {
  name: string
  value: string | ReadonlyArray<string> | number | undefined
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const RadioGroupContext = React.createContext<
  RadioGroupContextValue | undefined
>(undefined)

export const useRadioGroup = () => useContext(RadioGroupContext)
