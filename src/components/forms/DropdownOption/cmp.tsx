import React, {
  forwardRef,
  ForwardedRef,
  useCallback,
  MouseEvent,
  useMemo,
  memo,
} from 'react'
import { useDropdown } from '../Dropdown/context'
import { StyledDropdownOption } from './styles'
import { DropdownOptionProps } from './types'

export const DropdownOption = forwardRef(
  (
    {
      id,
      value,
      children,
      onChange: onChangeProp,
      ...rest
    }: DropdownOptionProps,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    const dropdown = useDropdown()

    const checked = useMemo(() => {
      if (!dropdown) return false
      return dropdown.valueSet.has(value)
    }, [value, dropdown])

    const onClick = useCallback(
      (e: MouseEvent<HTMLLIElement>) => {
        e.stopPropagation()
        if (!dropdown) return

        const newChecked = !checked

        newChecked ? dropdown.onAdd(value) : dropdown.onRemove(value)

        onChangeProp && onChangeProp(value, newChecked)
      },
      [dropdown, checked, value, onChangeProp],
    )

    return (
      <StyledDropdownOption {...{ id, ref, onClick, checked, ...rest }}>
        {children}
      </StyledDropdownOption>
    )
  },
)
DropdownOption.displayName = 'DropdownOption'

export default memo(DropdownOption) as typeof DropdownOption
