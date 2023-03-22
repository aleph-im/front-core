import styled, { css } from 'styled-components'
import { getBackgroundGradientCss } from '../../../styles'
import { addClasses } from '../../../utils'

export const StyledSelect = styled.select.attrs(addClasses('tp-form'))`
  ${({ theme }) => {
    return css`
      display: block;
      width: 100%;
      max-width: 100%;

      appearance: none;
      outline: 0;
      background-color: ${theme.color.text}0F;
      box-shadow: 0px 4px 24px #00000040;
      border: 1px solid transparent;
      border-radius: 30px;
      padding: 0.5rem 2rem;
      color: ${theme.color.text};
      
      /* Remove default arrow */
      background-image: url(...);
      &::-ms-expand {
        display: none;
      }

      &[multiple] {
        padding: 0;
        overflow-y: auto;
      }
    `
  }}
`

export const StyledOption = styled.option.attrs(addClasses('tp-form'))`
  ${({ theme }) => {
    return css`
      appearance: none;
      outline: 0;
      background-color: ${theme.color.text}0F;
      
      border-bottom: 1px solid #ffffff1a;
      padding: 0.875rem;
      min-height: 2.75em;
      width: 100%;
      color: ${theme.color.text};

      ${StyledSelect}[multiple] & {
        text-align: center;
      }

      &:last-child {
        border-bottom: none;
      }

      &:checked {
        box-shadow: 0px -18px 40px 7px rgba(0, 84, 255, 0.11);
        ${getBackgroundGradientCss('main0')}
      }
    `
  }}
`

0.875