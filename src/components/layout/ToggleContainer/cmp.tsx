import React, { ForwardedRef, forwardRef, memo } from 'react'
import { StyledContainer, StyledContent } from './styles'
import { ToggleContainerProps } from './types'
import { useTransition } from '../../../hooks'

export const ToggleContainer = forwardRef(
  (
    {
      children,
      open,
      variant: $variant,
      shouldUnmount = false,
      duration: $duration = 700,
      ...rest
    }: ToggleContainerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { shouldMount, stage } = useTransition(open, $duration)

    const mount = !shouldUnmount || shouldMount
    const $isOpen = stage === 'enter'

    return (
      <StyledContainer {...{ $isOpen, $duration, $variant }}>
        {mount && (
          <StyledContent ref={ref} {...rest}>
            {children}
          </StyledContent>
        )}
      </StyledContainer>
    )
  },
)
ToggleContainer.displayName = 'ToggleContainer'

export default memo(ToggleContainer) as typeof ToggleContainer
