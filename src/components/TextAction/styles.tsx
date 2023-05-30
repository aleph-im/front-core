import styled, { css } from 'styled-components'
import { TextActionProps, TextProps } from './types'

export const StyledText = styled.div<TextProps>`
  ${({ theme, size, color }) => {
    const mainColor = theme.color[color] || color
    return css`
      text-color: ${mainColor};
      font-family: ${theme.typo.info.family};
      @media screen and (max-width: 720px) {
        font-size: ${size / 1.5}px;
      }
      @media screen and (min-width: 720px) {
        font-size: ${size}px;
      }
    `
  }}
`

export const StyledTextAction = styled.div<TextActionProps>`
  ${({ color, position }) => {
    return css`
      line-height: 1rem;
      text-color: ${color};
      text-align: ${position};
    `
  }}
`
