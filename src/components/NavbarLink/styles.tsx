import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'
import { NavbarLinkProps } from './types'

// A <li> element, wrapping the links (text only), separated by a slash
export const StyledNavlink = styled.li<NavbarLinkProps>`
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
            
            &:first-child {
              padding-left: 0;
            }

            &:last-child {
              padding-right: 0;
            }
          `}
        `,
    )}
    `
  }}
`
