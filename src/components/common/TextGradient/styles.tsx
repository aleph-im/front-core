import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { StyledTextGradientProps, TextGradientProps } from './types'

export const StyledTextGradientContainer = styled.span.attrs<TextGradientProps>(
  (props) => addClasses(`tp-${props.type}`)(props),
)<StyledTextGradientProps>`
  ${({ theme, color, size, typo, $isInline }) => {
    const fontSizeCss = size
      ? `font-size: ${!Number.isNaN(Number(size)) ? `${size}px` : size};`
      : ''

    const gradient = theme.gradient[color]?.fn
    color = theme.color[color] || color
    const backgroundColorCss = gradient
      ? `background-image: ${gradient};`
      : `background-color: ${color};`

    const paddingLeftCss =
      typo.style === 'italic'
        ? `
      padding-left: 0.1em;
      margin-left: -0.1em;
    `
        : ''

    return css`
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      ${backgroundColorCss}
      ${paddingLeftCss}
      ${!$isInline && 'display: table;'}
      
      && {
        ${fontSizeCss}
      }
    `
  }}
`
