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

      if (error.level === 'warning') {
        return css`
          border-color: ${theme.color.warning};
        `
      } else {
        return css`
          border-color: ${theme.color.error};
        `
      }
    }}
  }
`

export const errorCss = css<{ error?: FormError }>`
  && {
    ${({ theme, error }) => {
      if (!error) return ''

      if (error.level === 'warning') {
        return css`
          color: ${theme.color.warning};
        `
      } else {
        return css`
          color: ${theme.color.error};
        `
      }
    }}
  }
`

export const fieldDisabledStyles = css`
  opacity: 0.5;
`

export const fieldDisabledCss = css<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    ${disabled &&
    css`
      &,
      &:disabled,
      &._disabled {
        ${fieldDisabledStyles}
      }
    `}
  `}
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
  &:focus,
  &._focus {
    border-color: ${({ theme }) => theme.color.text};
  }
`
