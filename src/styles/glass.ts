import { css } from 'styled-components'
import { calculateBoxShadowPossition } from './glow'

export type GlassOpts = { width?: number; height?: number; offset?: boolean }

export function getGlassEffectCss(
  color: string,
  opts?: GlassOpts,
) {
  return css`
    ${({ theme }) => {
      if (color === 'main0' || color === 'main1' || color === 'main2') {
        // inset 0 -82px 68px -64px #494DA966,
        // inset 0 7px 11px -4px #FFFFFFE5,
        // inset 0 39px 56px -36px #FFFFFF66,
        // inset 0 1px 40px 0px #DEEFFF1A,
        // inset 0 4px 18px 0px #5E9DD766,
        // inset 0 98px 100px -48px #00D1FF2E;

        const bs = {
          s1: [0, -0.4271, 0.3542, -0.3333],
          s2: [0, 0.0365, 0.0573, -0.0208],
          s3: [0, 0.2031, 0.2917, -0.1875],
          s4: [0, 0.0052, 0.2083, 0],
          s5: [0, 0.0208, 0.0938, 0],
          s6: [0, 0.5104, 0.5208, -0.25],
        }

        const bss = calculateBoxShadowPossition(bs, opts)

        const c = theme.gradient[color].colors
        const bg = `background-image: linear-gradient(90deg, ${c[0]}03 0%, ${c[1]}03 100%);`

        switch (color) {
          case 'main0':
            return css`
              ${bg}
              box-shadow: 
                inset ${bss.s1} #494DA966,
                inset ${bss.s2} #FFFFFFE5,
                inset ${bss.s3} #FFFFFF66,
                inset ${bss.s4} #DEEFFF1A,
                inset ${bss.s5} #5E9DD766,
                inset ${bss.s6} #00D1FF2E;
            `
          case 'main1':
            return css`
              ${bg}
              box-shadow:
                inset ${bss.s1} #4462904D,
                inset ${bss.s2} #FFFFFF,
                inset ${bss.s3} #FFFFFF80,
                inset ${bss.s4} #DEFFF533,
                inset ${bss.s5} #92D2AF4D,
                inset ${bss.s6} #00FFBD2E;
            `
          case 'main2':
            return css`
              ${bg}
              box-shadow:
                inset ${bss.s1} #FF5C0017,
                inset ${bss.s2} #FFFFFF,
                inset ${bss.s3} #FFFFFF80,
                inset ${bss.s4} #FFFCDE33,
                inset ${bss.s5} #805B234D,
                inset ${bss.s6} #F3FFC11A;
            `
        }
      } else {
        const bs = {
          s1: [0, 0.0052, 0.2083, 0],
          s2: [0, 0.0208, 0.0938, 0],
        }
        const bss = calculateBoxShadowPossition(bs, opts)

        const c = theme.gradient.main0.colors

        switch (color) {
          case 'base0':
            return css`
              border: 1px solid #FFFFFF1A;
              background-image:
                linear-gradient(91.23deg, #FFFFFF11 11.38%, #FFFFFF00 96.5%),
                linear-gradient(84.86deg, #2260FF0C 65.23%, #1859FF00 99.89%),
                linear-gradient(0deg, ${theme.color.background}, ${theme.color.background});
            `
          case 'base1':
            return css`
              background-image:
                linear-gradient(90.96deg, #1D1C3780 54.81%, #1D1C3700 103.58%);
            `
          case 'base2':
            return css`
              background: ${theme.color.main0}03;
              box-shadow: 
                inset ${bss.s1} #DEEFFF05,
                inset ${bss.s2} #5E9DD705;
            `
          case 'colored0':
            return css`
              border: 1px solid #FFFFFF1A;
              background: 
                linear-gradient(91.23deg, #FFFFFF11 11.38%, #FFFFFF00 96.5%),
                linear-gradient(342.74deg, #2D113A66 22.13%, #43125900 67.01%),
                linear-gradient(107.53deg, ${c[0]}4D 16.25%, ${c[1]}4D 82.42%),
                linear-gradient(0deg, ${theme.color.background}, ${theme.color.background});
            `
        }
      }
    }}
  `
}

export function getDarkEffectCss(
  color: string,
  opts?: GlassOpts,
) {
  return css`
    ${({ theme }) => {
      const bs = {
        s1: [0, 0.0052, 0.2604, 0],
      }

      const bss = calculateBoxShadowPossition(bs, opts)

      return css`
        background-color: ${theme.color.main0}03;
        box-shadow: ${bss.s1} #00000080;
      `
    }}
  `
}
