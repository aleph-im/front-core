import { css, SimpleInterpolation } from 'styled-components'
import {
  BreakpointId,
  ThemeColor,
  ThemeGradient,
  ThemeTypo,
} from '../themes/types'

// Util FNs

export const round = (n: number, precission: number) => {
  const m = 10 ** precission
  return Math.round(n * m + Number.EPSILON) / m
}

export const pxToRem = (px: number, base: number = 16) => {
  return round(Number(px / base), 3)
}

export const getColorGradient = (color: string) => `linear-gradient(0deg, ${color}, ${color})`

// CSS

export function getBackgroundColorCss(color: keyof ThemeColor) {
  return css`
    background-color: ${({ theme }) => theme.color[color]};
  `
}

export function getBackgroundGradientCss(color: keyof ThemeGradient) {
  return css`
    background-image: ${({ theme }) => theme.gradient[color].fn};
  `
}

export function getTypoCss(typo: keyof ThemeTypo) {
  return css`
    ${({ theme }) => {
      const { family, style, weight, size, lineHeight } = theme.typo[typo]
      return css`
        font-family: ${family};
        font-style: ${style};
        font-weight: ${weight};
        font-size: ${size}rem;
        line-height: ${lineHeight}em;
      `
    }}
  `
}

export function getResponsiveCss(breakpoint: BreakpointId, styles: string | SimpleInterpolation, offset: number = 1) {
  return css`
    ${({ theme }) => css`
      @media (min-width: ${theme.breakpoint[breakpoint] + pxToRem(offset)}rem) {
        ${styles}
      }
    `}
  `
}
