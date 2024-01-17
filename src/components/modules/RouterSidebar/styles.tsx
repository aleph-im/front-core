import tw from 'twin.macro'
import styled, { css, keyframes } from 'styled-components'
import { addClasses } from '../../../utils'
import { getResponsiveCss } from '../../../styles'
import { BreakpointId } from '../../../themes'
import Logo from '../../common/Logo'
import Icon from '../../common/Icon'
import RouterLink, { RouterLinkProps } from '../RouterLink'
import {
  StyledNotificationBadge,
  StyledRouterLink,
  StyledRouteLinkIcon,
  StyledRouteLinkText,
} from '../RouterLink/styles'

const nav1OpenSize = 4.5
const nav1CloseSize = 0.375
const nav2OpenSize = 18.75
const nav2CloseSize = nav1OpenSize

export const styledLinkContentPaddingCss = css`
  ${tw`py-2 px-6`}
`

export const StyledLink = styled.div`
  ${tw`w-full`}
`

export const StyledNav1 = styled.nav`
  ${({ theme }) => {
    const { nav1 } = theme.component.sidebar

    return css`
      ${tw`h-full w-full flex flex-col overflow-hidden`}
      background-color: ${nav1.background};
    `
  }}
`

export const StyledNav1Container = styled.div`
  ${tw`flex flex-col items-start`}
`

export type StyledRouterLink1Props = Omit<RouterLinkProps, 'variant'>

export const StyledRouterLink1 = styled(
  RouterLink,
).attrs<StyledRouterLink1Props>((props) => {
  return {
    ...props,
    variant: '1',
    route: { ...props.route, name: undefined, flag: undefined },
  }
})`
  ${({ theme, isActive }) => {
    const { nav1 } = theme.component.sidebar

    return css`
      ${StyledRouterLink} {
        ${styledLinkContentPaddingCss}

        ${isActive &&
        css`
          background-color: ${nav1.active.background};

          &::after {
            ${tw`absolute -top-2 left-0 h-full opacity-0`}
            content: '';
            width: ${nav1CloseSize}rem;
            background-color: ${nav1.active.background2};
          }
        `}
      }
    `
  }}
`

export const StyledNav2 = styled.nav`
  ${({ theme }) => {
    const { nav2 } = theme.component.sidebar

    return css`
      ${tw`flex flex-col h-full overflow-hidden`}
      color: ${nav2.color};
      background: ${nav2.background};

      box-sizing: content-box;
      padding-left: 0;
      box-shadow: 0px 0px 0px 0px #00000020;
    `
  }}
`

export const StyledNav2Container = styled.div`
  ${tw`flex flex-col items-start h-full`}
`

export const StyledNav2Title = styled.div.attrs(addClasses('tp-nav'))`
  ${styledLinkContentPaddingCss}
  ${tw`w-auto max-w-full uppercase`}
`

export const StyledNav2LinkContainer = styled.div`
  ${tw`flex flex-col items-start cursor-auto w-full`}
  padding-top: 7rem;
  padding-bottom: 4rem;
`

export type StyledRouterLink2Props = Omit<RouterLinkProps, 'variant'>

export const StyledRouterLink2 = styled(
  RouterLink,
).attrs<StyledRouterLink2Props>((props) => {
  return {
    ...props,
    variant: '2',
  }
})<StyledRouterLink2Props>`
  ${StyledRouterLink} {
    ${styledLinkContentPaddingCss}
    ${tw`flex max-w-full overflow-hidden`}
  }
`

export const StyledLogoContainer = styled.div`
  ${({ theme }) => {
    const { logo } = theme.component.sidebar.nav1

    return css`
      ${tw`flex items-center justify-center`}
      width: ${nav2CloseSize}rem;
      background: ${logo?.background};
      padding: ${logo?.padding};
    `
  }}
`

export const StyledLogo = styled(Logo).attrs((props) => {
  const { logo } = props.theme.component.sidebar.nav1

  return {
    ...props,
    size: `${logo.size}rem`,
  }
})`
  ${styledLinkContentPaddingCss}
  ${tw`inline-flex items-center justify-center px-0 py-0`}
`

export const StyledToggleButton = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'angle-right', //props.$open ? 'angle-left' : 'angle-right',
  }
})`
  ${({ theme }) => {
    const { toggle } = theme.component.sidebar.nav2

    return css`
      ${tw`!w-4 !h-4 p-0.5 !box-border cursor-pointer origin-center`}
      color: ${toggle.color};
      background-color: ${toggle.background};
    `
  }}
`

export const StyledStorageContainer = styled.div.attrs(addClasses('tp-body3'))`
  ${tw`w-[10.5rem] max-w-full mx-auto px-1 cursor-auto`}
`

// https://github.com/aleph-im/aleph-account/blob/8b920e34fab9f4f70e3387eed2bd5839ae923971/src/layouts/MainLayout.vue#L131C14-L131C14
export const StyledProgressBar = styled.div<{ $percent: number }>(
  ({ theme, $percent }) => {
    const { color } = theme.component.sidebar.nav2.progress

    // @note: add a min width on the bar if percent is gt 0
    $percent = $percent > 0 ? Math.max($percent, 0.05) : $percent

    const bgColor = `${theme.color.base0}20`

    return [
      tw`relative w-full`,
      css`
        height: 0.3125rem;
        background-color: ${bgColor};
        border-radius: 1rem;

        &:after {
          ${tw`absolute top-0 left-0 w-full h-full`}
          content: '';
          border-radius: 1rem;
          background-image: ${color};
          clip-path: ${`inset(0 ${100 - $percent * 100}% 0 0);`};
        }
      `,
    ]
  },
)

const fadeOutIn1 = keyframes` 
  0%, 15%, 90%, 100%  {
    opacity: 1;
  }

  45% {
    opacity: 0;
  }
`

// @note: https://stackoverflow.com/a/43575547
const fadeOutIn1Reverse = keyframes` 
  0%, 10%, 80%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`

const fadeOutIn2 = keyframes` 
  0%, 6%, 80%, 100%  {
    opacity: 1;
  }

  46%, 60% {
    opacity: 0;
  }
`

const fadeOutIn2Reverse = keyframes` 
  0%, 10%, 70%, 100% {
    opacity: 1;
  }

  30% {
    opacity: 0;
  }
`

export type StyledSidebarProps = {
  $isOpen?: boolean
  $isHover?: boolean
  $speed?: number
  $breakpoint: BreakpointId
}

export const StyledSidebar = styled.aside<StyledSidebarProps>`
  ${tw`hidden items-stretch justify-start h-full`}

  ${({ $breakpoint }) => css`
    /* MOBILE LAYOUT */
    ${getResponsiveCss(
      $breakpoint,
      css`
        ${tw`flex`}
      `,
    )}
  `}

  ${({ theme, $isOpen, $isHover, $speed = 1 }) =>
    $isOpen || $isOpen === undefined
      ? css`
          & ${StyledNav1} {
            width: ${nav1OpenSize}rem;
            transition: width ease-in-out ${0.35 / $speed}s ${0.4 / $speed}s;
          }

          & ${StyledRouterLink1} ${StyledRouteLinkIcon}, & ${StyledLogo} {
            ${tw`opacity-100 visible`}

            transition: opacity ease-in-out ${0.2 / $speed}s ${0.55 / $speed}s,
              visibility linear ${0.2 / $speed}s ${0.55 / $speed}s,
              color ease-in-out 0.25s 0s !important;
          }

          & ${StyledLogoContainer} {
            transition: background-color ease-in-out ${0.7 / $speed}s
              ${0.2 / $speed}s;
          }

          & ${StyledRouterLink1} ${StyledRouterLink}::after {
            ${tw`-top-2 opacity-0`}
            transition: opacity ease-in-out ${0.7 / $speed}s ${0.2 / $speed}s,
              top ease-in-out ${0.7 / $speed}s ${0.1 / $speed}s;
          }

          & ${StyledNav2} {
            width: ${nav2OpenSize}rem;

            transition: width ease-in-out ${0.5 / $speed}s ${0.1 / $speed}s,
              padding-left ease-in-out ${0.4 / $speed}s 0s,
              box-shadow ease-in-out ${0.4 / $speed}s 0s;

            ${$isHover &&
            css`
              cursor: auto;
            `}
          }

          & ${StyledNav1Container}, & ${StyledNav2Container} {
            width: 100%;
            transition: width linear 0s ${0.5 / $speed}s;
          }

          & ${StyledNav2Container} {
            animation: ${1 / $speed}s ease-in-out 0s ${fadeOutIn1Reverse};
          }

          & ${StyledNav2Title}, & ${StyledRouterLink2} ${StyledRouterLink} {
            ${tw`relative left-0 translate-x-0 px-6 gap-2.5`}

            transition: left linear 0s ${0.5 / $speed}s,
              transform linear 0s ${0.5 / $speed}s,
              font-size linear 0s ${0.5 / $speed}s,
              padding linear 0s ${0.5 / $speed}s,
              gap linear 0s ${0.5 / $speed}s,
              background-color ease-in-out 0s ${0.5 / $speed}s,
              color ease-in-out 0.25s 0s !important;
          }

          & ${StyledNav2Title} {
            font-size: 1.125rem;
          }

          & ${StyledRouteLinkIcon} {
            transition: color ease-in-out 0.25s 0s !important;
          }

          & ${StyledNotificationBadge} {
            ${tw`-left-0.5`}
            transition: all linear 0s ${0.45 / $speed}s;
            transition-property: left;
          }

          & ${StyledToggleButton} {
            transform: rotateZ(-180deg);
            transition: transform ease-in-out ${0.6 / $speed}s ${0.4 / $speed}s;
          }

          & ${StyledStorageContainer} {
            font-size: 0.625rem;
            transition: font-size linear 0s ${0.3 / $speed}s;
            animation: ${1 / $speed}s ease-in-out 0s ${fadeOutIn2Reverse};

            & > :first-child {
              max-width: 100%;
              transition: max-width linear 0s ${0.3 / $speed}s;
            }
          }

          & ${StyledRouterLink2} ${StyledRouterLink}._active {
            background-color: ${theme.component.sidebar.nav2.active
              ?.background};

            & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
              color: ${theme.component.sidebar.nav2.active?.color};
              transition: color ease-in-out 0s ${0.5 / $speed}s !important;
            }
          }
        `
      : css`
          & ${StyledNav1} {
            width: ${nav1CloseSize}rem;
            transition: width ease-in-out ${0.2 / $speed}s ${0.15 / $speed}s;
          }

          & ${StyledRouterLink1} ${StyledRouteLinkIcon}, & ${StyledLogo} {
            ${tw`opacity-0 invisible`}

            transition: opacity ease-in-out ${0.2 / $speed}s 0s,
              visibility linear ${0.2 / $speed}s 0s,
               color ease-in-out 0.25s 0s !important;
          }

          & ${StyledLogoContainer} {
            background-color: transparent;
            transition: background-color ease-in-out ${0.7 / $speed}s
              ${0.2 / $speed}s;
          }

          & ${StyledRouterLink1} ${StyledRouterLink}::after {
            ${tw`top-0 opacity-100`}
            transition: opacity ease-in-out ${0.7 / $speed}s ${0.2 / $speed}s,
              top ease-in-out ${0.7 / $speed}s ${0.3 / $speed}s;
          }

          & ${StyledNav2} {
            width: ${nav2CloseSize}rem;

            transition: width ease-in-out ${0.4 / $speed}s ${0.25 / $speed}s,
              padding-left ease-in-out ${0.4 / $speed}s 0s,
              box-shadow ease-in-out ${0.4 / $speed}s 0s;

            ${$isHover &&
            css`
              cursor: pointer;

              padding-left: ${nav1CloseSize}rem;
              box-shadow: ${nav1CloseSize}rem 0px 0px 0px #00000020;
            `}
          }

          & ${StyledNav1Container}, & ${StyledNav2Container} {
            transition: width linear 0s ${0.45 / $speed}s;
          }

          & ${StyledNav2Container} {
            animation: ${1 / $speed}s ease-in-out 0s ${fadeOutIn1};
          }

          & ${StyledNav1Container} {
            width: ${nav1CloseSize}rem;
          }

          & ${StyledNav2Container} {
            width: ${nav2CloseSize}rem;
          }

          & ${StyledNav2Title}, & ${StyledRouterLink2} ${StyledRouterLink} {
            ${tw`relative left-1/2 -translate-x-1/2 px-6 gap-0`}

            transition: left linear 0s ${0.45 / $speed}s,
              transform linear 0s ${0.45 / $speed}s,
              font-size linear 0s ${0.45 / $speed}s,
              padding linear 0s ${0.45 / $speed}s,
              background-color ease-in-out 0s ${0.45 / $speed}s,
              gap linear 0s ${0.45 / $speed}s;
          }

          & ${StyledNav2Title} {
            ${tw`px-0`}
            font-size: 0.75rem;
          }

          & ${StyledRouteLinkIcon} {
            transition: color ease-in-out 0.25s 0s !important;
          }

          & ${StyledNotificationBadge} {
            ${tw`left-0`}
            transition: all linear 0s ${0.45 / $speed}s;
            transition-property: left;
          }

          & ${StyledToggleButton} {
            transform: rotateZ(0deg);
            transition: transform ease-in-out ${0.6 / $speed}s ${0.25 / $speed}s;
          }

          & ${StyledStorageContainer} {
            font-size: 0.5rem;
            transition: font-size linear 0s ${0.46 / $speed}s;
            animation: ${1 / $speed}s ease-in-out 0s ${fadeOutIn2};

            & > :first-child {
              max-width: 0;
              transition: max-width linear 0s ${0.46 / $speed}s;
            }
          }

          & ${StyledRouterLink2} ${StyledRouterLink}._active {
            & ${StyledRouteLinkIcon}, & ${StyledRouteLinkText} {
              transition: color ease-in-out 0s ${0.45 / $speed}s !important;
            }
          }
        `};

  ${({ $isOpen }) =>
    $isOpen === undefined &&
    css`
      && * {
        animation: none;
        transition: none;
      }
    `}
`
