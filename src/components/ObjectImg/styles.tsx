import styled, { css } from 'styled-components'
import { StyledObjectImgProps } from './types'

export const StyledObjectImgWrap = styled.div<StyledObjectImgProps>`
  ${({ size }) => {
    const s = !Number.isNaN(Number(size)) ? `${size}px` : size

    return css`
      display: inline-block;
      width: ${s};
      height: ${s};
      background-color: transparent;
    `
  }}
`
