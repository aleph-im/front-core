import React, { ForwardedRef, forwardRef, memo } from 'react'
import { StyledContainer, StyledContent } from './styles'
import { ToggleContainerProps } from './types'

export const ToggleContainer = forwardRef(
  (
    { children, open, duration, ...rest }: ToggleContainerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <StyledContainer $isOpen={open} $duration={duration}>
        <StyledContent ref={ref} {...rest}>
          {children}
        </StyledContent>
      </StyledContainer>
    )
  },
)
ToggleContainer.displayName = 'ToggleContainer'

export default memo(ToggleContainer)
