import styled, { css } from 'styled-components'
import { NavbarLinkProps } from './types'
import { getResponsiveCss } from '../../../styles'

// A <li> element, wrapping the links (text only), separated by a slash
export const StyledNavlink = styled.li<NavbarLinkProps>`
  ${({ isActive }) => css`
    font-weight: 400;
    white-space: nowrap;

    & a,
    & span {
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 1.5rem;
      margin: 0 -1.5rem;
      background-color: ${isActive ? '#ffffff1A' : 'transparent'};
    }

    ${getResponsiveCss(
      'md',
      css`
        & a,
        & span {
          display: inline;
          border-bottom: ${isActive ? '1px solid white' : 'none'};
          background-color: transparent;
          padding: 0;
          margin: 0;
        }
      `,
    )}
  `}
`
