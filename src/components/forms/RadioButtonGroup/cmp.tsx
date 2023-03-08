import React from 'react'
import FormError from '../FormError'
import { StyledFormLabel } from '../styles.forms'
import { StyledRadioButtonGroupContainer, StyledRadioButtonContainer } from './styles'
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
      {label && <StyledFormLabel>{label}</StyledFormLabel>}
      <StyledRadioButtonContainer direction={direction}>
        {children}
      </StyledRadioButtonContainer>
      {error && <FormError error={error} />}
    </StyledRadioButtonGroupContainer>
  )
}

export default RadioButtonGroup
