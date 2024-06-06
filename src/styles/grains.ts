import { css, keyframes } from 'styled-components'

export const grainImg1 =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGZpbHRlciBpZD0iZmlsdGVyIj4KCQk8ZmVUdXJidWxlbmNlIAoJCQliYXNlRnJlcXVlbmN5PSIxIgoJCQl0eXBlPSdmcmFjdGFsTm9pc2UnCiAgICAgIG51bU9jdGF2ZXM9JzMnCiAgICAgIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz4KCQk8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMQoJCQkJCQkJCQkJCQkJIDAgMCAwIDAgMQoJCQkJCQkJCQkJCQkJIDAgMCAwIDAgMQoJCQkJCQkJCQkJCQkJIDAgMCAwIDEwIC03Ii8+Cgk8L2ZpbHRlcj4KCTxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmaWx0ZXIpIi8+Cjwvc3ZnPgoK')"

export const grainImg2 =
  "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGZpbHRlciBpZD0iZmlsdGVyIj4KCQk8ZmVUdXJidWxlbmNlIAoJCQliYXNlRnJlcXVlbmN5PSIuMjUiCgkJCXR5cGU9J2ZyYWN0YWxOb2lzZScKICAgICAgbnVtT2N0YXZlcz0nMycgCiAgICAgIHN0aXRjaFRpbGVzPSdzdGl0Y2gnLz4KCQk8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4xCgkJCQkJCQkJCQkJCQkgMCAwIDAgMCAwCgkJCQkJCQkJCQkJCQkgMCAwIDAgMCAwLjgwCgkJCQkJCQkJCQkJCQkgMCAwIDAgMTAgLTcuMjUiLz4KCTwvZmlsdGVyPgoJPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2ZpbHRlcikiLz4KPC9zdmc+')"

export type UniformGrainEffect = {
  opacity: number
  blendMode?: string
  image?: string
  background?: string
}

export const grainColor: Record<string, UniformGrainEffect> = {
  0: {
    opacity: 1,
    blendMode: 'overlay, normal',
    image: `${grainImg1}, radial-gradient(50% 50% at 50% 50%, #EDE4F9 0%, #FAF6FF 100%)`,
  },
  1: {
    opacity: 1,
    image: grainImg2,
    background: `radial-gradient(50% 50% at 50% 50%, #E2CEFA 0%, #FAF6FF 100%)`,
  },
  2: {
    opacity: 0.3,
    image: grainImg2,
    background: `radial-gradient(50% 50% at 50% 50%, #EBDAFF 0%, #F0E4FF 100%)`,
  },
  3: {
    opacity: 0.3,
    image: grainImg2,
    background: `radial-gradient(50% 50% at 50% 50%, #EBDAFF 0%, #f0e4ff91 100%)`,
  },
  4: {
    opacity: 1,
    image: grainImg2,
    background: `radial-gradient(50% 50% at 50% 50%, #E1D2F8 0%, #e1d2f80d 100%)`,
  },
  5: {
    opacity: 0.5,
    image: grainImg2,
    background: `radial-gradient(50% 50% at 50% 50%, #e1d2f866 0%, #e1d2f80d 100%), #F9F4FF`,
  },
}

const imageWidth = 22
const imageRatio = 0.68760300311

//image ratio is 1.45432756325
const moveBackground = keyframes` 
  0%{
    background-position: 0 0;
  }

  100% {
    background-position: ${imageWidth}rem -${imageWidth * imageRatio}rem;
  }
`

export function getPlainGrainEffectCss(color: string) {
  const { image, background, opacity, blendMode } = grainColor[color]

  return css`
    position: relative;
    background: ${background};
    z-index: 0;

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
      /* background-image: ${image}; */
      background-blend-mode: ${blendMode};
      background-repeat: repeat;
      background-size: ${imageWidth}rem ${imageWidth * imageRatio}rem;
      animation: 20s linear 0s infinite ${moveBackground};
      /* background-attachment: fixed; */
    }
  `
}

export function getGrainImg1Css() {
  return css`
    &::after {
      background-image: ${grainImg1},
        radial-gradient(50% 50% at 50% 50%, #ede4f9 0%, #faf6ff 100%);
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
