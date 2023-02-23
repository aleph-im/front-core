import { css } from 'styled-components'
import { ThemeColor } from '../themes/types'

export function getNoiseEffectCss(color?: keyof ThemeColor, opacity?: number) {
  const SVGMask = `data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${Math.PI}' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`

  return css`
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: ${opacity || 1};
      mask-image: ${SVGMask};
      border-radius: inherit;
      -webkit-mask-image: ${SVGMask};
      background-image: linear-gradient(
        to bottom,
        ${color || '#FFFFFFAA'},
        ${color ? 'transparent' : '#FFFFFFAA'}
      );
      mix-blend-mode: overlay;
    }
  `
}
