import styled, { css } from 'styled-components'
import { getBackgroundGradientCss } from '../../../styles'
import { addClasses } from '../../../utils'
import {
  fieldDisabledCss,
  fieldErrorCss,
  fieldPlaceholderCss,
} from '../styles.forms'

export const StyledSelect = styled.select.attrs(addClasses('tp-form'))`
  ${({ theme }) => {
    return css`
      display: block;
      width: 100%;
      max-width: 100%;
      appearance: none;
      outline: 0;
      background-color: ${theme.color.text}0F;
      color: ${theme.color.text};
      box-shadow: 0px 4px 24px #00000040;
      border: 1px solid transparent;
      border-radius: 1.875rem;
      padding: 0.5rem 2rem;
      padding-right: 4rem;
      text-overflow: ellipsis;
      white-space: nowrap;

      /* icon */
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCA5LjQzNzVMOC42ODc1IDguNzE4NzVMMTQuNjg3NSAyLjcxODc1TDE1LjQwNjIgMkwxNCAwLjU5Mzc1TDEzLjI4MTIgMS4zMTI1TDggNi41OTM3NUwyLjY4NzUgMS4zMTI1TDIgMC41OTM3NUwwLjU2MjUgMkwxLjI4MTI1IDIuNzE4NzVMNy4yODEyNSA4LjcxODc1TDggOS40Mzc1WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4K');
      background-repeat: no-repeat;
      background-position: center right -2.5rem;
      background-origin: content-box;

      /* Remove default arrow IE*/
      &::-ms-expand {
        display: none;
      }

      &[multiple] {
        background-image: none;
        padding: 0;
        overflow-y: auto;
      }

      &:focus {
        border-color: ${theme.color.text};
      }

      ${fieldPlaceholderCss}

      ${fieldDisabledCss}

      ${fieldErrorCss}
    `
  }}
`

export const StyledOption = styled.option`
  ${({ theme }) => {
    return css`
      appearance: none;
      outline: 0;
      background-color: ${theme.color.text}0F;
      cursor: pointer;
      border-bottom: 1px solid #ffffff1a;
      padding: 0.875rem;
      min-height: 2.75em;
      width: 100%;
      color: ${theme.color.text};
      font-weight: 700;

      ${StyledSelect}[multiple] & {
        text-align: center;
      }

      &:last-child {
        border-bottom: none;
      }

      &:checked {
        box-shadow: 0px -18px 40px 7px rgba(0, 84, 255, 0.11);
        ${getBackgroundGradientCss('main0')}
        color: ${theme.color.base2};
      }
    `
  }}
`
