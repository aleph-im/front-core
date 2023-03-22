import React, { useContext } from "react"

export type DropdownContextValue = {
  value: string | string[]
  valueSet: Set<string>
  onAdd: (value: string) => void
  onRemove: (value: string) => void
}

export const DropdownContext = React.createContext<DropdownContextValue | undefined>(undefined)

export const useDropdown = () => useContext(DropdownContext)
