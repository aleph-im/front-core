import React, { memo } from 'react'
import { CompositeTitleProps } from './types'
import { StyledLabel, StyledNumber, StyledTextGradient } from './styles'

export const CompositeTitle = ({
  children,
  number,
  as: As = 'h1',
  type = 'h5',
  color = 'main1',
  numberColor = 'text',
  labelColor = 'text',
  label,
  ...rest
}: CompositeTitleProps) => {
  return (
    <As style={{ lineHeight: '1rem', margin: 0 }}>
      <StyledNumber {...{ $color: numberColor }}>
        {String(number).padStart(2, '0')}/&nbsp;
      </StyledNumber>
      <StyledTextGradient {...{ type, color, ...rest }}>
        {children}
      </StyledTextGradient>
      {label && <StyledLabel {...{ $color: labelColor }}>{label}</StyledLabel>}
    </As>
  )
}
CompositeTitle.displayName = 'CompositeTitle'

export default memo(CompositeTitle) as typeof CompositeTitle
