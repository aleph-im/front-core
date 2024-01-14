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
          border: ${input.border.feedback.size}rem solid ${feedback.warning};
        `
      } else {
        return css`
          border: ${input.border.feedback.size}rem solid ${feedback.error};
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
        border: ${border.focus.size}rem solid ${border.color};
      }
    `
  }}
`
