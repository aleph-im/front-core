import { createGlobalStyle, css } from "styled-components";
import theme from "../themes/base";
import { ThemeColor, ThemeEffect, ThemeGradient, ThemeTypo, TypoKind } from "../themes/styles";

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

export function getGlowCss(type: keyof ThemeEffect['glow'], color: string) {
  return css`
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      z-index: 1;
      border-radius: inherit;
      ${theme.effect.glow[type][color]}
    }
  `
}

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    return css`
      @import "${theme.font.url}";

      body {
        font-family: ${theme.font.family.body};
        color: ${theme.color.text};
      }

      /* COLORS */
      ${Object.keys(theme.color).map(color => css`
        .bg-${color} { ${getBackgroundColorCss(color)} }
      `)}

      /* GRADIENTS */
      ${Object.keys(theme.gradient).map(color => css`
        .bgg-${color} { ${getBackgroundGradientCss(color)} }
      `)}

      /* TYPOS */
      ${Object.keys(theme.typo).map(typo => css`
        .typ-${typo} ${typo.length === 2 ? `, ${typo}` : ''} { ${getTypoCss(typo as TypoKind)} }
      `)}

      /* GLOW */
      ${Object.keys(theme.effect.glow).flatMap((glowType) =>
        Object.keys(theme.effect.glow[glowType as keyof ThemeEffect['glow']]).map(glowColor => css`
          .glow-${glowType}-${glowColor} { ${getGlowCss(glowType as keyof ThemeEffect['glow'], glowColor)} }
        `)
      )}
    `
  }}
`

export default GlobalStyle