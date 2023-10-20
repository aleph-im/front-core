import React from 'react'
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  Interpolation,
} from 'styled-components'
import { BreakpointId } from '../themes/types'
import {
  getDarkEffectCss,
  getGlassEffectBorderCss,
  getGlassEffectCss,
} from './glass'
import {
  getGlowHoverEffectCss,
  getGlowMaxEffectCss,
  getGlowMinEffectCss,
} from './glow'
import {
  colorFilled,
  getGradientNoiseEffectCss,
  getPlainNoiseEffectCss,
  gradientFilled,
} from './noise'
import {
  getBackgroundColorCss,
  getBackgroundGradientCss,
  getResponsiveCss,
  getTextColorCss,
  getTypoCss,
} from './utils'
import tw, { GlobalStyles as TailwindGlobalStyles } from 'twin.macro'
import { fontAwesomeCss } from './font'

export const GlobalStyles = () => (
  <>
    <TailwindGlobalStyles />
    <CustomGlobalStyles />
  </>
)

const CustomGlobalStyles = createGlobalStyle`
  ${({ theme }) => {
    const colorCss = colorClasses(theme)
    const functionalCss = functionalClasses()
    const effectCss = effectClasses()
    const typoCss = typoClasses(theme)

    return css`
      ${fontAwesomeCss}
      @import '${theme.font.url}';

      window {
        scroll-behavior: smooth;
      }

      html {
        /* @note: Scaled down by default (but all calculations from designs are consistent with base 16px = 1rem) */
        font-size: 14px;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: ${theme.color.background};
        color: ${theme.color.text};
        ${getTypoCss('body')}
        ${tw`antialiased`}
      }

      * {
        box-sizing: border-box;
      }

      p {
        color: ${theme.color.text}b3;
      }

      section {
        padding: ${theme.font.size['5xl']}rem ${theme.font.size['2xl']}rem;
      }

      form,
      input,
      textarea {
        ${getTypoCss('form')}
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      header {
        margin-top: 0;
        margin-bottom: ${theme.font.size['2xl']}rem;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      select:-webkit-autofill,
      select:-webkit-autofill:hover,
      select:-webkit-autofill:focus {
        -webkit-text-fill-color: ${theme.color.text};
        -webkit-box-shadow: 0 0 0px 1000px #ffffff00 inset;
        transition: background-color 5000s ease-in-out 0s;
        border-radius: 1.875rem;
      }

      ${colorCss}
      ${functionalCss}
      ${effectCss}
      ${typoCss}
    `
  }}
`

function colorClasses(theme: DefaultTheme) {
  return css`
    /* COLORS */
    ${Object.keys(theme.color).map(
      (color) => css`
        .bg-${color} {
          ${getBackgroundColorCss(color)}
        }
      `,
    )}

    /* TEXT COLORS */
    ${Object.keys(theme.color).map(
      (color) => css`
        .text-${color} {
          ${getTextColorCss(color)}
        }
      `,
    )}

    /* GRADIENTS */
    ${Object.keys(theme.gradient).map(
      (color) => css`
        .gr-${color} {
          ${getBackgroundGradientCss(color)}
        }
      `,
    )}
  `
}

function functionalClasses() {
  return css`
    .bg-success {
      background: ${({ theme }) => theme.color.success};
      box-shadow: inset 3px 3px 9px rgba(255, 255, 255, 0.65),
        inset 0px 63px 60px rgba(145, 255, 189, 0.63),
        inset 8.375px 13.4px 46.75px rgba(252, 255, 96, 0.75);
    }

    .bg-warning {
      background: ${({ theme }) => theme.color.warn};
      box-shadow: inset 3px 3px 9px rgba(255, 255, 255, 0.65),
        inset 0px 63px 60px rgba(255, 138, 0, 0.63),
        inset 8.375px 13.4px 46.75px rgba(255, 135, 83, 0.75);
    }

    .bg-error {
      background: ${({ theme }) => theme.color.error};
      box-shadow: inset 0px 1.675px 6px rgba(255, 255, 255, 0.17),
        inset -4px -1px 9px rgba(139, 99, 255, 0.19);
    }

    .gr-success {
      background: ${({ theme }) => theme.gradient.success.fn};
    }

    .gr-warning {
      background: ${({ theme }) => theme.gradient.warn.fn};
    }

    .gr-error {
      background: ${({ theme }) => theme.gradient.error.fn};
    }
  `
}

function effectClasses() {
  const glowColors = ['main0', 'main1', 'main2']
  const glowMaxColors = ['main0', 'main1', 'main2', 'extra0', 'extra1']
  const glassColors = [
    'main0',
    'main1',
    'main2',
    'base0',
    'base1',
    'base2',
    'colored0',
  ]
  const darkColors = ['main0']
  const noisePlainColors = Object.keys(colorFilled)
  const noiseGradientColors = Object.keys(gradientFilled)

  const glowHoverCss = glowColors.flatMap(
    (color) => css`
      .fx-glow-hover-${color} {
        ${getGlowHoverEffectCss(color)}
      }
    `,
  )

  const glowMinCss = glowColors.flatMap(
    (color) => css`
      .fx-glow-min-${color} {
        ${getGlowMinEffectCss(color)}
      }
    `,
  )

  const glowMaxCss = glowMaxColors.flatMap(
    (color) => css`
      .fx-glow-max-${color} {
        ${getGlowMaxEffectCss(color)}
      }
    `,
  )

  const glassCss = glassColors.flatMap(
    (color) => css`
      .fx-glass-${color} {
        ${getGlassEffectCss(color)}
      }

      .fx-glass-border-${color} {
        ${getGlassEffectBorderCss(color)}
      }
    `,
  )

  const darkCss = darkColors.flatMap(
    (color) => css`
      .fx-dark-${color} {
        ${getDarkEffectCss(color)}
      }
    `,
  )

  const noisePlainCss = noisePlainColors.flatMap(
    (color) => css`
      .fx-noise-${color} {
        ${getPlainNoiseEffectCss(color)}
      }
    `,
  )

  const noiseGradientCss = noiseGradientColors.flatMap(
    (color) => css`
      .fx-noise-${color} {
        ${getGradientNoiseEffectCss(color)}
      }
    `,
  )

  return css`
    ${glowHoverCss}
    ${glowMinCss}
    ${glowMaxCss}
    ${glassCss}
    ${darkCss}
    ${noisePlainCss}
    ${noiseGradientCss}
  `
}

function typoClasses(theme: DefaultTheme) {
  const typos = Object.entries(theme.typo).sort(
    ([, av], [, bv]) => av.size - bv.size,
  )

  const fontSizes = getSortedFontSizes(theme)

  function getTypoClasses(bp: string) {
    return typos.map(
      ([k, v]) => css`
        .${bp}tp-${k} ${v.tag && !bp ? `, ${k}` : ''} {
          ${getTypoCss(k as any)}
        }
      `,
    )
  }

  function getFontSizesClasses(bp: string) {
    return fontSizes.map(
      ([k, v]) => css`
        .${bp}fs-${k} {
          font-size: ${v};
        }
      `,
    )
  }

  const responsiveTypoCss = getResponsiveClasses(theme, getTypoClasses)

  const responsiveFontSizesCss = getResponsiveClasses(
    theme,
    getFontSizesClasses,
  )

  return css`
    /* TYPOS */
    ${responsiveTypoCss}

    /* FONT-SIZE */
    ${responsiveFontSizesCss}
  `
}

function getResponsiveClasses(
  theme: DefaultTheme,
  getClasses: (bp: string) => Interpolation<any>[],
) {
  const breakpointId = getSortedResponsiveBreakpoints(theme)

  return [undefined, ...breakpointId].map((bp) =>
    getResponsiveCss(bp, getClasses(bp ? `${bp}\\:` : '')),
  )
}

function getSortedResponsiveBreakpoints(theme: DefaultTheme): BreakpointId[] {
  return Object.entries(theme.breakpoint)
    .sort(([, av], [, bv]) => av - bv)
    .map(([k]) => k as BreakpointId)
}

function getSortedFontSizes(theme: DefaultTheme): [string, string][] {
  return [[0, 0], ...Object.entries(theme.font.size)]
    .sort(([, av], [, bv]) => av - bv)
    .map(([k, v]) => [k + '', (v ? `${v}rem` : '0') as string])
}
