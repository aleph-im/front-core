import styled, { css } from 'styled-components'
import { StyledObjectImgProps } from './types'
import tw from 'twin.macro'
import { NoisyContainer } from '../../forms/NoisyContainer'

export const StyledObjectImgContainer = styled.div<StyledObjectImgProps>`
  ${({ size }) => {
    const s = typeof size === 'string' ? size : `${size / 16}rem`

    return css`
      display: inline-block;
      position: relative;
      width: ${s};
      height: ${s};
      background-color: transparent;
    `
  }}
`

export const StyledShape = styled(NoisyContainer).attrs((props) => {
  return {
    ...props,
    type: 'grain-1',
  }
})`
  ${() => {
    return css`
      &::before {
        ${tw`content-[''] block absolute inset-0`}
        background-color: white;
        clip-path: polygon(
          40% 1%,
          99% 1%,
          99% 84%,
          60% 99%,
          1% 99%,
          1% 16%,

          40% 1%,
          40% 0%,

          0% 15%,
          0% 100%,
          60% 100%,
          100% 85%,
          100% 0%,
          40% 0%
        );
      }

      ${tw`p-0 w-full h-full`}
      padding: 1%;
      clip-path: polygon(40% 0%, 100% 0%, 100% 85%, 60% 100%, 0% 100%, 0% 15%);
    `
  }}
`
