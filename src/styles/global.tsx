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
  noiseColor,
  getGradientNoiseEffectCss,
  getPlainNoiseEffectCss,
  noiseGradient,
  getNoiseImg1Css,
  getNoiseImg2Css,
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
import {
  getGrainImg1Css,
  getGrainImg2Css,
  getPlainGrainEffectCss,
  grainColor,
} from './grains'

export const GlobalStyles = () => (
  <>
    <TailwindGlobalStyles />
    <CustomGlobalStyles />
  </>
)

const CustomGlobalStyles = createGlobalStyle`
  ${({ theme }) => {
    const colorCss = colorClasses(theme)
    const effects1Css = alephEffectClasses(theme)
    const effects2Css = twentysixEffectClasses(theme)
    const typoCss = typoClasses(theme)
    const fontUrlCss = fontUrlImports(theme)

    return css`
      ${fontAwesomeCss}
      ${fontUrlCss}

      ${colorCss}
      ${effects1Css}
      ${effects2Css}
      ${typoCss}

      window {
        scroll-behavior: smooth;
      }

      html {
        font-size: 16px;
      }

      body {
        ${tw`m-0 p-0 antialiased`}
        background-color: ${theme.color.background};
        color: ${theme.color.text};
        /* @note: overrides tp-body, from body typoCss */
        line-height: normal;
      }

      * {
        box-sizing: border-box;
      }

      p {
        color: ${theme.color.text}b3;
        ${getTypoCss('body')}
      }

      section {
        padding: 3rem 1.5rem;
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
        margin-bottom: 1.5rem;
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

function fontUrlImports(theme: DefaultTheme) {
  const importCss = theme.font.urls.flatMap(
    (url) => css`
      @import '${url}';
    `,
  )

  return css`
    ${importCss}
  `
}

function alephEffectClasses(theme: DefaultTheme) {
  if (theme.name !== 'aleph') return

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
  const noisePlainColors = Object.keys(noiseColor)
  const noiseGradientColors = Object.keys(noiseGradient)

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

  const noiseImg1Css = css`
    ${noisePlainColors.map((color) => `.fx-noise-${color}`).join(', ')} {
      ${getNoiseImg1Css()}
    }
  `

  const noiseImg2Css = css`
    ${noiseGradientColors.map((color) => `.fx-noise-${color}`).join(', ')} {
      ${getNoiseImg2Css()}
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
    ${noiseImg1Css}
    ${noiseImg2Css}
    ${noisePlainCss}
    ${noiseGradientCss}
  `
}

function twentysixEffectClasses(theme: DefaultTheme) {
  if (theme.name !== 'twentysix') return

  const grainPlainColors = Object.keys(grainColor)
  const [colors1, ...colors2] = grainPlainColors

  const grainImg1Css = css`
    ${[colors1].map((color) => `.fx-grain-${color}`).join(', ')} {
      ${getGrainImg1Css()}
    }
  `

  const grainImg2Css = css`
    ${colors2.map((color) => `.fx-grain-${color}`).join(', ')} {
      ${getGrainImg2Css()}
    }
  `

  const grainPlainCss = grainPlainColors.flatMap(
    (color) => css`
      .fx-grain-${color} {
        ${getPlainGrainEffectCss(color)}
      }
    `,
  )

  return css`
    ${grainImg1Css}
    ${grainImg2Css}
    ${grainPlainCss}
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
