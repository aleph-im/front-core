import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import tw from 'twin.macro'
import { TextAreaVariant } from './types'

type StyledTextAreaFieldProps = {
  $variant: TextAreaVariant
}

export const StyledTextAreaField = styled.textarea.attrs<StyledTextAreaFieldProps>(
  (props) => {
    const fxs =
      props.$variant === 'code' ? 'fx-glass-base0 fx-glass-border-base0 ' : ''
    return addClasses(`${fxs}tp-form`)(props)
  },
)<StyledTextAreaFieldProps>`
  ${({ theme, $variant }) => css`
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

    // Text input styles
    ${$variant === 'default' &&
    css`
      background: ${theme.color.text}0F;
      box-shadow: 0px 4px 24px #00000040;
      border: 1px solid transparent;
      border-radius: 1.875rem;
    `}

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
