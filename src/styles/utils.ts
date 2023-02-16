import { css } from 'styled-components'
import theme from '../themes/base'
import {
  ThemeColor,
  ThemeEffect,
  ThemeGradient,
  ThemeTypo,
} from '../themes/styles'

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
      const { family, style, weight, size } = theme.typo[typo]
      return `
        font-family: ${family};
        font-style: ${style};
        font-weight: ${weight};
        font-size: ${size}rem;
      `
    }}
  `
}

export function getThemeGlowEffectCss(
  type: keyof ThemeEffect['glow'],
  color: string,
) {
  return css`
    ${theme.effect.glow[type][color]}
  `
}

export function getThemeGlassEffectCss(color: string) {
  return css`
    ${theme.effect.glass[color]}
  `
}

export function getThemeDarkEffectCss(color: string) {
  return css`
    ${theme.effect.dark[color]}
  `
}

export const colorGradient = (color: string) =>
  `linear-gradient(0deg, ${color}, ${color})`
