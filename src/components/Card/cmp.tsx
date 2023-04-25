import React from 'react'
import Button from '../Button'
import Icon from '../Icon'
import ObjectImg from '../ObjectImg'
import { ObjectId } from '../ObjectImg/types'
import {
  StyledCardContentContainer,
  StyledCardFooterContainer,
  StyledCardHeader,
  StyledCardHeaderContainer,
  StyledCardContainer,
} from './styles'
import { CardProps } from './types'

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
            kind="neon"
            size="regular"
            color={buttonColor}
            onClick={buttonOnClick}
            disabled={buttonDisabled}
          >
            {buttonLabel}
            {buttonVariant === 'text-only' && (
              <Icon name="arrow-right" tw="ml-2.5" />
            )}
          </Button>
        )}
      </StyledCardFooterContainer>
    </StyledCardContainer>
  )
}

export default Card
