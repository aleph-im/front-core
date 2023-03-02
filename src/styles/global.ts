import { createGlobalStyle, css, DefaultTheme } from 'styled-components'
import { BreakpointId } from '../themes/types'
import { getDarkEffectCss, getGlassEffectCss } from './glass'
import { getGlowHoverEffectCss, getGlowMaxEffectCss, getGlowMinEffectCss } from './glow'
import { colorFilled, getGradientNoiseEffectCss, getPlainNoiseEffectCss, gradientFilled } from './noise'
import {
  getBackgroundColorCss,
  getBackgroundGradientCss,
  getResponsiveCss,
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

      * {
        box-sizing: border-box;
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
  const glowColors = ['main0', 'main1', 'main2']
  const glowMaxColors = ['main0', 'main1', 'main2', 'extra0', 'extra1']
  const glassColors = ['main0', 'main1', 'main2', 'base0', 'base1', 'base2', 'colored0']
  const darkColors = ['main0']
  const noisePlainColors = Object.keys(colorFilled)
  const noiseGradientColors = Object.keys(gradientFilled)


  const glowHoverCss = glowColors.flatMap((color) => css`
    .fx-glow-hover-${color} {
      ${getGlowHoverEffectCss(color)}
    }
  `)

  const glowMinCss = glowColors.flatMap((color) => css`
    .fx-glow-min-${color} {
      ${getGlowMinEffectCss(color)}
    }
  `)

  const glowMaxCss = glowMaxColors.flatMap((color) => css`
    .fx-glow-max-${color} {
      ${getGlowMaxEffectCss(color)}
    }
  `)

  const glassCss = glassColors.flatMap((color) => css`
    .fx-glass-${color} {
      ${getGlassEffectCss(color)}
    }
  `)

  const darkCss = darkColors.flatMap((color) => css`
    .fx-dark-${color} {
      ${getDarkEffectCss(color)}
    }
  `)

  const noisePlainCss = noisePlainColors.map((color) => css`
    .fx-noise-${color} {
      ${getPlainNoiseEffectCss(color)}
    }
  `)

  const noiseGradientCss = noiseGradientColors.map((color) => css`
    .fx-noise-${color} {
      ${getGradientNoiseEffectCss(color)}
    }
  `)

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

export default GlobalStyle
