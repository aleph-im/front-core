import { createGlobalStyle, css, DefaultTheme } from 'styled-components'
import { BreakpointId } from '../themes/types'
import { getDarkEffectCss, getGlassEffectBorderCss, getGlassEffectCss } from './glass'
import { getGlowHoverEffectCss, getGlowMaxEffectCss, getGlowMinEffectCss } from './glow'
import { colorFilled, getGradientNoiseEffectCss, getNoiseSvgMaskCss, getPlainNoiseEffectCss, gradientFilled } from './noise'
import {
  getBackgroundColorCss,
  getBackgroundGradientCss,
  getResponsiveCss,
  getTypoCss,
} from './utils'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => {

    const colorCss = colorClasses(theme)
    const typoCss = typoClasses(theme)
    const effectCss = effectClasses()
    const marginPaddingCss = marginPaddingClasses(theme)
    const displayCss = displayClasses(theme)
    const flexCss = flexClasses(theme)

    return css`
      @import '${theme.font.url}';

      body {
        margin: 0;
        padding: 0;
        background-color: ${theme.color.background};
        color: ${theme.color.text};
        ${getTypoCss('body')}
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

      form, input, textarea {
        ${getTypoCss('form')}
      }
      
      h1, h2, h3, h4, h5, h6, h7, header {
        margin-top: 0;
        margin-bottom: ${theme.font.size.lg}rem;
      }

      ${colorCss}
      ${typoCss}
      ${effectCss}
      ${marginPaddingCss}
      ${displayCss}
      ${flexCss}
    `
  }}
`

function displayClasses(theme: DefaultTheme) {
  const breakpointId = getSortedResponsiveBreakpoints(theme)

  function getClasses(bp: string = '') {
    bp = bp ? `-${bp}` : ''

    return css`
      .d-block${bp} { display: block; }
      .d-flex${bp} { display: flex; }
      .d-iblock${bp} { display: inline-block; }
      .d-iflex${bp} { display: inline-flex; }
      .d-none${bp} { display: none; }
    `
  }

  const responsiveCss = [undefined, ...breakpointId].map(bp => getResponsiveCss(bp, getClasses(bp)))

  return css`
     ${responsiveCss}
   `
}

function flexClasses(theme: DefaultTheme) {
  const breakpointId = getSortedResponsiveBreakpoints(theme)
  const fontSizes = getSortedFontSizes(theme)

  function getCommonClasses(bp: string = '') {
    bp = bp ? `-${bp}` : ''

    return css`
      .flex-1${bp} { flex: 1 1 0%; }
      .flex-auto${bp} { flex: 1 1 auto; }
      .flex-initial${bp} { flex: 0 1 auto; }
      .flex-none${bp} { flex: none; }

      .flex-row${bp} { flex-direction: row; }
      .flex-row-reverse${bp} { flex-direction: row-reverse; }
      .flex-col${bp} { flex-direction: column; }
      .flex-col-reverse${bp} { flex-direction: column-reverse; }

      .order-first${bp} { order: -999; }
      .order-none${bp}{ order: 0; }
      .order-1${bp} { order: 1; }
      .order-2${bp} { order: 2; }
      .order-3${bp} { order: 3; }
      .order-4${bp} { order: 4; }
      .order-last${bp} { order: 999; }
    `
  }

  function getGapClasses(k: string, v: string, bp: string = '') {
    bp = bp ? `-${bp}` : ''

    return css`
      .gap-${k}${bp} { gap: ${v}; }
      .gap-y-${k}${bp} { column-gap: ${v}; }
      .gap-x-${k}${bp} { row-gap: ${v}; }
    `
  }

  function getGapCss(bp?: BreakpointId) {
    return fontSizes.map(([k, v]) => getGapClasses(k, v, bp))
  }

  const responsiveCss = [undefined, ...breakpointId].map(bp => getResponsiveCss(bp, getCommonClasses(bp)))
  const responsiveGapCss = [undefined, ...breakpointId].map(bp => getResponsiveCss(bp, getGapCss(bp)))

  return css`
     ${responsiveCss}
     ${responsiveGapCss}
   `
}


function marginPaddingClasses(theme: DefaultTheme) {
  const breakpointId = getSortedResponsiveBreakpoints(theme)
  const fontSizes = getSortedFontSizes(theme)

  function getClasses(k: string, v: string, neg: boolean = false, bp: string = '') {
    if (neg && k === '0') return css``

    const n = neg ? '-' : ''
    bp = bp ? `-${bp}` : ''

    return css`
      .${n}m-${k}${bp} { margin: ${n}${v}; }
      .${n}mt-${k}${bp}, .${n}my-${k}${bp} { margin-top: ${n}${v}; }
      .${n}mb-${k}${bp}, .${n}my-${k}${bp} { margin-bottom: ${n}${v}; }
      .${n}ml-${k}${bp}, .${n}mx-${k}${bp} { margin-left: ${n}${v}; }
      .${n}mr-${k}${bp}, .${n}mx-${k}${bp} { margin-right: ${n}${v}; }
  
      .${n}p-${k}${bp} { padding: ${n}${v}; }
      .${n}pt-${k}${bp}, .${n}py-${k}${bp} { padding-top: ${n}${v}; }
      .${n}pb-${k}${bp}, .${n}py-${k}${bp} { padding-bottom: ${n}${v}; }
      .${n}pl-${k}${bp}, .${n}px-${k}${bp} { padding-left: ${n}${v}; }
      .${n}pr-${k}${bp}, .${n}px-${k}${bp} { padding-right: ${n}${v}; }
    `
  }

  function getCss(bp?: BreakpointId) {
    return [
      ...fontSizes.flatMap(([k, v]) => [
        getClasses(k, v, false, bp),
        getClasses(k, v, true, bp)
      ]),
      getClasses('auto', 'auto', false, bp)
    ]
  }

  const responsiveCss = [undefined, ...breakpointId].map(bp => getResponsiveCss(bp, getCss(bp)))

  return css`
    ${responsiveCss}
  `
}

function colorClasses(theme: DefaultTheme) {
  return css`
    /* COLORS */
    ${Object.keys(theme.color).map((color) => css`
      .bg-${color} {
        ${getBackgroundColorCss(color)}
      }
    `)}

    /* GRADIENTS */
    ${Object.keys(theme.gradient).map((color) => css`
      .gr-${color} {
        ${getBackgroundGradientCss(color)}
      }
    `)}
  `
}

function typoClasses(theme: DefaultTheme) {
  const breakpointId = getSortedResponsiveBreakpoints(theme)

  const typos = Object.entries(theme.typo)
    .sort(([, av], [, bv]) => av.size - bv.size)

  const fontSizes = Object.entries(theme.font.size)
    .sort(([, av], [, bv]) => av - bv)

  function getTypoClasses(bp: string = '') {
    bp = bp ? `-${bp}` : ''
    return typos.map(([k, v]) => css`
      .tp-${k}${bp} ${v.tag && !bp ? `, ${k}` : ''} {
        ${getTypoCss(k as any)}
      }
    `)
  }

  function getFontSizesClasses(bp: string = '') {
    bp = bp ? `-${bp}` : ''
    return fontSizes.map(([k, v]) => css`
      .fs-${k}${bp} {
        font-size: ${v}rem;
      }
    `)
  }

  const responsiveTypoCss = [undefined, ...breakpointId].map(bp => getResponsiveCss(bp, getTypoClasses(bp)))
  const responsiveFontSizesCss = [undefined, ...breakpointId].map(bp => getResponsiveCss(bp, getFontSizesClasses(bp)))

  return css`
    /* TYPOS */
    ${responsiveTypoCss}

    /* FONT-SIZE */
    ${responsiveFontSizesCss}
  `
}

function effectClasses() {
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

    .fx-glass-border-${color} {
      ${getGlassEffectBorderCss(color)}
    }
  `)

  const darkCss = darkColors.flatMap((color) => css`
    .fx-dark-${color} {
      ${getDarkEffectCss(color)}
    }
  `)

  const noiseSvg = css`
    ${[...noisePlainColors.map(x => `.fx-noise-${x}::after`), ...noiseGradientColors.map(x => `.fx-noise-${x}`)].join(', ')} {
      ${getNoiseSvgMaskCss()}
    }
  `

  const noisePlainCss = noisePlainColors.flatMap((color) => css`
    .fx-noise-${color} {
      ${getPlainNoiseEffectCss(color)}
    }
  `)

  const noiseGradientCss = noiseGradientColors.flatMap((color) => css`
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
    ${noiseSvg}
    ${noisePlainCss}
    ${noiseGradientCss}
  `
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
