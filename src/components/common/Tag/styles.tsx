import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'

export type StyledTagProps = {
  $variant: string
}

export const StyledTag = styled.span.attrs(
  addClasses('tp-body1 fs-24 fx-glass-base1 fx-glass-border-base0'),
)<StyledTagProps>`
  ${({ theme, $variant }) => {
    const { color } = theme.component.tag.variant[$variant]

    return css`
      display: inline-block;
      padding: 0.5rem 1.125rem;
      color: ${color.text};
      background: ${color.background};
      border: 0.0625rem solid ${color.border};
      margin: 0 auto;
      border-radius: 0.5rem;
    `
  }}
`
