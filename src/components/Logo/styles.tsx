import styled, { css } from 'styled-components'
import { StyledLogoProps } from './types'

export const StyledLogoContainer = styled.span<StyledLogoProps>`
  ${({ theme, size, text }) => {
    const logoSize = size ? (!Number.isNaN(Number(size)) ? `${size}px` : size) : `${theme.typo.logo.size}rem`;

    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      font-size: ${logoSize};

      & > span {
        font-size: 1em;
        line-height: normal;
        margin-top: 0;
        margin-bottom: 0;
      }

      & > svg {
        box-sizing: border-box;
        font-size: ${text ? '0.8em' : '1em'};
        ${text ? 'margin-right: 0.2em;' : ''};
      }
    `
  }}
`
