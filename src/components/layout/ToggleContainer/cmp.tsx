import React, { ForwardedRef, forwardRef, memo } from 'react'
import { StyledContainer, StyledContent } from './styles'
import { ToggleContainerProps } from './types'

export const ToggleContainer = forwardRef(
  (
    {
      children,
      open: $isOpen,
      duration: $duration,
      variant: $variant,
      ...rest
    }: ToggleContainerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <StyledContainer {...{ $isOpen, $duration, $variant }}>
        <StyledContent ref={ref} {...rest}>
          {children}
        </StyledContent>
      </StyledContainer>
    )
  },
)
ToggleContainer.displayName = 'ToggleContainer'

export default memo(ToggleContainer) as typeof ToggleContainer
