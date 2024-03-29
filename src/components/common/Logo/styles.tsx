import styled, { css } from 'styled-components'
import { StyledLogoProps } from './types'

export const StyledLogoContainer = styled.span<StyledLogoProps>`
  ${({ theme, size, text }) => {
    const { logo } = theme.component

    const logoSize = size
      ? !Number.isNaN(Number(size))
        ? `${size}px`
        : size
      : `1em`

    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      font-size: ${logoSize};
      gap: ${logo.gap};

      & > span {
        font-size: 1em;
        line-height: normal;
        margin-top: 0;
        margin-bottom: 0;
      }

      & > svg {
        font-size: ${text ? '0.8em' : '1em'};
      }
    `
  }}
`
