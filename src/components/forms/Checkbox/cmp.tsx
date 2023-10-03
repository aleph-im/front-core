import React, { forwardRef, ForwardedRef } from 'react'
import {
  StyledCheckboxContainer,
  StyledInput,
  StyledLabel,
  StyledInputContainer,
  StyledCheckIcon,
} from './styles'
import { CheckboxProps } from './types'
import { useCheckboxComponent } from './hook'

export const Checkbox = forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { className, id, label, ...rest } = useCheckboxComponent(props)

    return (
      <StyledCheckboxContainer {...{ className }}>
        <StyledInputContainer {...{ label }}>
          <StyledInput
            {...{
              type: 'checkbox',
              id,
              ref,
              ...rest,
            }}
          />
          <StyledCheckIcon />
        </StyledInputContainer>
        {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      </StyledCheckboxContainer>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
