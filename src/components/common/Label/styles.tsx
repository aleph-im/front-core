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
    const [g0, g1] = theme.gradient[color]?.colors || [color, color]

    return css`
      position: relative;
      display: inline-flex;
      padding: 0.25rem 0.94rem;
      border-radius: 0.375rem;
      line-height: normal !important;
      text-transform: uppercase;
      color: ${label.color.primary};
      background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);

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
          padding: 1px;
          border-radius: 0.375rem;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
        }
      `}
    `
  }}
`
