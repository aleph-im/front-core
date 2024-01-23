import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import { BreakpointId } from '../../../themes'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import NotificationBadge from '../../common/NotificationBadge'
import Icon, { IconProps } from '../../common/Icon'

// A <li> element, wrapping the links (text only), separated by a slash
export type StyledNavlinkProps = {
  $breakpoint: BreakpointId
  $isActive?: boolean
}

export const StyledNavlink = styled.li<StyledNavlinkProps>`
  ${({ $isActive, $breakpoint }) => css`
    font-weight: 400;
    white-space: nowrap;

    & a,
    & span {
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 1.5rem;
      margin: 0 -1.5rem;
      background-color: ${$isActive ? '#ffffff1A' : 'transparent'};
    }

    ${getResponsiveCss(
      $breakpoint,
      css`
        & a,
        & span {
          display: inline;
          border-bottom: ${$isActive ? '1px solid white' : 'none'};
          background-color: transparent;
          padding: 0;
          margin: 0;
        }
      `,
    )}
  `}
`

// ------------------------------------------------

export type StyledRouterLinkProps = {
  $isActive?: boolean
  $variant?: string
  $disabled?: boolean
  $hasIcon?: boolean
  $hasFlag?: boolean
}

export const StyledRouterLink = styled.div.attrs(
  addClasses('tp-nav'),
)<StyledRouterLinkProps>`
  ${({ theme, $disabled, $isActive, $hasIcon, $variant = '2' }) => {
    const {
      icon,
      text: defaultText,
      background,
      color,
      underscore,
    } = theme.component.routerLink.variant[$variant]

    const text = $hasIcon ? defaultText : icon

    return css`
      ${tw`inline-flex items-center justify-start w-auto max-w-full relative cursor-pointer p-1 gap-2.5 whitespace-nowrap h-7`}
      transition: box-shadow ease-in-out 0.25s 0s, background-color ease-in-out 0.25s 0s;

      color: ${color?.default};
      background-color: ${background?.default};

      &:hover {
        color: ${color?.hover};
        background-color: ${background?.hover};
        box-shadow: ${underscore && `inset 0px -1px 0px 0px ${color?.hover}`};
      }

      && {
        ${$isActive &&
        css`
          ${tw`cursor-default`}
          color: ${color?.active};
          background-color: ${background?.active};
          box-shadow: ${underscore &&
          `inset 0px -1px 0px 0px ${color?.active}`};
        `}

        ${$disabled &&
        css`
          ${tw`cursor-not-allowed`}
          color: ${color?.disabled};
          background-color: ${background?.disabled};
          box-shadow: none;
        `}
      }

      & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
        transition: color ease-in-out 0.25s 0s,
          background-color ease-in-out 0.25s 0s;
      }

      &:hover {
        & ${StyledRouteLinkIcon} {
          color: ${icon?.color?.hover};
          background-color: ${icon?.background?.hover};
        }

        & ${StyledRouteLinkText} {
          color: ${text?.color?.hover};
          background-color: ${text?.background?.hover};
        }
      }

      ${$isActive &&
      css`
        && ${StyledRouteLinkIcon} {
          color: ${icon?.color?.active};
          background-color: ${icon?.background?.active};
        }

        && ${StyledRouteLinkText} {
          color: ${icon?.color?.active};
          background-color: ${icon?.background?.active};
        }
      `}

      ${$disabled &&
      css`
        && ${StyledRouteLinkIcon}, && ${StyledRouteLinkText} {
          color: ${icon?.color?.disabled};
          background-color: ${icon?.background?.disabled};
        }
      `}
    `
  }}
`

export type StyledRouteLinkIconProps = Omit<IconProps, 'size' | 'prefix'>

export const StyledRouteLinkIcon = styled(Icon).attrs<StyledRouteLinkIconProps>(
  (props) => {
    return {
      ...props,
      size: 'lg',
      prefix: 'custom',
    }
  },
)`
  ${tw`relative shrink-0`}
`

export const StyledRouteLinkText = styled.div`
  ${tw`flex items-center justify-start gap-2.5 whitespace-nowrap max-w-full overflow-hidden`}
`

export const StyledNotificationBadge = styled(NotificationBadge)`
  ${tw`relative top-0.5 -left-1 shrink-0 self-start`}
`
