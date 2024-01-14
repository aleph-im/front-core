import React, { memo } from 'react'
import { StyledContainer, StyledRequiredSymbol } from './styles'
import { FormLabelProps } from './types'

export const FormLabel = ({ error, label, required }: FormLabelProps) => {
  return (
    <StyledContainer {...{ error, label }}>
      {label} {required && <StyledRequiredSymbol>*</StyledRequiredSymbol>}
    </StyledContainer>
  )
}

export default memo(FormLabel) as typeof FormLabel
