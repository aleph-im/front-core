import React from 'react'
import Icon from '../../Icon'
import { StyledFormErrorContainer } from './styles'
import { FormErrorProps } from './types'

export const FormError = ({ error, ...rest }: FormErrorProps) => {
  return (
    <StyledFormErrorContainer {...{ error, ...rest }}>
      <Icon name={error.level === 'warn' ? 'bomb' : 'warning'} tw="mr-2" />
      {error.message || error.type === 'required' ? 'Required field' : ''}
    </StyledFormErrorContainer>
  )
}

export default FormError
