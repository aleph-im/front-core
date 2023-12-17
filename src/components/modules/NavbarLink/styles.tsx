import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../../styles'
import { BreakpointId } from '../../../themes'
import tw from 'twin.macro'

// A <li> element, wrapping the links (text only), separated by a slash
export type StyledNavlinkProps = {
  $breakpoint: BreakpointId
  $level?: number
}

export const StyledNavlink = styled.li<StyledNavlinkProps>`
  ${({ $level = 0, $breakpoint }) => css`
    ${tw`flex flex-col items-stretch whitespace-nowrap py-2`}
    font-weight: 400;

    padding-left: ${$level * 1.5}rem;
    padding-right: ${$level * 1.5}rem;

    ${getResponsiveCss(
      $breakpoint,
      css`
        ${tw`flex flex-row items-center whitespace-nowrap p-0`}
      `,
    )}
  `}
`
