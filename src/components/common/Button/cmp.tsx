import React, { ForwardedRef, forwardRef, memo, useMemo } from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button = forwardRef(
  (
    {
      kind: $kind = 'default',
      variant: $variant = 'primary',
      size: $size = 'md',
      color: $color = 'main0',
      as = 'button',
      children,
      hover,
      active,
      focus,
      animation,
      className,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const classes = useMemo(() => {
      return (
        [
          hover ? '_hover' : '',
          active ? '_active' : '',
          focus ? '_focus' : '',
        ].join(' ') + (className || '')
      )
    }, [hover, active, focus, className])

    return (
      <StyledButton
        role="button"
        {...{
          $variant,
          $kind,
          $size,
          $color,
          ref,
          as,
          className: classes,
          $animation: animation,
          ...rest,
        }}
      >
        {children}
      </StyledButton>
    )
  },
)
Button.displayName = 'Button'

export default memo(Button) as typeof Button
