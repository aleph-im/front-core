import styled from 'styled-components'
import { NavbarLinkProps } from './types'

// A <li> element, wrapping the links (text only), separated by a slash
export const StyledNavlink = styled.li<NavbarLinkProps>`
  font-weight: 400;
  white-space: nowrap;

  &,
  a,
  span {
    color: inherit;
    text-decoration: none;
  }
  & a,
  & span {
    border-bottom: ${({ isActive }) => isActive && '1px solid'};
  }
`
