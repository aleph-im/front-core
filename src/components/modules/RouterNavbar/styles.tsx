import styled, { css } from 'styled-components'
import RouterLink, { RouterLinkProps } from '../RouterLink'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import { BreakpointId } from '../../../themes'
import { getResponsiveCss } from '../../../styles'

export type StyledRouterLinkProps = Omit<RouterLinkProps, 'variant'>

export const StyledRouterLink = styled(RouterLink).attrs<StyledRouterLinkProps>(
  (props) => {
    return {
      ...props,
      variant: '2',
    }
  },
)`
  ${tw`w-full`}

  &, & * {
    ${tw`cursor-pointer!`}
  }
`

export const StyledNavTitle = styled.div.attrs(addClasses('tp-nav'))`
  ${tw`w-auto max-w-full uppercase p-1 ml-1`}
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
  ${tw`block rounded-3xl`}
  background-color: #0000001a;
`
