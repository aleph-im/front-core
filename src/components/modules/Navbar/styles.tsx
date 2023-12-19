import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { ResponsiveNavBarProps } from './types'
import { getResponsiveCss } from '../../../styles'
import { addClasses } from '../../../utils'
import { BreakpointId } from '../../../themes'

// A wrapper for the logo and burger icon (heading in mobile)
export const StyledHeadingContainer = styled.div<ResponsiveNavBarProps>`
  ${({ isOpen, height }) => css`
    ${tw`px-6`}
    flex: 0 0 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${height};
    background-color: ${isOpen ? '#07071366' : 'transparent'};
  `}
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
export const StyledNavContainer = styled.nav<ResponsiveNavBarProps>`
  ${({ theme, isOpen }) => css`
    ${tw`m-0 p-6`}
    flex: 0 1 0px;
    display: ${isOpen ? 'flex' : 'none'};
    flex-direction: column;
    gap: ${theme.font.size['28']}rem;
  `}
`

export const StyledLogoContainer = styled.div<ResponsiveNavBarProps>`
  ${({ height }) => {
    return css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${height};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 1.375rem; // 22px
    `
  }}
`

// Main container
export type StyledNavbarContainerProps = {
  $breakpoint: BreakpointId
}

export const StyledNavbarContainer = styled.div.attrs(
  addClasses('fx-glass-base2'),
)<StyledNavbarContainerProps>`
  ${({ theme, $breakpoint }) => css`
    position: sticky;
    top: 0;

    ${getResponsiveCss(
      $breakpoint,
      css`
        ${tw`flex items-center justify-between px-16`}
        gap: ${theme.font.size['28']}rem;

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
