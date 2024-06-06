import { css, keyframes } from 'styled-components'

export const grainImg1 =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAwIiB3aWR0aD0iNDAwIj4KCTxmaWx0ZXIgaWQ9ImZpbHRlciI+CgkJPGZlVHVyYnVsZW5jZSAKCQkJYmFzZUZyZXF1ZW5jeT0iMSIKCQkJdHlwZT0nZnJhY3RhbE5vaXNlJwogICAgICBudW1PY3RhdmVzPSczJyAvPgoJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAxCgkJCQkJCQkJCQkJCQkgMCAwIDAgMCAxCgkJCQkJCQkJCQkJCQkgMCAwIDAgMCAxCgkJCQkJCQkJCQkJCQkgMCAwIDAgMTAgLTYiLz4KCTwvZmlsdGVyPgoJPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2ZpbHRlcikiLz4KPC9zdmc+Cgo=')"

export const grainImg2 =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDAwIiB3aWR0aD0iNDAwIj4KCTxmaWx0ZXIgaWQ9ImZpbHRlciI+CgkJPGZlVHVyYnVsZW5jZSAKCQkJYmFzZUZyZXF1ZW5jeT0iLjI1IgoJCQl0eXBlPSdmcmFjdGFsTm9pc2UnCiAgICAgIG51bU9jdGF2ZXM9JzMnIC8+CgkJPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMQoJCQkJCQkJCQkJCQkJIDAgMCAwIDAgMAoJCQkJCQkJCQkJCQkJIDAgMCAwIDAgMC44MAoJCQkJCQkJCQkJCQkJIDAgMCAwIDEwIC03LjI1Ii8+Cgk8L2ZpbHRlcj4KCTxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmaWx0ZXIpIi8+Cjwvc3ZnPg==')"

export type UniformGrainEffect = {
  opacity: number
  background?: string
}

export const grainColor: Record<string, UniformGrainEffect> = {
  0: {
    opacity: 1,
    background: `radial-gradient(50% 50% at 50% 50%, #E2CEFA 0%, #FAF6FF 100%)`,
  },
  1: {
    opacity: 1,
    background: `radial-gradient(50% 50% at 50% 50%, #E2CEFA 0%, #FAF6FF 100%)`,
  },
  2: {
    opacity: 0.3,
    background: `radial-gradient(50% 50% at 50% 50%, #EBDAFF 0%, #F0E4FF 100%)`,
  },
  3: {
    opacity: 0.3,
    background: `radial-gradient(50% 50% at 50% 50%, #EBDAFF 0%, #f0e4ff91 100%)`,
  },
  4: {
    opacity: 1,
    background: `radial-gradient(50% 50% at 50% 50%, #E1D2F8 0%, #e1d2f80d 100%)`,
  },
  5: {
    opacity: 0.5,
    background: `radial-gradient(50% 50% at 50% 50%, #e1d2f866 0%, #e1d2f80d 100%), #F9F4FF`,
  },
}

const imageWidth = 25
const imageRatio = 1
const imageHeight = imageWidth * imageRatio

//image ratio is 1.45432756325
const moveBackground = keyframes` 
  0%{
    background-position: 0 0;
  }

  100% {
    background-position: ${imageWidth}rem -${imageHeight}rem;
  }
`

export function getPlainGrainEffectCss(color: string) {
  const { background, opacity } = grainColor[color]

  return css`
    position: relative;
    background: ${background};
    z-index: 0;
    backface-visibility: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      z-index: -1;
      pointer-events: none;
      opacity: ${opacity};
      background-repeat: repeat;
      background-size: ${imageWidth}rem ${imageHeight}rem;
      animation: 20s linear 0s infinite ${moveBackground};
    }
  `
}

export function getGrainImg1Css() {
  return css`
    &::after {
      background-image: ${grainImg1};
    }
  `
}

export function getGrainImg2Css() {
  return css`
    &::after {
      background-image: ${grainImg2};
    }
  `
}
