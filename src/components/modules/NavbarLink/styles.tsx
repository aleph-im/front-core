import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import { BreakpointId } from '../../../themes'

// A <li> element, wrapping the links (text only), separated by a slash
export type StyledNavlinkProps = {
  $breakpoint: BreakpointId
  $isActive?: boolean
}

export const StyledNavlink = styled.li<StyledNavlinkProps>`
  ${({ $isActive, $breakpoint }) => css`
    font-weight: 400;
    white-space: nowrap;

    & a,
    & span {
      display: block;
      color: inherit;
      text-decoration: none;
      padding: 1.5rem;
      margin: 0 -1.5rem;
      background-color: ${$isActive ? '#ffffff1A' : 'transparent'};
    }

    ${getResponsiveCss(
      $breakpoint,
      css`
        & a,
        & span {
          display: inline;
          border-bottom: ${$isActive ? '1px solid white' : 'none'};
          background-color: transparent;
          padding: 0;
          margin: 0;
        }
      `,
    )}
  `}
`
