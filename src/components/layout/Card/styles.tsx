import styled, { css } from 'styled-components'
import tw from 'twin.macro'

import { CardVariant } from './types'
import { ButtonVariant } from '../../common/Button/types'

export const StyledCardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledCardHeader = styled.header`
  && {
    ${tw`mb-2`}
  }
`

export const StyledCardHeaderContainer = styled.div`
  padding: 0 0.625rem;

  & > img {
    height: auto;
    max-width: 100%;
  }
`

export const StyledCardContentContainer = styled.div<{ variant: CardVariant }>`
  ${({ variant }) => {
    return css`
      margin-top: ${variant === 'article' ? 0 : '1.5rem'};
      margin-bottom: 1.5rem;
      padding: 0 0.625rem;
    `
  }}
`

export const StyledCardFooterContainer = styled.div<{
  buttonVariant: ButtonVariant
}>`
  ${({ buttonVariant }) => {
    const buttonOffsetCss =
      buttonVariant === 'text-only' ? `margin-left: -1.375rem;` : ''

    return css`
      padding: 0 0.625rem;
      ${buttonOffsetCss}

      && button {
        display: block;
      }
    `
  }}
`
