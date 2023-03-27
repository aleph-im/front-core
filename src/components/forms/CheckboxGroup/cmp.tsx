import React, { ChangeEvent, useId, useMemo, useState } from 'react'
import FormError from '../FormError'
import { StyledFormLabel } from '../styles.forms'
import { CheckboxGroupContext } from './context'
import { StyledCheckboxGroupContainer, StyledCheckboxContainer } from './styles'
import { CheckboxGroupProps } from './types'

export const CheckboxGroup = ({
  name,
  value,
  defaultValue,
  onChange: groupOnChange,
  label,
  direction,
  children,
  error,
  ...rest
}: CheckboxGroupProps) => {
  const [groupValue, setGroupValue] = useState(new Set(defaultValue || value || []))

  const randomName = useId()
  const groupName = name ? randomName : undefined

  const contextValue = useMemo(
    () => ({
      name: groupName,
      value: Array.from(groupValue),
      valueSet: groupValue,
      onChange(e: ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked
        const value = e.target.value

        checked
          ? groupValue.add(value)
          : groupValue.delete(value)

        const newValue = new Set(groupValue)
        setGroupValue(newValue)
        groupOnChange && groupOnChange(e, Array.from(newValue))
      },
    }),
    [groupName, groupValue, setGroupValue, groupOnChange],
  )

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
      <StyledCheckboxGroupContainer {...{ direction, ...rest }}>
        {label && <StyledFormLabel>{label}</StyledFormLabel>}
        <StyledCheckboxContainer direction={direction}>
          {children}
        </StyledCheckboxContainer>
        {error && <FormError error={error} />}
      </StyledCheckboxGroupContainer>
    </CheckboxGroupContext.Provider>
  )
}

export default CheckboxGroup
