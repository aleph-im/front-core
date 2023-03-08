import React from 'react'
import Icon from '../../Icon'
import { StyledFormErrorContainer } from './styles'
import { FormErrorProps } from './types'

export const FormError = ({
  error,
  ...rest
}: FormErrorProps) => {
  return (
    <StyledFormErrorContainer {...{ error, ...rest }}>
      <Icon name={error.type === 'warn' ? 'bomb' : 'warning'} className='mr-xxs' />
      {error.message}
    </StyledFormErrorContainer>
  )
}

export default FormError
