import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

export type StyledContainerProps = {
  $maxWidth?: string
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme, $maxWidth = `${theme.breakpoint['2xl'] + 12.5}rem` }) => css`
    ${tw`px-6 md:px-16`}
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    max-width: ${$maxWidth};
  `}
`

export const StyledFooter = styled.footer`
  ${({ theme }) => {
    const { background } = theme.component.footer

    return css`
      ${tw`py-12 md:py-12`}
      background: ${background};
      box-sizing: border-box;
      width: 100%;
    `
  }}
`

export const StyledButton = styled(Button).attrs((props) => {
  return {
    ...props,
    variant: 'tertiary',
    color: 'main0',
    size: 'big',
    forwardedAs: 'a',
  }
})``

const underscoreCss = css`
  ${({ theme }) => {
    const { duration, timing } = theme.transition
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

        transition: all ${timing} ${duration.fast}ms 0s;
        opacity: 0;
        visibility: hidden;
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

export const StyledLink = styled.a.attrs((props) => {
  return {
    ...addClasses('tp-nav fs-14')(props),
    href: props.href || '#',
  }
})`
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
