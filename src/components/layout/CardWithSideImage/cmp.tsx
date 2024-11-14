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
  cardOccupation = 5,
  spaceBetween = '1.5rem',
}: CardWithSideImageProps) => {
  const imagePercentageOccupation = 10 - cardOccupation

  const imageCol = (
    <StyledImageCol
      md={imagePercentageOccupation}
      $reverseColumnsWhenStacked={reverseColumnsWhenStacked}
      $alignImage={alignImage}
      $justifyImage={justifyImage}
    >
      <img src={imageSrc} alt={imageAlt} tw="relative! w-full" />
    </StyledImageCol>
  )

  const cardCol = (
    <StyledCardCol
      md={cardOccupation}
      $alignCard={alignCard}
      $justifyCard={justifyCard}
    >
      <div className={cardBackgroundColor} tw="p-6 w-full">
        {children}
      </div>
    </StyledCardCol>
  )

  return (
    <Row xs={1} md={10} gap={spaceBetween}>
      {imagePosition === 'left' ? [imageCol, cardCol] : [cardCol, imageCol]}
    </Row>
  )
}
CardWithSideImage.displayName = 'CardWithSideImage'

export default memo(CardWithSideImage) as typeof CardWithSideImage
