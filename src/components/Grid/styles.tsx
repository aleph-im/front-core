import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'
import { StyledColProps, StyledRowProps } from './types'

export const StyledRow = styled.div<StyledRowProps>`
  ${(props) => {
    const { count, gap } = props

    return css`
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(${Math.ceil(count / 4)}, 1fr);

      ${getResponsiveCss('sm', css`
        grid-template-columns: repeat(${Math.ceil(count / 2)}, 1fr);
      `)}

      ${getResponsiveCss('md', css`
        grid-template-columns: repeat(${count}, 1fr);
      `)}
    `
  }}
`

export const StyledCol = styled.div<StyledColProps>`
  ${(props) => {
    const { span, offset } = props
    return css`
      ${offset
        ? `grid-column: ${offset} / span ${span};`
        : `grid-column: span ${span};`}
    `
  }}
`
