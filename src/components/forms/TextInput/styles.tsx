import styled, { css } from 'styled-components'
import { getTypoCss } from '../../../styles'
import { ButtonProps, FormError } from './types'

export const StyledTextInputField = styled.input<ButtonProps>`
  ${({ theme }) => {
    return css`
      box-sizing: border-box;
      justify-content: space-between;
      appearance: none;
      outline: 0;
      border: 0;
      background: transparent;
      color: ${theme.color.text};
      color: ${theme.color.text};
      padding: 0.5rem 2rem;
      min-height: 2.75em;
      width: 100%;
      ${getTypoCss('form')}

      &::placeholder {
        text-transform: capitalize;
        mix-blend-mode: normal;
        opacity: 0.4;
      }
    `
  }}
`

export const StyledTextInputContainer = styled.div<ButtonProps>`
  ${({ theme, buttonStyle }) => {
    return css`
      display: flex;
      align-items: center;
      background: ${theme.color.text}0F;
      box-shadow: 0px 4px 24px #00000040;
      border: 1px solid transparent;
      border-radius: 30px;

      &._focus {
        border: 1px solid ${theme.color.text}
      }

      & > button,
      & > a {
        flex: 1 0 auto;
        align-self: stretch;

        ${() => {
        switch (buttonStyle) {
          case 'stuck': {
            return css`
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;

              &::after {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
              }
            `;
          }
          default: {
            return css`
              margin: 8px;
            `;
          }
        }
      }
      }
    `
  }}
`

export const StyledTextInputInfo = styled.span <{ error: FormError }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.75rem;

  ${getTypoCss('body')}

  ${({ error }) => {
    if (error.type === 'warn') {
      return css`
        color: #FFD179;
      `
    } else {
      return css`
        color: #D92446;
      `
    }
  }}
`
