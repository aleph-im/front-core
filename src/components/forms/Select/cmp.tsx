import React, { forwardRef, ForwardedRef, ChangeEvent, memo } from 'react'
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
      required,
      ...rest
    }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const newValue = multiple
        ? Array.from(e.target.selectedOptions).map((o) => o.value)
        : e.target.value

      onChange && onChange(e, newValue)
    }

    return (
      <StyledInputWrapper>
        {label && <FormLabel {...{ label, error, required }} />}
        <StyledSelect
          {...{
            id,
            ref,
            value,
            onChange: handleChange,
            multiple,
            required,
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

export default memo(Select)
