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
          background: ${background};
          border-radius: 1.875rem;

          & > a,
          & > button {
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
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme, $hasButton }) => {
    const { background, shadow, border } = theme.form.input
    const { duration, timing } = theme.transition

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
      background: ${background};
      box-shadow: ${shadow};
      border: ${borderSize}rem solid transparent;
      transition: border ${timing} ${duration.fast}ms 0ms;
      border-radius: 1.875rem;
      padding-top: ${paddingSize}rem;
      padding-bottom: ${paddingSize}rem;
      padding-left: ${paddingLeftSize}rem;
      padding-right: ${paddingRightSize}rem;
      min-height: 2.625rem;

      ${fieldFocusCss}

      ${fieldDisabledCss}

      ${fieldErrorCss}
    `
  }}
`

export const StyledInput = styled.input.attrs(addClasses('tp-form'))`
  ${({ theme }) => {
    const { color } = theme.form.input

    return css`
      appearance: none;
      outline: 0;
      border: 0;
      background: transparent;
      color: ${color};
      min-height: 1.625rem;
      width: 100%;
      opacity: 1;

      ${fieldPlaceholderCss}

      ${fieldDisabledCss}

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
