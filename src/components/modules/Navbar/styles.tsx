import styled, { css } from 'styled-components'
import { ResponsiveNavBarProps } from './types'
import { getResponsiveCss } from '../../../styles'
import { addClasses } from '../../../utils'
import tw from 'twin.macro'

// Main container
export const StyledNavbarContainer = styled.div.attrs(
  addClasses('fx-glass-base2'),
)`
  ${({ theme }) => css`
    ${tw`md:px-16`}
    position: sticky;
    top: 0;

    ${getResponsiveCss(
      'md',
      css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${theme.font.size['28']}rem;
      `,
    )}
  `}
`

// A wrapper for the logo and burger icon (heading in mobile)
export const StyledHeadingContainer = styled.div<ResponsiveNavBarProps>`
  ${({ isOpen, height = '6.25rem' }) => css`
    ${tw`px-6 md:px-0`}
    flex: 0 0 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${height};
    background-color: ${isOpen ? '#07071366' : 'transparent'};

    ${getResponsiveCss(
      'md',
      css`
        background-color: transparent;
      `,
    )}
  `}
`

// A wrapper for the burger icon, that is hidden on desktop
export const StyledMobileTopContainer = styled.div`
  ${() => {
    return css`
      display: block;
      flex: 0 1 0px;
      z-index: 1;

      ${getResponsiveCss(
        'md',
        css`
          display: none;
        `,
      )}
    `
  }}
`

// A <nav> element, wrapping the links (text and buttons)
export const StyledNavContainer = styled.nav<ResponsiveNavBarProps>`
  ${({ theme, isOpen }) => css`
    ${tw`m-0 p-6 md:p-0`}
    flex: 0 1 0px;
    display: ${isOpen ? 'flex' : 'none'};
    flex-direction: column;
    gap: ${theme.font.size['28']}rem;

    ${getResponsiveCss(
      'md',
      css`
        display: flex;
        flex-direction: row;
        align-items: center;
      `,
    )}
  `}
`

export const StyledLogoContainer = styled.div<ResponsiveNavBarProps>`
  ${({ theme, height = '6.25rem' }) => {
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

      ${getResponsiveCss(
        'md',
        css`
          position: static;
          height: auto;
          display: inline-block;
          font-size: ${theme.typo.logo.size}rem; // 34px
        `,
      )}
    `
  }}
`
