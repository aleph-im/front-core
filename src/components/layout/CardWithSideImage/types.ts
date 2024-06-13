import { ReactNode } from 'react'

export type CardWithSideImageProps = {
  children: ReactNode
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
  alignCard: 'start' | 'center' | 'end'
  justifyCard: 'start' | 'center' | 'end'
  alignImage: 'start' | 'center' | 'end'
  justifyImage: 'start' | 'center' | 'end'
  cardBackgroundColor: string
  reverseColumnsWhenStacked: boolean
}
