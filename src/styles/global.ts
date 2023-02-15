import { createGlobalStyle, css } from "styled-components";
import { ThemeEffect, TypoKind } from "../themes/styles";
import { getBackgroundColorCss, getBackgroundGradientCss, getThemeGlowCss, getTypoCss } from "./utils";

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
          .glow-${glowType}-${glowColor} { ${getThemeGlowCss(glowType as keyof ThemeEffect['glow'], glowColor)} }
        `)
      )}
    `
  }}
`

export default GlobalStyle