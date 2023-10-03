import { ChangeEvent, useId, useMemo } from 'react'
import { SwitchGroupProps } from './types'

export function useSwitchGroupComponent({
  id,
  name,
  value,
  onChange,
  label,
  direction,
  children,
  error,
  required,
  ...rest
}: SwitchGroupProps) {
  const rndId = useId()
  id = id || rndId

  name = name || id

  const valueSet = useMemo(() => new Set(value), [value])

  const contextValue = useMemo(
    () => ({
      name: name,
      value: Array.from(valueSet),
      valueSet,
      onChange(e: ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked
        const value = e.target.value

        checked ? valueSet.add(value) : valueSet.delete(value)

        const newValue = new Set(valueSet)
        onChange && onChange(e, Array.from(newValue))
      },
    }),
    [name, valueSet, onChange],
  )

  return { contextValue, label, direction, children, error, required, ...rest }
}
