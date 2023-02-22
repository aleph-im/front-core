import React, { ForwardedRef, forwardRef, useMemo } from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button = forwardRef(({
  variant = 'primary',
  kind = 'flat',
  size = 'regular',
  color = 'main2',
  as = 'button',
  children,
  hover,
  active,
  focus,
  className,
  ...rest
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  // @note: Storybook testing purposes
  const classes = useMemo(() => {
    return [
      hover ? '_hover' : '',
      active ? '_active' : '',
      focus ? '_focus' : '',
    ].join(' ') + (className || '')
  }, [hover, active, focus, className])

  return (
    <StyledButton
      role="button"
      {...{
        ref,
        as,
        variant,
        kind,
        size,
        color,
        className: classes,
        ...rest
      }}
    >
      {children}
    </StyledButton>
  )
})

Button.displayName = 'Button'

export default Button
