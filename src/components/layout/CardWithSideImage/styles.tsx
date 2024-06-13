import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { Col } from '../Grid'

export const StyledImageCol = styled(Col)<{
  reverseColumnsWhenStacked: boolean
  alignImage: 'start' | 'center' | 'end'
  justifyImage: 'start' | 'center' | 'end'
}>`
  display: flex;
  ${({ reverseColumnsWhenStacked, alignImage, justifyImage }) => css`
    ${reverseColumnsWhenStacked ? tw`order-last md:order-first` : ''}
    align-items: ${alignImage};
    justify-content: ${justifyImage};
  `}
`

export const StyledCardCol = styled(Col)<{
  alignCard: 'start' | 'center' | 'end'
  justifyCard: 'start' | 'center' | 'end'
}>`
  display: flex;
  ${({ alignCard, justifyCard }) => css`
    align-items: ${alignCard};
    justify-content: ${justifyCard};
  `}
`
