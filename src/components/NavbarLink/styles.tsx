import styled from 'styled-components'
import { addClasses } from '../../utils'
import { NavbarLinkProps } from './types'

// A <li> element, wrapping the links (text only), separated by a slash
export const StyledNavlink = styled.li.attrs(addClasses('p-0 m-0')) <NavbarLinkProps>`
  font-weight: 400;
  white-space: nowrap;

  &, a, span {
    color: inherit;
    text-decoration: none;
  }
`
