import styled, { css } from 'styled-components'
import { ResponsiveNavBarProps } from './types'
import { getResponsiveCss } from '../../styles'
import { addClasses } from '../../utils'

// Main container
export const StyledNavbarContainer = styled.div.attrs(addClasses('fx-glass-base2 px-xl3-md'))`
  ${({ theme }) => {
    return css`
      position: sticky;
      top: 0;

      ${getResponsiveCss('md', css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${theme.font.size.xl}rem;
      `)}
    `
  }}
`

// A wrapper for the logo and burger icon (heading in mobile)
export const StyledHeadingContainer = styled.div.attrs(addClasses('px-lg px-0-md')) <ResponsiveNavBarProps>`
  ${({ isOpen, height = '100px' }) => {
    return css`
      flex: 0 0 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: ${height};
      background-color: ${isOpen ? '#07071366' : 'transparent'};

      ${getResponsiveCss('md', css`
        background-color: transparent;
      `)}
    `
  }}
`

// A wrapper for the burger icon, that is hidden on desktop
export const StyledMobileTopContainer = styled.div`
  ${() => {
    return css`
      display: block;
      flex: 0 1 0px;

      ${getResponsiveCss('md', css`
        display: none;
      `)}
    `
  }}
`

// A <nav> element, wrapping the links (text and buttons)
export const StyledNavContainer = styled.nav.attrs(addClasses('m-0 p-lg p-0-md')) <ResponsiveNavBarProps>`
  ${({ theme, isOpen }) => {
    return css`
      flex: 0 1 0px;
      display: ${isOpen ? 'flex' : 'none'};
      flex-direction: column;
      gap: ${theme.font.size.xl}rem;

      ${getResponsiveCss('md', css`
        display: flex;
        flex-direction: row;
        align-items: center;
      `)}
    `
  }}
`

export const StyledLogoContainer = styled.div`
  ${({ theme }) => {
    return css`
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 1.375rem;  // 22px

      ${getResponsiveCss('md', css`
        position: static;
        height: auto;
        display: inline-block;
        font-size: ${theme.typo.logo.size}rem; // 34px
      `)}
    `
  }}
`
