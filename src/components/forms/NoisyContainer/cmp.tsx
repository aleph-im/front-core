import React, { memo } from 'react'
import StyledContainer from './styles'
import { NoisyContainerProps } from './types'

export const NoisyContainer = ({ children, ...rest }: NoisyContainerProps) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}
NoisyContainer.displayName = 'NoisyContainer'

export default memo(NoisyContainer)
