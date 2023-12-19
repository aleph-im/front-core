import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import { addClasses } from '../../../utils'
import { BreakpointId } from '../../../themes'

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
  ${({ theme }) => css`
    ${tw`flex m-0 p-6`}
    flex: 0 1 0px;
    flex-direction: column;
    gap: ${theme.font.size['28']}rem;
  `}
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

export const StyledNavbarContainer = styled.div.attrs(
  addClasses('fx-glass-base2'),
)<StyledNavbarContainerProps>`
  ${({ theme, $breakpoint, $height, $isOpen }) => css`
    position: sticky;
    top: 0;
    height: ${$isOpen ? '100vh' : $height};
    transition: ${$isOpen
      ? 'height ease-in-out 0.2s 0s'
      : 'height ease-in-out 0.2s 0.3s'};

    & ${StyledHeadingContainer} {
      height: ${$height};
      background-color: ${$isOpen ? '#07071366' : 'transparent'};
    }

    & ${StyledNavContainer} {
      opacity: ${$isOpen ? '1' : '0'};
      transition: ${$isOpen
        ? 'opacity ease-in-out 0.3s 0.2s'
        : 'opacity ease-in-out 0.3s 0s'};

      transition: ;
    }

    & ${StyledLogoContainer} {
      height: ${$height};
    }

    ${getResponsiveCss(
      $breakpoint,
      css`
        ${tw`flex items-center justify-between px-16`}
        gap: ${theme.font.size['28']}rem;
        height: ${$height};

        & ${StyledHeadingContainer} {
          ${tw`px-0`}
          background-color: transparent;
        }

        & ${StyledMobileTopContainer} {
          display: none;
        }

        & ${StyledNavContainer} {
          ${tw`flex flex-row items-center p-0`}
        }

        & ${StyledLogoContainer} {
          position: static;
          height: auto;
          display: inline-block;
          font-size: ${theme.typo.logo.size}rem; // 34px
        }
      `,
    )}
  `}
`
