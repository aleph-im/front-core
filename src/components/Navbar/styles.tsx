import styled, { css } from 'styled-components'
import { ResponsiveNavBarProps } from './types'
import { getResponsiveCss } from '../../styles'

// Main container
export const StyledNavbarContainer = styled.div`
  ${({ theme }) => {
    return css`
      position: sticky;
      top: 0;
      background-color: ${theme.color.base1};

      ${getResponsiveCss('md', css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `)}
    `
  }}
`

// A wrapper for the logo and burger icon (heading in mobile)
export const StyledHeadingContainer = styled.div<ResponsiveNavBarProps>`
  ${({ theme, isOpen, height = '100px' }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: ${height};
      background-color: ${isOpen ? '#07071366' : theme.color.base1};

      ${getResponsiveCss('md', css`
          background-color: ${theme.color.base1};
        `,
    )}
    `
  }}
`

// A wrapper for the burger icon, that is hidden on desktop
export const StyledBurgerIconContainer = styled.div`
  ${() => {
    return css`
      display: block;

      ${getResponsiveCss('md', css`
          display: none;
        `
    )}
    `
  }}
`

// A <nav> element, wrapping the links (text and buttons)
export const StyledNavContainer = styled.nav<ResponsiveNavBarProps>`
  ${({ isOpen }) => {
    return css`
      display: ${isOpen ? 'block' : 'none'};
      padding-bottom: 25px;
      margin: 0;

      ${getResponsiveCss('md', css`
          display: flex;
          align-items: center;
          padding: 0;
        `,
    )}
    `
  }}
`
