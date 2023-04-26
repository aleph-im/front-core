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
  getNoiseSvgMaskCss,
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
      @import '${theme.font.url}';

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
        padding: ${theme.font.size.xxl}rem ${theme.font.size.lg}rem;
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
        margin-bottom: ${theme.font.size.lg}rem;
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
      background: #7cff79;
      box-shadow: inset 3px 3px 9px rgba(255, 255, 255, 0.65),
        inset 0px 63px 60px rgba(145, 255, 189, 0.63),
        inset 8.375px 13.4px 46.75px rgba(252, 255, 96, 0.75);
    }

    .bg-warning {
      background: #ffd179;
      box-shadow: inset 3px 3px 9px rgba(255, 255, 255, 0.65),
        inset 0px 63px 60px rgba(255, 138, 0, 0.63),
        inset 8.375px 13.4px 46.75px rgba(255, 135, 83, 0.75);
    }

    .bg-error {
      background: #d92446;
      box-shadow: inset 0px 1.675px 6px rgba(255, 255, 255, 0.17),
        inset -4px -1px 9px rgba(139, 99, 255, 0.19);
    }

    .gr-success {
      background: linear-gradient(90deg, #eeff9e 0%, #3affcc 100%);
    }

    .gr-warning {
      background: linear-gradient(90deg, #fff281 0%, #fbae18 100%);
    }

    .gr-error {
      background: linear-gradient(90deg, #ffb393 0%, #ff6161 90.62%);
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

  const noiseSvg = css`
    ${[
      ...noisePlainColors.map((x) => `.fx-noise-${x}::after`),
      ...noiseGradientColors.map((x) => `.fx-noise-${x}`),
    ].join(', ')} {
      ${getNoiseSvgMaskCss()}
    }
  `

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
    ${noiseSvg}
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
