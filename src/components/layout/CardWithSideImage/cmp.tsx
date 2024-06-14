import React, { memo } from 'react'
import { CardWithSideImageProps } from './types'
import { StyledCardCol, StyledImageCol } from './styles'
import { Row } from '../Grid'

export const CardWithSideImage = ({
  children,
  imageSrc,
  imageAlt = 'Card image',
  imagePosition = 'left',
  alignCard = 'center',
  justifyCard = 'center',
  alignImage = 'center',
  justifyImage = 'center',
  cardBackgroundColor = 'bg-none',
  reverseColumnsWhenStacked = false,
}: CardWithSideImageProps) => {
  const imageCol = (
    <StyledImageCol
      reverseColumnsWhenStacked={reverseColumnsWhenStacked}
      alignImage={alignImage}
      justifyImage={justifyImage}
    >
      <img src={imageSrc} alt={imageAlt} tw="relative! w-full" />
    </StyledImageCol>
  )

  const cardCol = (
    <StyledCardCol alignCard={alignCard} justifyCard={justifyCard}>
      <div className={cardBackgroundColor} tw="p-6 w-full">
        {children}
      </div>
    </StyledCardCol>
  )

  return (
    <Row xs={1} md={2} gap="1.5rem">
      {imagePosition === 'left' ? [imageCol, cardCol] : [cardCol, imageCol]}
    </Row>
  )
}
CardWithSideImage.displayName = 'CardWithSideImage'

export default memo(CardWithSideImage) as typeof CardWithSideImage
