import { ChangeEvent, useCallback, useId } from 'react'
import { SwitchProps } from './types'
import { useSwitchGroup } from '../SwitchGroup'

export function useSwitchComponent({
  id,
  label,
  name,
  value,
  checked,
  className,
  onChange: onChangeProp,
  ...rest
}: SwitchProps) {
  const rndId = useId()
  id = id || rndId

  const group = useSwitchGroup()

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeProp && onChangeProp(e)
      group && group.onChange(e)
    },
    [group, onChangeProp],
  )

  if (group) {
    if (name === undefined) name = group.name
    if (checked === undefined) checked = group.valueSet.has(value)
  }

  return { checked, className, id, label, name, onChange, value, ...rest }
}
