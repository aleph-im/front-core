import { css } from 'styled-components'

export const gradientFilled: Record<string, string> = {
  main0: 'linear-gradient(#81b8d8, #4b6599)',
  main1: 'linear-gradient(#a2dfce, #607a84)',
  main2: 'linear-gradient(#c0b6a4, #675550)',
}

type UniformNoiseEffect = { dotsColor: string; backgroundColor: string }
export const colorFilled: Record<string, UniformNoiseEffect> = {
  base: { dotsColor: '#dfdfe1', backgroundColor: 'transparent' },
  dark: { dotsColor: '#1e1d2c', backgroundColor: '#100f1f' },
  light: { dotsColor: '#2a293e', backgroundColor: '#19182f' },
}

const SVGMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 700 700' width='700' height='700' opacity='1'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' seed='15' stitchTiles='stitch' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='8' specularConstant='1.2' specularExponent='20' lighting-color='%23ffffff' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E%3CfeDistantLight azimuth='3' elevation='130'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%2300000000'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ffffff' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`

export function getPlainNoiseEffectCss(color: string) {
  return css`
    position: relative;
    background-color: ${colorFilled[color].backgroundColor};
    border-radius: inherit;
    z-index: -1;

    &::after {
      content: '';
      background-color: ${colorFilled[color].dotsColor};
      mask-image: ${SVGMask};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      z-index: -1;
    }
  `
}

export function getGradientNoiseEffectCss(color: string) {
  return css`
    mask-image: ${SVGMask};
    background-image: ${gradientFilled[color]};
    border-radius: inherit;
  `
}
