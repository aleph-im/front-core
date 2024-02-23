import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import tw from 'twin.macro'
import { TextAreaVariant } from './types'
import { FormError } from '../FormError/types'
import {
  fieldErrorCss,
  fieldFocusCss,
  fieldPlaceholderCss,
} from '../styles.forms'

type StyledTextAreaFieldProps = {
  $variant: TextAreaVariant
  error?: FormError
}

export const StyledTextAreaField = styled.textarea.attrs<StyledTextAreaFieldProps>(
  (props) => {
    const fxs =
      props.$variant === 'code' ? 'fx-glass-base0 fx-glass-border-base0 ' : ''
    return addClasses(`${fxs}tp-form`)(props)
  },
)<StyledTextAreaFieldProps>`
  ${({ theme, $variant }) => {
    const { background, shadow, border } = theme.form.input

    const borderSize = Math.max(
      border.size,
      border.focus.size,
      border.feedback.size,
    )

    return css`
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
      transition-property: border, color, opacity;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      // Text input styles
      ${$variant === 'default' &&
      css`
        background: ${background.default};
        box-shadow: ${shadow};
        border: ${borderSize}rem solid transparent;
        border-radius: 1.875rem;
      `}

      ${fieldFocusCss}

      ${fieldErrorCss}

      ${fieldPlaceholderCss}

      &::-webkit-resizer {
        display: none;
      }
    `
  }}
`
