import React, { forwardRef, ForwardedRef, useMemo } from 'react'
import { StyledRadioButtonContainer, StyledInput, StyledLabel, StyledInputContainer, StyledInputDot } from './styles'
import { RadioButtonProps } from './types'

export const RadioButton = forwardRef(({
  id,
  label,
  value,
  name,
  checked,
  onChange,
  className,
  ...rest
}: RadioButtonProps, ref: ForwardedRef<HTMLInputElement>) => {
  id = useMemo(() => id || `radio-${name}-${Math.random().toString(36).substring(2, 9)}-${Date.now()}`, [id])

  return (
    <StyledRadioButtonContainer {...{ className }}>
      <StyledInputContainer>
        <StyledInput {...{
          type: "radio",
          id,
          ref,
          name,
          value,
          onChange,
          checked,
          tabIndex:0,
          ...rest
        }} />
        <StyledInputDot />
      </StyledInputContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </StyledRadioButtonContainer>
  )
})

RadioButton.displayName = 'RadioButton'

export default RadioButton
