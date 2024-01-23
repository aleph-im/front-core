import styled, { css } from 'styled-components'
import RouterLink, { RouterLinkProps } from '../RouterLink'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { BreakpointId } from '../../../themes'
import { getResponsiveCss } from '../../../styles'
import { StyledRouterLink as StyledRouterLinkContent } from '../RouterLink/styles'

export type StyledRouterLinkProps = RouterLinkProps & {
  $level: number
}

export const StyledRouterLink = styled(RouterLink)<StyledRouterLinkProps>`
  ${({ $level, route: { icon } }) => {
    return css`
      ${tw`w-full`}

      & ${StyledRouterLinkContent} {
        padding-left: ${0.25 + $level * (!icon ? 3.125 : 1.5)}rem;
        padding-right: ${0.25 + $level * 1.5}rem;
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
      ${tw`flex items-center w-auto max-w-full uppercase h-12`}
      padding-left: ${0.25 + $level * 1.5}rem;
      padding-right: ${0.25 + $level * 1.5}rem;
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
