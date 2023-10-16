import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { ButtonProps } from './types'
import { FormError } from '../FormError/types'
import {
  fieldDisabledCss,
  fieldErrorCss,
  fieldPlaceholderCss,
} from '../styles.forms'

export const StyledTextInputField = styled.input.attrs(
  addClasses('tp-form'),
)<ButtonProps>`
  ${({ theme }) => css`
    box-sizing: border-box;
    justify-content: space-between;
    appearance: none;
    outline: 0;
    border: 0;
    background: transparent;
    color: ${theme.color.text};
    padding: 0.5rem 2rem;
    min-height: 2.75em;
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
  `}
`

export type StyledTextInputContainerProps = ButtonProps & {
  error?: FormError
  disabled?: boolean
}

export const StyledTextInputContainer = styled.div<StyledTextInputContainerProps>`
  ${({ theme, buttonStyle }) => {
    return css`
      display: flex;
      align-items: center;
      background: ${theme.color.text}0F;
      box-shadow: 0px 4px 24px #00000040;
      border: 1px solid transparent;
      border-radius: 1.875rem;

      &._focus {
        border-color: ${theme.color.text};
      }
      
      ${fieldDisabledCss}

      ${fieldErrorCss}

      && > button,
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
              `
            }
            default: {
              return css`
                margin: 0.5rem;
              `
            }
          }
        }}
    `
  }}
`
