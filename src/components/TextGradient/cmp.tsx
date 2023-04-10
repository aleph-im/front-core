import React from 'react'
import { useTheme } from 'styled-components'
import { StyledTextGradientContainer } from './styles'
import { TextGradientProps } from './types'

export const TextGradient = ({
  color = 'main0',
  type = 'header',
  as,
  size,
  children,
  ...rest
}: TextGradientProps) => {
  const theme = useTheme()
  const tagConfig = theme.typo[type]

  return (
    <StyledTextGradientContainer
      as={as || (tagConfig.tag ? type : 'span')}
      color={color}
      size={size}
      typo={tagConfig}
      type={type}
      {...rest}
    >
      {children}
    </StyledTextGradientContainer>
  )
}

export default TextGradient
