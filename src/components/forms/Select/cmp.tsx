import React, { forwardRef, ForwardedRef, useState, ChangeEvent } from 'react'
import { StyledInputWrapper } from '../styles.forms'
import { StyledSelect, StyledOption } from './styles'
import { SelectProps } from './types'
import FormLabel from '../FormLabel'
import FormError from '../FormError'

export const Select = forwardRef(
  (
    {
      id,
      label,
      error,
      value,
      onChange,
      options,
      multiple,
      ...rest
    }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const [selectedValue, setSelectedValue] = useState<string | string[]>(
      value || options[0]?.value || '',
    )

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const newValue = multiple
        ? Array.from(e.target.selectedOptions).map((o) => o.value)
        : e.target.value

      setSelectedValue(newValue)
      onChange && onChange(e, newValue)
    }

    return (
      <StyledInputWrapper>
        {label && <FormLabel label={label} error={error} />}
        <StyledSelect
          {...{
            id,
            ref,
            value: selectedValue,
            onChange: handleChange,
            multiple,
            ...rest,
          }}
        >
          {options.map((option) => (
            <StyledOption key={option.value} value={option.value}>
              {option.label}
            </StyledOption>
          ))}
        </StyledSelect>
        {error && <FormError error={error} />}
      </StyledInputWrapper>
    )
  },
)

Select.displayName = 'Select'

export default Select
