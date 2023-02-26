import { css, SimpleInterpolation } from 'styled-components'
import {
  BreakpointId,
  ThemeColor,
  ThemeEffect,
  ThemeGradient,
  ThemeTypo,
} from '../themes/types'

export const round = (n: number, precission: number) => {
  const m = 10 ** precission
  return Math.round(n * m + Number.EPSILON) / m
}

export const pxToRem = (px: number, base: number = 16) => {
  return round(Number(px / base), 3)
}

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
      return `
        font-family: ${family};
        font-style: ${style};
        font-weight: ${weight};
        font-size: ${size}rem;
        line-height: ${lineHeight}em;
      `
    }}
  `
}

export function getThemeGlowEffectCss(
  type: keyof ThemeEffect['glow'],
  color: string,
) {
  return css`
    ${({ theme }) => theme.effect.glow[type][color]}
  `
}

export function getThemeGlassEffectCss(color: string) {
  return css`
    ${({ theme }) => theme.effect.glass[color]}
  `
}

export function getThemeDarkEffectCss(color: string) {
  return css`
    ${({ theme }) => theme.effect.dark[color]}
  `
}

export const colorGradient = (color: string) =>
  `linear-gradient(0deg, ${color}, ${color})`

export function getResponsiveCss(breakpoint: BreakpointId, styles: string | SimpleInterpolation, offset: number = 1) {
  return css`
    ${({ theme }) => `
      @media (min-width: ${theme.breakpoint[breakpoint] + pxToRem(offset)}rem) {
        ${styles}
      }
    `}
  `
}