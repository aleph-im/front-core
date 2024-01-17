import styled, { css } from 'styled-components'
import RouterLink, { RouterLinkProps } from '../RouterLink'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { BreakpointId } from '../../../themes'
import { getResponsiveCss } from '../../../styles'
import { StyledRouterLink as StyledRouterLinkContent } from '../RouterLink/styles'

export type StyledRouterLinkProps = Omit<RouterLinkProps, 'variant'> & {
  $level: number
}

export const StyledRouterLink = styled(RouterLink).attrs<StyledRouterLinkProps>(
  (props) => {
    return {
      ...props,
      variant: '2',
    }
  },
)<StyledRouterLinkProps>`
  ${({ $level }) => {
    return css`
      ${tw`w-full`}

      & ${StyledRouterLinkContent} {
        padding-left: ${$level * 1.5}rem;
        padding-right: ${$level * 1.5}rem;
      }

      &,
      & * {
        ${tw`cursor-pointer!`}
      }
    `
  }}
`

export type StyledNavTitleProps = {
  $level: number
}

export const StyledNavTitle = styled.div.attrs(
  addClasses('tp-nav'),
)<StyledNavTitleProps>`
  ${({ $level }) => {
    return css`
      ${tw`w-auto max-w-full uppercase box-content ml-1 h-6 py-3`}
      padding-left: ${$level * 1.5}rem;
      padding-right: ${$level * 1.5}rem;
    `
  }}
`

export type StyledChildRoutesProps = {
  $breakpoint?: BreakpointId
}

export const StyledChildRoutes = styled.li<StyledChildRoutesProps>`
  ${({ $breakpoint }) => css`
    ${tw`block`}

    ${getResponsiveCss(
      $breakpoint,
      css`
        ${tw`hidden`}
      `,
    )}
  `}
`

export const StyledChildRoutesContent = styled.ul`
  ${({ theme }) => {
    const { background, radius } = theme.component.navbar.mobile.content.child

    return css`
      ${tw`block`}
      background-color: ${background};
      border-radius: ${radius}rem;
    `
  }}
`
