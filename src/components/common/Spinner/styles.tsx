import styled, { css } from 'styled-components'
import { StyledLottieProps } from './types'
import LottieImport from 'lottie-react'

// @note: Quickfix for nextjs
const Lottie = (LottieImport as any)?.default || LottieImport

export const StyledLottie = styled(
  (Lottie as any)?.default || Lottie,
)<StyledLottieProps>`
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
