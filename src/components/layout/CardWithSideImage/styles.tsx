import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { Col } from '../Grid'

export const StyledImageCol = styled(Col)<{
  reverseColumnsWhenStacked: boolean
  alignImage: 'start' | 'center' | 'end'
  justifyImage: 'start' | 'center' | 'end'
}>`
  ${tw`flex`}
  ${({ reverseColumnsWhenStacked, alignImage, justifyImage }) => css`
    ${reverseColumnsWhenStacked ? tw`order-last md:order-first` : ''}
    ${alignImage === 'start' ? tw`items-start` : ''}
    ${alignImage === 'center' ? tw`items-center` : ''}
    ${alignImage === 'end' ? tw`items-end` : ''}
    ${justifyImage === 'start' ? tw`justify-start` : ''}
    ${justifyImage === 'center' ? tw`justify-center` : ''}
    ${justifyImage === 'end' ? tw`justify-end` : ''}
  `}
`

export const StyledCardCol = styled(Col)<{
  alignCard: 'start' | 'center' | 'end'
  justifyCard: 'start' | 'center' | 'end'
}>`
  ${tw`flex`}
  ${({ alignCard, justifyCard }) => css`
    ${alignCard === 'start' ? tw`items-start` : ''}
    ${alignCard === 'center' ? tw`items-center` : ''}
    ${alignCard === 'end' ? tw`items-end` : ''}
    ${justifyCard === 'start' ? tw`justify-start` : ''}
    ${justifyCard === 'center' ? tw`justify-center` : ''}
    ${justifyCard === 'end' ? tw`justify-end` : ''}
  `}
`
