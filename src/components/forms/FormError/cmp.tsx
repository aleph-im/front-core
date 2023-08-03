import React from 'react'
import Icon from '../../Icon'
import { StyledFormErrorContainer } from './styles'
import { FormErrorProps } from './types'

export const FormError = ({ error, ...rest }: FormErrorProps) => {
  return (
    <StyledFormErrorContainer {...{ error, ...rest }}>
      <Icon name={error.level === 'warn' ? 'warning' : 'bomb'} tw="mr-2" />
      {error.message}
    </StyledFormErrorContainer>
  )
}

export default FormError
