import React, { forwardRef, ForwardedRef, memo } from 'react'
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
    const {
      className,
      id,
      label,
      size: $size,
      ...rest
    } = useCheckboxComponent(props)

    return (
      <StyledCheckboxContainer {...{ className, $size }}>
        <StyledInputContainer {...{ $size }}>
          <StyledInput
            {...{
              type: 'checkbox',
              id,
              ref,
              $size,
              ...rest,
            }}
          />
          <StyledCheckIcon />
        </StyledInputContainer>
        {label && (
          <StyledLabel {...{ htmlFor: id, $size }}>{label}</StyledLabel>
        )}
      </StyledCheckboxContainer>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default memo(Checkbox) as typeof Checkbox
