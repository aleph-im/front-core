import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import tw from 'twin.macro'

export const StyledTextAreaField = styled.textarea.attrs(
  addClasses('fx-glass-base0 fx-glass-border-base0 tp-form'),
)`
  ${({ theme }) => css`
    ${tw`p-5`}
    appearance: none;
    border: none;
    outline: 0;
    color: ${theme.color.text};
    border-radius: 0.5rem;
    width: 100%;
    background: transparent;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    min-height: 6.25rem;

    &:focus,
    &._focus {
      border-color: ${theme.color.text};
    }

    &::placeholder {
      text-transform: capitalize;
      mix-blend-mode: normal;
      opacity: 0.4;
    }

    &::-webkit-resizer {
      display: none;
    }
  `}
`
