import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { Col } from '../Grid'
import { AlignProps, JustifyProps } from './types'

export const StyledImageCol = styled(Col)<{
  $reverseColumnsWhenStacked: boolean
  $alignImage: AlignProps
  $justifyImage: JustifyProps
}>`
  display: flex;
  ${({ $reverseColumnsWhenStacked, $alignImage, $justifyImage }) => css`
    ${$reverseColumnsWhenStacked ? tw`order-last md:order-none` : ''}
    align-items: ${$alignImage};
    justify-content: ${$justifyImage};
  `}
`

export const StyledCardCol = styled(Col)<{
  $alignCard: AlignProps
  $justifyCard: JustifyProps
}>`
  display: flex;
  ${({ $alignCard, $justifyCard }) => css`
    align-items: ${$alignCard};
    justify-content: ${$justifyCard};
  `}
`
