import { createGlobalStyle, css, DefaultTheme } from 'styled-components'
import { BreakpointId, ThemeEffect } from '../themes/types'
import {
  getBackgroundColorCss,
  getBackgroundGradientCss,
  getResponsiveCss,
  getThemeDarkEffect,
  getThemeGlassEffect,
  getThemeGlowEffect,
  getTypoCss,
} from './utils'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {
    return css`
      @import '${theme.font.url}';

      body {
        margin: 0;
        padding: 0;
        font-family: ${theme.typo.body.family};
        font-style: ${theme.typo.body.style};
        font-weight: ${theme.typo.body.weight};
        font-size: ${theme.typo.body.size}rem;
        background-color: ${theme.color.background};
        color: ${theme.color.text};
      }

      p {
        color: ${theme.color.text}b3;
        line-height: 1.625rem
      }

      section {
        padding: ${theme.font.size.xxl}rem ${theme.font.size.lg}rem;
      }

      ${colorClasses(theme)}
      ${typoClasses(theme)}
      ${effectClasses(theme)}
      ${marginPaddingClasses(theme)}
      ${displayClasses(theme)}
    `
  }}
`

function displayClasses(theme: DefaultTheme) {
  const breakpointId = Object.entries(theme.breakpoint).sort(([, av], [, bv]) => av - bv).map(([k]) => k as BreakpointId)

  function getClasses(bp: string) {
    bp = bp ? `-${bp}` : ''

    return css`
      .d-block${bp} { display: block; }
      .d-flex${bp} { display: flex; }
      .d-iblock${bp} { display: inline-block; }
      .d-iflex${bp} { display: inline-flex; }
      .d-none${bp} { display: none; }
    `
  }

  const defaultCss = getClasses('')
  const responsiveCss = breakpointId.map(bp => getResponsiveCss(bp, getClasses(bp)))

  return css`
     ${defaultCss}
     ${responsiveCss}
   `

}

function marginPaddingClasses(theme: DefaultTheme) {
  const breakpointId = Object.entries(theme.breakpoint).sort(([, av], [, bv]) => av - bv).map(([k]) => k as BreakpointId)
  const sizes = [[0, 0], ...Object.entries(theme.font.size)].sort(([, av], [, bv]) => av - bv).map(([k, v]) => [k as string, (v ? `${v}rem` : '0') as string])

  function getClasses(bp: string, k: string, v: string) {
    bp = bp ? `-${bp}` : ''

    return css`
      .m-${k}${bp} { margin: ${v}; }
      .mt-${k}${bp}, .my-${k}${bp} { margin-top: ${v}; }
      .mb-${k}${bp}, .my-${k}${bp} { margin-bottom: ${v}; }
      .ml-${k}${bp}, .mx-${k}${bp} { margin-left: ${v}; }
      .mr-${k}${bp}, .mx-${k}${bp} { margin-right: ${v}; }
  
      .p-${k}${bp} { padding: ${v}; }
      .pt-${k}${bp}, .py-${k}${bp} { padding-top: ${v}; }
      .pb-${k}${bp}, .py-${k}${bp} { padding-bottom: ${v}; }
      .pl-${k}${bp}, .px-${k}${bp} { padding-left: ${v}; }
      .pr-${k}${bp}, .px-${k}${bp} { padding-right: ${v}; }
    `
  }

  const defaultCss = sizes.map(([k, v]) => getClasses('', k, v))

  const responsiveCss = breakpointId.map(bp => getResponsiveCss(bp,
    sizes.map(([k, v]) => getClasses(bp, k, v))
  ))

  return css`
    ${defaultCss}
    ${responsiveCss}
  `
}

function colorClasses(theme: DefaultTheme) {
  return css`
    /* COLORS */
    ${Object.keys(theme.color).map(
    (color) => css`
      .bg-${color} {
        ${getBackgroundColorCss(color)}
      }
    `,
  )
    }

    /* GRADIENTS */
    ${Object.keys(theme.gradient).map(
      (color) => css`
      .gr-${color} {
        ${getBackgroundGradientCss(color)}
      }
    `,
    )
    }
    `
}

function typoClasses(theme: DefaultTheme) {
  return css`
    /* TYPOS */
    ${Object.entries(theme.typo).map(
    ([k, v]) => css`
      .tp-${k} ${v.tag ? `, ${k}` : ''} {
        ${getTypoCss(k as any)}
        display: block;
        margin-top: 0;
        margin-bottom: ${theme.font.size.lg}rem;
      }
    `,
  )
    }

    /* FONT-SIZE */
     ${Object.entries(theme.font.size).map(
      ([k, v]) => css`
      .fs-${k} {
        font-size: ${v}rem;
      }
    `,
    )
    }
    `
}

function effectClasses(theme: DefaultTheme) {
  return css`
    /* GLOW */
    ${Object.keys(theme.effect.glow).flatMap((glowType) =>
    Object.keys(theme.effect.glow[glowType as keyof ThemeEffect['glow']]).map(
      (glowColor) => css`
          .fx-glow-${glowType}-${glowColor} {
            ${getThemeGlowEffect(theme, glowType as keyof ThemeEffect['glow'], glowColor)}
          }
        `,
    ),
  )
    }

    /* GLASS */
    ${Object.keys(theme.effect.glass).map(
      (glassColor) => css`
        .fx-glass-${glassColor} {
          ${getThemeGlassEffect(theme, glassColor)}
        }
      `,
    )
    }

    /* GLASS */
    ${Object.keys(theme.effect.dark).map(
      (darkColor) => css`
        .fx-dark-${darkColor} {
          ${getThemeDarkEffect(theme, darkColor)}
        }
      `,
    )
    }
    `
}

export default GlobalStyle
