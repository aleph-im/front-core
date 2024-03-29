import React, { memo } from 'react'
import ObjectImg from '../../common/ObjectImg'
import { ObjectId } from '../../common/ObjectImg/types'
import {
  StyledCardContentContainer,
  StyledCardFooterContainer,
  StyledCardHeader,
  StyledCardHeaderContainer,
  StyledCardContainer,
} from './styles'
import { CardProps } from './types'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

export const Card = ({
  headerImg = 'Object1',
  variant = 'block',
  titleInfo,
  title,
  text,
  buttonLabel,
  buttonColor,
  buttonVariant,
  buttonOnClick,
  buttonDisabled,
  header,
  content,
  footer,
  ...rest
}: CardProps) => {
  return (
    <StyledCardContainer {...rest}>
      <StyledCardHeaderContainer>
        {header ||
          (variant === 'block' ? (
            <ObjectImg id={headerImg as ObjectId} />
          ) : (
            <img src={headerImg} />
          ))}
      </StyledCardHeaderContainer>
      <StyledCardContentContainer {...{ variant }}>
        {content ||
          (variant === 'block' ? (
            <>
              <StyledCardHeader className="tp-h7">{title}</StyledCardHeader>
              <p>{text}</p>
            </>
          ) : (
            <>
              <div tw="my-2">
                <span className="tp-info">{titleInfo}</span>
                <StyledCardHeader className="tp-h6">{title}</StyledCardHeader>
              </div>
              <p>{text}</p>
            </>
          ))}
      </StyledCardContentContainer>
      <StyledCardFooterContainer {...{ buttonVariant }}>
        {footer || (
          <Button
            variant={buttonVariant}
            size="md"
            color={buttonColor}
            onClick={buttonOnClick}
            disabled={buttonDisabled}
          >
            {buttonLabel}
            {buttonVariant === 'textOnly' && (
              <Icon name="arrow-right" tw="ml-2.5" />
            )}
          </Button>
        )}
      </StyledCardFooterContainer>
    </StyledCardContainer>
  )
}
Card.displayName = 'Card'

export default memo(Card) as typeof Card
