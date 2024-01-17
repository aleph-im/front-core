import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import { BreakpointId } from '../../../themes'
import tw from 'twin.macro'

// A <li> element, wrapping the links (text only), separated by a slash
export type StyledNavlinkProps = {
  $breakpoint: BreakpointId
}

export const StyledNavlink = styled.li<StyledNavlinkProps>`
  ${({ $breakpoint }) => css`
    ${tw`flex flex-col items-stretch whitespace-nowrap`}
    font-weight: 400;

    ${getResponsiveCss(
      $breakpoint,
      css`
        ${tw`flex flex-row items-center whitespace-nowrap p-0`}
      `,
    )}
  `}
`
