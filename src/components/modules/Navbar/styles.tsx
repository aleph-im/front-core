import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { getGlassEffectCss, getResponsiveCss } from '../../../styles'
import { BreakpointId } from '../../../themes'
import { StyledRouterLink } from '../RouterLink/styles'

// A wrapper for the logo and burger icon (heading in mobile)
export const StyledHeadingContainer = styled.div`
  ${tw`px-6`}
  flex: 0 0 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// A wrapper for the burger icon, that is hidden on desktop
export const StyledMobileTopContainer = styled.div`
  ${() => {
    return css`
      display: block;
      flex: 0 1 0px;
      z-index: 1;
    `
  }}
`

// A <nav> element, wrapping the links (text and buttons)
export const StyledNavContainer = styled.nav`
  ${tw`flex gap-7 m-0 p-6`}
`

export const StyledLogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.375rem; // 22px
`

// Main container
export type StyledNavbarContainerProps = {
  $breakpoint: BreakpointId
  $height: string
  $isOpen?: boolean
}

export const disableBackgroundCss = css`
  box-shadow: none !important;
  background-color: transparent !important;
  backdrop-filter: none !important;
`

export const StyledNavbarContainer = styled.div<StyledNavbarContainerProps>`
  ${({ theme, $breakpoint, $height, $isOpen }) => {
    const { duration } = theme.transition
    const { mobile } = theme.component.navbar

    return css`
      ${tw`sticky top-0`}
      backdrop-filter: none;
      height: ${$isOpen ? '100vh' : $height};
      transition: ${$isOpen
        ? 'height linear 0s 0s'
        : `height linear 0s ${duration.fast}ms`};

      & ${StyledHeadingContainer} {
        ${mobile.header.css && mobile.header.css()}
        height: ${$height};
        backdrop-filter: blur(50px);
        background-color: ${$isOpen
          ? mobile.header.open?.background
          : mobile.header.background};
        box-shadow: ${mobile.header.shadow};
      }

      & ${StyledNavContainer} {
        ${tw`flex-col justify-start h-full`}
        ${mobile.content.css && mobile.content.css()}
        backdrop-filter: blur(50px);
        background-color: ${mobile.content.background};
        color: ${mobile.content.color};
        opacity: ${$isOpen ? '1' : '0'};
        visibility: ${$isOpen ? 'inherit' : 'hidden'};
        transition: all ease-in-out ${duration.fast}ms 0s;

        & ${StyledRouterLink} {
          ${tw`flex h-12`}
        }
      }

      & ${StyledLogoContainer} {
        height: ${$height};
      }

      ${getResponsiveCss(
        $breakpoint,
        css`
          ${tw`flex items-center justify-between px-16`}
          gap: 1.75rem;
          height: ${$height};
          ${getGlassEffectCss('base2')}

          && ${StyledHeadingContainer} {
            ${tw`w-full px-0`}
            ${disableBackgroundCss}
          }

          & ${StyledMobileTopContainer} {
            display: none;
          }

          & ${StyledNavContainer} {
            ${tw`flex-row items-center justify-end p-0 opacity-100`}
            visibility: inherit;
            ${disableBackgroundCss}

            & ${StyledRouterLink} {
              ${tw`inline-flex`}
            }
          }

          & ${StyledLogoContainer} {
            position: static;
            height: auto;
            display: inline-block;
            font-size: ${theme.typo.logo.size}rem; // 34px
          }
        `,
      )}
    `
  }}
`
