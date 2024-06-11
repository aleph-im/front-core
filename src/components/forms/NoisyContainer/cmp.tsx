import React, { memo } from 'react'
import StyledContainer from './styles'
import { NoisyContainerProps } from './types'

export const NoisyContainer = ({
  children,
  animation: $animation,
  type: $type,
  ...rest
}: NoisyContainerProps) => {
  return (
    <StyledContainer
      {...{
        $animation,
        $type,
        ...rest,
      }}
    >
      {children}
    </StyledContainer>
  )
}
NoisyContainer.displayName = 'NoisyContainer'

export default memo(NoisyContainer) as typeof NoisyContainer
