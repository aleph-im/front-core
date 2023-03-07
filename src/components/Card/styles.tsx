import styled, { css } from 'styled-components'
import { ButtonVariant } from '../Button/types'
import { CardVariant } from './types'

export const StyledCardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledCardHeader = styled.header`
  && {
    margin: 0 0 8px 0;
  }
`

export const StyledCardHeaderContainer = styled.div`
  padding: 0 10px;

  & > img {
    height: auto;
    max-width: 100%
  }
`

export const StyledCardContentContainer = styled.div<{ variant: CardVariant }>`
  ${({ variant }) => {
    return css`
      margin-top: ${variant === 'article' ? 0 : '24px'};
      margin-bottom: 24px;
      padding: 0 10px;
  `
  }}
`

export const StyledCardFooterContainer = styled.div<{ buttonVariant: ButtonVariant }>`
  ${({ buttonVariant }) => {

    const buttonOffsetCss = buttonVariant === 'text-only' ? `
      margin-left: -22px;
    ` : ''

    return css`
      padding: 0 10px;
      ${buttonOffsetCss}

      & button {
        display: block;
      }
    `
  }}
`
