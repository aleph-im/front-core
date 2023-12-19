import React, { memo } from 'react'
import { StyledLabel } from './styles'
import { LabelProps } from './types'

export const Label = ({
  children,
  variant = 'info',
  kind = 'primary',
  ...rest
}: LabelProps) => {
  return (
    <StyledLabel {...rest} $variant={variant} $kind={kind}>
      {children}
    </StyledLabel>
  )
}
Label.displayName = 'Label'

export default memo(Label) as typeof Label
