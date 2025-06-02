import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { ButtonStyle } from './types'
import { FormError } from '../FormError/types'
import {
  fieldDisabledCss,
  fieldDisabledStyles,
  fieldErrorCss,
  fieldFocusCss,
  fieldPlaceholderCss,
  fieldPlaceholderStyles,
} from '../styles.forms'

export type StyledOuterContainerProps = {
  $hasButton?: boolean
  $buttonStyle?: ButtonStyle
  $dataView?: number
}

export const StyledOuterContainer = styled.div<StyledOuterContainerProps>`
  ${({ theme, $buttonStyle }) => {
    const { background } = theme.form.input

    return css`
      ${tw`flex items-stretch`}

      ${StyledContainer} {
        ${tw`flex-auto`}
      }

      ${$buttonStyle === 'stuck' &&
      css`
        && {
          background: ${background.default};
          border-radius: 1.875rem;

          && > a,
          && > button {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &::after {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
          }

          ${StyledContainer} {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      `}
    `
  }}
`

export type StyledContainerProps = {
  error?: FormError
  disabled?: boolean
  $hasButton?: boolean
  $dataView?: number
  $autoWidth?: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme, $hasButton, $dataView, $autoWidth }) => {
    const { background, shadow, border } = theme.form.input

    const borderSize = Math.max(
      border.size,
      border.focus.size,
      border.feedback.size,
    )

    const paddingSize = 0.5 - borderSize
    const paddingLeftSize = 2 - borderSize
    const paddingRightSize = !$hasButton ? paddingLeftSize : paddingSize

    return css`
      ${tw`flex items-center gap-2.5 relative`}
      background: ${background.default};
      box-shadow: ${shadow};
      border: ${borderSize}rem solid transparent;
      border-radius: 1.875rem;
      padding-top: ${paddingSize}rem;
      padding-bottom: ${paddingSize}rem;
      padding-left: ${paddingLeftSize}rem;
      padding-right: ${paddingRightSize}rem;
      min-height: 2.625rem;
      transition-property: border, color, opacity, background;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      ${fieldFocusCss}

      ${fieldDisabledCss}

      ${fieldErrorCss}

      ${$dataView &&
      css`
        opacity: 1;
        background: ${background.data};
      `}

      ${$autoWidth &&
      css`
        width: fit-content;
        min-width: fit-content;
      `}
    `
  }}
`

export type StyledInputProps = {
  disabled?: boolean
  $dataView?: number
  $autoWidth?: boolean
  $width?: number
}

export const StyledInput = styled.input.attrs(
  addClasses('tp-form'),
)<StyledInputProps>`
  ${({ theme, $dataView, $autoWidth, $width }) => {
    const { color } = theme.form.input

    return css`
      appearance: none;
      outline: 0;
      border: 0;
      background: transparent;
      color: ${color.default};
      min-height: 1.625rem;
      width: ${$autoWidth && $width ? `${$width}px` : '100%'};
      opacity: 1;

      ${fieldPlaceholderCss}

      ${fieldDisabledCss}

      ${$dataView &&
      css`
        && {
          opacity: ${$dataView === 1 ? 0.6 : 1};
          color: ${color.data};
          font-weight: 700;
          pointer-events: none;
        }
      `}

    /* Remove Arrows/Spinners */

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type='number'] {
        -moz-appearance: textfield;
      }

      ${$autoWidth &&
      css`
        flex: none;
        min-width: 0;
      `}
    `
  }}
`

export type StyledLeftContentProps = { $isFilled: boolean; disabled?: boolean }
export const StyledLeftContent = styled.div<StyledLeftContentProps>`
  ${({ $isFilled, disabled }) => {
    return css`
      ${!$isFilled && fieldPlaceholderStyles}
      ${disabled && fieldDisabledStyles}
      ${!$isFilled &&
      disabled &&
      css`
        /* disabled + placeholder 0.5 * 0.4 = 0.2 */
        opacity: 0.2;
      `}
    `
  }}
`

