import styled, { css } from 'styled-components'
import { NavlinkProps, ResponsiveNavBarProps } from './types'
import { getResponsiveCss } from '../../styles'

// Main container
export const StyledNavbarWrapper = styled.div`
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
export const StyledHeadingWrapper = styled.div<ResponsiveNavBarProps>`
  ${({ theme, isOpen }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      background-color: ${isOpen ? '#07071366' : theme.color.base1};

      ${getResponsiveCss('md', css`
          background-color: ${theme.color.base1};
        `,
    )}
    `
  }}
`

// A wrapper for the burger icon, that is hidden on desktop
export const StyledBurgerIconWrapper = styled.div`
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
export const StyledNavWrapper = styled.nav<ResponsiveNavBarProps>`
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

// A <ul> element, wrapping the links (text and buttons)
export const StyledNavlinks = styled.ul`
    ${() => {
    return css`
          display: list-item;
          list-style: none;
          padding: 0 25px;
          margin: 0;

          &::first-child {
            margin-top: 25px;
          }

          ${getResponsiveCss('md', css`
              display: flex;
              align-items: center;
              padding: 0;

              &::first-child {
                margin-top: 0;
              }
            `,
    )}
        `
  }}
`

// A <li> element, wrapping the links (text only), separated by a slash
export const StyledNavlink = styled.li<NavlinkProps>`
  ${({ withSlash }) => {
    return css`
      font-weight: 400;
      margin: 10px 0;
      padding: 0;

      a,
      span {
        color: inherit;
        text-decoration: none;
      }

      ${getResponsiveCss('md', css`
          margin: 0;

          ${withSlash
        ? css`
                &:not(:last-child)::after {
                  content: '/';
                  display: inline-block;
                  padding: 0 1rem;
                }
              `
        : css`
                padding: 0 1rem;
              `}
        `,
    )}
    `
  }}
`
