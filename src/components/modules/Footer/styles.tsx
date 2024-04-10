import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import Button from '../../common/Button'
import { BreakpointId } from '../../../themes'
import { getResponsiveCss } from '../../../styles'

export type StyledContainerProps = {
  $maxWidth?: string
  $breakpoint: BreakpointId
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({
    theme,
    $breakpoint,
    $maxWidth = `${theme.breakpoint['2xl'] + 12.5}rem`,
  }) => css`
    ${tw`px-6`}
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    max-width: ${$maxWidth};

    ${getResponsiveCss($breakpoint, tw`px-16`)}
  `}
`

export type StyledFooterProps = {
  $small?: boolean
}

export const StyledFooter = styled.footer<StyledFooterProps>`
  ${({ theme, $small }) => {
    const { background } = theme.component.footer

    return css`
      padding: ${$small ? 1.5 : 3}rem 0;
      background: ${background};
      box-sizing: border-box;
      width: 100%;
    `
  }}
`

export const StyledButton = styled(Button).attrs((props) => {
  return {
    variant: 'tertiary',
    color: 'main0',
    size: 'big',
    ...props,
    forwardedAs: 'a',
  }
})``

const underscoreCss = css`
  ${({ theme }) => {
    const { link } = theme.component.footer

    return css`
      position: relative;

      &::after {
        display: block;
        content: '';
        position: absolute;
        bottom: -0.1875rem;
        left: 0;
        width: 100%;
        height: 0.1875rem;
        background-clip: content-box;
        background-image: ${link.gradient.fn};
        opacity: 0;
        visibility: hidden;
        transition-property: opacity, visibility;
        transition-duration: ${theme.transition.duration.fast}ms;
        transition-timing-function: ${theme.transition.timing};
      }

      &:hover::after {
        opacity: 1;
        visibility: visible;
      }
    `
  }}
`

export const StyledLinkTitle = styled.h6.attrs(addClasses('tp-nav fs-24'))`
  ${tw`inline-block self-start m-0`}
  ${underscoreCss}

  &::after {
    opacity: 1;
    visibility: visible;
    bottom: 0;
  }
`

export const StyledLink = styled.span.attrs(addClasses('tp-nav fs-14'))`
  ${({ theme }) => {
    const { color } = theme.component.footer

    return css`
      ${tw`inline-flex items-center gap-2.5 cursor-pointer whitespace-nowrap`}
      font-weight: 700;

      color: ${color};
      text-decoration: none;

      ${underscoreCss}
    `
  }}
`
