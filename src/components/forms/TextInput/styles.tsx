import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { ButtonProps, ButtonStyle } from './types'
import { FormError } from '../FormError/types'
import {
  fieldDisabledCss,
  fieldDisabledStyles,
  fieldErrorCss,
  fieldPlaceholderCss,
  fieldPlaceholderStyles,
} from '../styles.forms'

export type StyledContainerProps = ButtonProps & {
  error?: FormError
  disabled?: boolean
  $hasButton?: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme, $hasButton }) => {
    return css`
      ${tw`flex items-center gap-2.5 relative`}
      background: ${theme.color.text}0F;
      box-shadow: 0px 4px 24px #00000040;
      border: 1px solid transparent;
      border-radius: 1.875rem;
      // padding: 0.5rem 2rem;
      padding: 0.4375rem 2rem;

      ${$hasButton &&
      css`
        padding-right: 0.4375rem;
      `}

      &._focus {
        border-color: ${theme.color.text};
      }

      ${fieldDisabledCss}

      ${fieldErrorCss}
    `
  }}
`

export const StyledInput = styled.input.attrs(
  addClasses('tp-form'),
)<ButtonProps>`
  ${({ theme }) => css`
    appearance: none;
    outline: 0;
    border: 0;
    background: transparent;
    color: ${theme.color.text};
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
  `}
`

export type StyledRightContentProps = { $style: ButtonStyle }
export const StyledRightContent = styled.div<StyledRightContentProps>`
  ${({ $style }) => {
    return css`
      && > a,
      && > button {
        ${() => {
          switch ($style) {
            case 'stuck': {
              return css`
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;

                border-top-left-radius: 0;
                border-bottom-left-radius: 0;

                &::after {
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                }
              `
            }
          }
        }}
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
