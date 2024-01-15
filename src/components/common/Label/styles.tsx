import styled, { css } from 'styled-components'
import { LabelKind, LabelVariant } from './types'
import { addClasses } from '../../../utils'

export type StyledLabelProps = {
  $variant: LabelVariant
  $kind: LabelKind
}

export const StyledLabel = styled.span.attrs<StyledLabelProps>(
  addClasses('tp-info'),
)<StyledLabelProps>`
  ${({ theme, $variant, $kind }) => {
    const { label } = theme.component
    const color = $variant
    const background =
      theme.gradient[color]?.fn ||
      `linear-gradient(90deg, ${color} 0%, ${color} 100%)`

    return css`
      position: relative;
      display: inline-flex;
      padding: 0.25rem 0.94rem;
      border-radius: 0.375rem;
      line-height: normal !important;
      text-transform: uppercase;
      color: ${label.color.primary};
      background: ${background}
        ${$kind === 'secondary' &&
        css`
          color: ${label.color.secondary};
          background-image: none;

          /* BORDER */
          &::after {
            content: '';
            display: block;
            position: absolute;
            inset: 0;
            z-index: -1;
            padding: 0.0625rem;
            border-radius: 0.375rem;
            mask: linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask-composite: xor;
            background: ${background};
          }
        `};
    `
  }}
`
