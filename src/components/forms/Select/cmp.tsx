import React, { forwardRef, ForwardedRef, useState, ChangeEvent } from 'react'
import { StyledFormLabel, StyledInputWrapper } from '../styles.forms'
import { StyledSelect, StyledOption } from './styles'
import { SelectProps } from './types'

export const Select = forwardRef(({
  id,
  label,
  value,
  onChange,
  options,
  multiple,
  ...rest
}: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const [selectedValue, setSelectedValue] = useState<string | string[]>(value || '')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = multiple
      ? Array.from(e.target.selectedOptions).map(o => o.value)
      : e.target.value

    setSelectedValue(newValue)
    onChange && onChange(e, newValue)
  }

  return (
    <StyledInputWrapper>
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledSelect
        {...{
          id,
          ref,
          value: selectedValue,
          onChange: handleChange,
          multiple,
          size: 6,
          ...rest,
        }}
      >
        {options.map((option) => (
          <StyledOption key={option.value} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </StyledInputWrapper>
  )
})

Select.displayName = 'Select'

export default Select
