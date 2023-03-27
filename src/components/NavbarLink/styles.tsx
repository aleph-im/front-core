import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'
import { addClasses } from '../../utils'
import { NavbarLinkProps } from './types'

// A <li> element, wrapping the links (text only), separated by a slash
export const StyledNavlink = styled.li.attrs(addClasses('my-xs my-0-md'))<NavbarLinkProps>`
  ${({ withSlash }) => {
    return css`
      font-weight: 400;
      margin: 0;
      padding: 0;
      white-space: nowrap;

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
                padding: 0 .875rem;
              }
            `
          : css`
              padding-right: 1.75rem;
              &:last-child {
                padding-right: 0;
              }
            `}
          `,
      )}
    `
  }}
`
