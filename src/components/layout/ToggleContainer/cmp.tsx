import React, { ForwardedRef, forwardRef, memo } from 'react'
import { StyledContainer, StyledContent } from './styles'
import { ToggleContainerProps } from './types'
import { useForwardRef, useTransitionedEnterExit } from '../../../hooks'

export const ToggleContainer = forwardRef(
  (
    {
      children,
      open,
      duration,
      variant: $variant,
      shouldUnmount = false,
      ...rest
    }: ToggleContainerProps,
    fRef: ForwardedRef<HTMLDivElement>,
  ) => {
    const ref = useForwardRef(fRef)

    const { shouldMount, state } = useTransitionedEnterExit({
      onOff: open,
      duration,
      ref,
    })

    const mount = !shouldUnmount || shouldMount
    const $isOpen = state === 'enter'

    return (
      <StyledContainer {...{ $isOpen, $duration: duration, $variant }}>
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
