import { ReactNode } from 'react'

export type AlignProps =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
export type JustifyProps =
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'

export type CardWithSideImageProps = {
  children: ReactNode
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  alignCard: AlignProps
  justifyCard: JustifyProps
  alignImage: AlignProps
  justifyImage: JustifyProps
  cardBackgroundColor: string
  reverseColumnsWhenStacked: boolean
}

export type StyledImageColProps = {
  reverseColumnsWhenStacked: boolean
  alignImage: AlignProps
  justifyImage: JustifyProps
}

export type StyledCardColProps = {
  alignCard: AlignProps
  justifyCard: JustifyProps
}
