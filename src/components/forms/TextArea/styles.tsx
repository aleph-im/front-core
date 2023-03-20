import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'

export const StyledTextAreaField = styled.textarea.attrs(addClasses('fx-glass-base0 fx-glass-border-base0 p-md tp-form'))`
  ${({ theme }) => {
    return css`
      appearance: none;
      border: none;
      outline: 0;
      color: ${theme.color.text};
      border-radius: 8px;
      width: 100%;
      background: transparent;
      font-size: 1rem;
      height: 100%;
      width: 100%;
      min-height: 6.25rem;

      &:focus, &._focus {
        border-color: ${theme.color.text}
      }

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
