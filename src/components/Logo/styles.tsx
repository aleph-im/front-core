import styled, { css } from 'styled-components'
import { StyledLogoProps } from './types'

export const StyledLogoWrap = styled.span<StyledLogoProps>`
  ${({ size }) => {
    const s = !Number.isNaN(Number(size)) ? `${size}px` : size

    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: ${s};
      background-color: transparent;

      & > span {
        padding-left: 2%;
        font-size: ${s};
        line-height: 1em;
        margin-top: 0;
        margin-bottom: 0;
        /* margin-left: 2%; */
      }

      & > svg {
        box-sizing: border-box;
        padding-top: 2%;
        padding-bottom: 2%;
      }
    `
  }}
`
