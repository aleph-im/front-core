import React, { memo } from 'react'
import { StyledFormErrorContainer } from './styles'
import { FormErrorProps } from './types'
import Icon from '../../common/Icon'

export const FormError = ({ error, ...rest }: FormErrorProps) => {
  return (
    <StyledFormErrorContainer {...{ error, ...rest }}>
      <Icon
        name={error.level === 'warning' ? 'exclamation-circle' : 'bomb'}
        tw="mr-2"
      />
      {error.message}
    </StyledFormErrorContainer>
  )
}
FormError.displayName = 'FormError'

export default memo(FormError) as typeof FormError
