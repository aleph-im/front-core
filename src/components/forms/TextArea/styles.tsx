import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { TextAreaVariant } from './types'
import { FormError } from '../FormError/types'
import {
  fieldErrorCss,
  fieldFocusCss,
  fieldPlaceholderCss,
} from '../styles.forms'
import Icon from '../../common/Icon'

type StyledTextAreaFieldProps = {
  $variant: TextAreaVariant
  error?: FormError
}

export const StyledContainer = styled.div`
  ${tw`relative`}
`

export const StyledIcon = styled(Icon).attrs((props) => {
  return {
    ...addClasses('text-purple4')(props),
    name: 'copy',
  }
})`
  ${({ theme }) => {
    return css`
      ${tw`absolute top-0 right-0 p-4 z-10 opacity-40 cursor-pointer`}
      color: ${({ theme }) => theme.color.purple4};

      transition-property: opacity;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      &:hover {
        ${tw`opacity-100`}
      }
    `
  }}
`

export const StyledTextAreaField = styled.textarea.attrs(
  addClasses('tp-form'),
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
      ${$variant === 'default'
        ? css`
            background: ${background.default};
            box-shadow: ${shadow};
            border: ${borderSize}rem solid transparent;
            border-radius: 1.875rem;
          `
        : css`
            background-clip: border-box;
            background-origin: border-box;
            background-position: 0 0;
            background: linear-gradient(
                91.23deg,
                #ffffff11 11.38%,
                #ffffff00 96.5%
              ),
              linear-gradient(84.86deg, #2260ff0c 65.23%, #1859ff00 99.89%),
              #141327;
            border: 0.0625rem solid #ffffff1a;
            color: ${theme.color.white};

            &::placeholder {
              color: ${theme.color.white} !important;
            }
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
