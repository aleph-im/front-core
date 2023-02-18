import React, { useMemo } from 'react'
import { StyledButton } from './styles'
import { ButtonProps } from './types'

export const Button = ({
  variant = 'primary',
  kind = 'flat',
  size = 'regular',
  color = 'main2',
  label,
  hover,
  active,
  focus,
  disabled,
  className,
  onClick,
}: ButtonProps) => {
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
      {...{
        variant,
        kind,
        size,
        color,
        disabled,
        onClick,
        className: classes,
      }}
    >
      {label}
    </StyledButton>
  )
}

export default Button
