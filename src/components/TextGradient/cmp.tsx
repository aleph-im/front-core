import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import { StyledTextGradientContainer } from './styles'
import { TextGradientProps, TypeElements } from './types'

const inlineElements = new Set<string>(['span', 'strong'])

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
  const tag = (as ||
    (tagConfig.tag && type !== 'body' ? type : 'span')) as TypeElements
  const isInline = useMemo(() => inlineElements.has(tag), [tag])

  return (
    <StyledTextGradientContainer
      as={tag}
      color={color}
      size={size}
      typo={tagConfig}
      type={type}
      $isInline={isInline}
      {...rest}
    >
      {children}
    </StyledTextGradientContainer>
  )
}

export default TextGradient
