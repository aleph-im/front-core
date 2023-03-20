import styled, { css } from 'styled-components'
import { getTypoCss } from '../../../styles'
import { addClasses } from '../../../utils'

export const StyledTextAreaField = styled.textarea.attrs(addClasses('fx-glass-base0 fx-glass-border-base0 p-md tp-form'))`
  ${({ theme }) => {
    return css`
      appearance: none;
      outline: 0;
      border-radius: 8px;
      background: transparent;
      color: ${theme.color.text};
      font-size: 1rem;
      min-height: 2.75em;
      width: 100%;
      ${getTypoCss('form')}

      &::placeholder {
        text-transform: capitalize;
        mix-blend-mode: normal;
        opacity: 0.4;
      }

      &::-webkit-resizer {
        display: none;
      }
    `
  }}
`
