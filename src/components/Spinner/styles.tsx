import styled, { css } from 'styled-components'
import Lottie from 'lottie-react'
import { StyledLottieProps } from './types'

export const StyledLottie = styled(Lottie)<StyledLottieProps>`
  ${({ $size }) => {
    const SpinnerSize = $size
      ? !Number.isNaN(Number($size))
        ? `${$size}px`
        : $size
      : `1em`

    return css`
      height: ${SpinnerSize};
      width: ${SpinnerSize};
    `
  }}
`
