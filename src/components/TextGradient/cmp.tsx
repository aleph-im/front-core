import React from 'react'
import { useTheme } from 'styled-components'
import { StyledTextGradientWrap } from './styles'
import { TextGradientProps } from './types'

export const TextGradient = ({
  color = 'main0',
  type = 'header',
  as,
  size,
  children,
  className
}: TextGradientProps) => {
  const theme = useTheme()
  const tagConfig = theme.typo[type]
  const classes = className || `tp-${type}`

  return (
    <StyledTextGradientWrap
      as={as || (tagConfig.tag ? type : 'span')}
      className={classes}
      color={color}
      size={size}
      typo={tagConfig}
    >
      {children}
    </StyledTextGradientWrap>
  )
}

export default TextGradient
