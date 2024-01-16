import styled, { css } from 'styled-components'
import { FormError } from './FormError/types'

export type StyledInputWrapperProps = {
  error?: FormError
}

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  max-width: 100%;
  min-width: 10rem;
`

export const fieldErrorCss = css<{ error?: FormError }>`
  && {
    ${({ theme, error }) => {
      if (!error) return ''

      const { input, feedback } = theme.form

      if (error.level === 'warning') {
        return css`
          border-width: ${input.border.feedback.size}rem;
          border-color: ${feedback.warning};
        `
      } else {
        return css`
          border-width: ${input.border.feedback.size}rem;
          border-color: ${feedback.error};
        `
      }
    }}
  }
`

export const errorCss = css<{ error?: FormError }>`
  && {
    ${({ theme, error }) => {
      if (!error) return ''

      const { feedback } = theme.form

      if (error.level === 'warning') {
        return css`
          color: ${feedback.warning};
        `
      } else {
        return css`
          color: ${feedback.error};
        `
      }
    }}
  }
`

export const fieldDisabledStyles = css`
  opacity: 0.5;
`

export const fieldDisabledCss = css<{ disabled?: boolean }>`
  ${({ disabled }) => {
    if (!disabled) return ''
    return fieldDisabledStyles
  }}
`

export const fieldPlaceholderStyles = css`
  ${({ theme }) => css`
    mix-blend-mode: normal;
    color: ${theme.color.text};
    opacity: 0.4;
  `}
`

export const fieldPlaceholderCss = css`
  &::placeholder {
    ${fieldPlaceholderStyles}
  }
`

export const fieldFocusCss = css`
  ${({ theme }) => {
    const { border } = theme.form.input

    return css`
      &:focus,
      &._focus {
        border-width: ${border.focus.size}rem;
        border-color: ${border.color};
      }
    `
  }}
`
