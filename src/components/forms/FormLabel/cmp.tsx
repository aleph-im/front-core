import React from 'react'
import { StyledFormLabelContainer } from './styles'
import { FormLabelProps } from './types'

export const FormLabel = ({ error, label }: FormLabelProps) => {
  return (
    <StyledFormLabelContainer {...{ error, label }}>
      {label}
    </StyledFormLabelContainer>
  )
}

export default FormLabel
