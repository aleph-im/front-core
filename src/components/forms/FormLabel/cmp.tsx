import React from 'react'
import { StyledContainer, StyledRequiredSymbol } from './styles'
import { FormLabelProps } from './types'

export const FormLabel = ({ error, label, required }: FormLabelProps) => {
  return (
    <StyledContainer {...{ error, label }}>
      {label}{' '}
      {required && <StyledRequiredSymbol error={error}>*</StyledRequiredSymbol>}
    </StyledContainer>
  )
}

export default FormLabel
