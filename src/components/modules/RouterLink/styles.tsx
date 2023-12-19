import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import { BreakpointId } from '../../../themes'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'
import NotificationBadge from '../../common/NotificationBadge'
import { RouterLinkVariant } from './types'
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
  $variant?: RouterLinkVariant
  $disabled?: boolean
  $hasIcon?: boolean
  $hasFlag?: boolean
}

export const StyledRouterLink = styled.div.attrs(
  addClasses('tp-nav'),
)<StyledRouterLinkProps>`
  ${({
    theme,
    $disabled,
    $isActive,
    $hasIcon,
    $hasFlag,
    $variant = '2',
  }) => css`
    ${tw`inline-flex items-center justify-start w-auto max-w-full relative cursor-pointer p-1 gap-2.5 whitespace-nowrap`}

    transition: box-shadow ease-in-out 0.25s 0s;

    ${$isActive &&
    css`
      ${tw`cursor-default`}
    `}

    ${$disabled &&
    css`
      ${tw`cursor-not-allowed`}
    `}
 
    ${$hasFlag &&
    css`
      ${tw`pr-4`}
    `}
    
    & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
      transition: color ease-in-out 0.25s 0s;
    }

    ${$variant === '1'
      ? css`
          & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
            color: ${theme.color.main0}${$isActive ? 'ff' : '66'};
          }

          &:hover {
            & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
              color: ${theme.color.main0};
            }
          }

          ${$isActive &&
          css`
            && ${StyledRouteLinkIcon}, && ${StyledRouteLinkText} {
              color: ${theme.color.main0};
            }
          `}

          ${$disabled &&
          css`
            && ${StyledRouteLinkIcon}, && ${StyledRouteLinkText} {
              color: ${$isActive ? `${theme.color.main0}66` : '#92929280'};
            }
          `}
        `
      : $variant === '2'
      ? css`
          & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
            color: ${theme.color.base0};
          }

          &:hover {
            & ${StyledRouteLinkIcon} {
              color: ${theme.color.main0};
            }

            & ${StyledRouteLinkText} {
              color: ${!$hasIcon ? theme.color.main0 : theme.color.base0};
            }
          }

          ${$isActive &&
          css`
            && ${StyledRouteLinkIcon}, && ${StyledRouteLinkText} {
              color: ${theme.color.main0};
            }
          `}

          ${$disabled &&
          css`
            && ${StyledRouteLinkIcon}, && ${StyledRouteLinkText} {
              color: ${$isActive ? `${theme.color.main0}66` : '#92929280'};
            }
          `}
        `
      : css`
          & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
            color: ${theme.color.base0};
          }

          &:hover {
            box-shadow: inset 0px -1px 0px 0px ${theme.color.base0};
          }

          ${$isActive &&
          css`
            && {
              box-shadow: inset 0px -1px 0px 0px ${theme.color.base0};

              & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
                color: ${theme.color.base0};
              }
            }
          `}

          ${$disabled &&
          css`
            && {
              box-shadow: inset 0px -1px 0px 0px #92929280;

              & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
                color: #92929280;
              }
            }
          `}
        `}
  `}
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
  ${tw`relative h-6 p-1 shrink-0`}
`

export const StyledRouteLinkText = styled.div`
  ${tw`flex items-center justify-start gap-2.5 whitespace-nowrap w-full overflow-hidden h-6`}
`

export const StyledNotificationBadge = styled(NotificationBadge)`
  ${tw`absolute top-0.5 right-0`}
`
