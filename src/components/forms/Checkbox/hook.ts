import { ChangeEvent, useCallback, useId } from 'react'
import { CheckboxProps } from './types'
import { useCheckboxGroup } from '../CheckboxGroup'

export function useCheckboxComponent({
  id,
  label,
  name,
  value,
  checked,
  className,
  onChange: onChangeProp,
  ...rest
}: CheckboxProps) {
  const rndId = useId()
  id = id || rndId

  const group = useCheckboxGroup()

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
