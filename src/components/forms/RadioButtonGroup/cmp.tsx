import React from 'react'
import FormError from '../FormError'
import { StyledLabel, StyledRadioButtonGroupContainer, StyledRadioButtonContainer } from './styles'
import { RadioButtonGroupProps } from './types'

export const RadioButtonGroup = ({
  label,
  direction,
  children,
  error,
  ...rest
}: RadioButtonGroupProps) => {
  return (
    <StyledRadioButtonGroupContainer {...{ direction, ...rest }}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledRadioButtonContainer direction={direction}>
        {children}
      </StyledRadioButtonContainer>
      {error && <FormError error={error} />}
    </StyledRadioButtonGroupContainer>
  )
}

export default RadioButtonGroup
