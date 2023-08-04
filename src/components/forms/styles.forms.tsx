import styled, { css } from 'styled-components'
import { FormError } from './FormError/types'

export type StyledInputWrapperProps = {
  error?: FormError
}

export const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  max-width: 100%;
  min-width: 12.5rem;
`

export const fieldErrorCss = css<{ error?: FormError }>`
  && {
    ${({ theme, error }) => {
      if (!error) return ''

      if (error.level === 'warn') {
        return css`
          border-color: ${theme.color.warn};
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

      if (error.level === 'warn') {
        return css`
          color: ${theme.color.warn};
        `
      } else {
        return css`
          color: ${theme.color.error};
        `
      }
    }}
  }
`

const disabledCss = css`
  opacity: 0.5;
  color: ${({ theme }) => theme.color.text}77;
`

export const fieldDisabledCss = css<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    ${disabled && disabledCss}

    &:disabled,
    &._disabled {
      ${disabledCss}
    }
  `}
`

export const fieldPlaceholderCss = css`
  &::placeholder {
    mix-blend-mode: normal;
    opacity: 0.4;
  }
`

export const fieldFocusCss = css`
  &:focus,
  &._focus {
    border-color: ${({ theme }) => theme.color.text};
  }
`
