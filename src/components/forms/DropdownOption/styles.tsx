import styled, { css } from 'styled-components'
import { getBackgroundGradientCss } from '../../../styles'

export const StyledDropdownOption = styled.li<{ checked: boolean }>`
  ${({ theme, checked }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      outline: 0;
      background-color: ${theme.color.text}0F;
      cursor: pointer;

      border-bottom: 1px solid #ffffff1a;
      padding: 0.875rem;
      min-height: 2.75em;
      width: 100%;
      color: ${theme.color.text};
      font-weight: 700;

      &:last-child {
        border-bottom: none;
      }

      & {
        ${checked &&
        css`
          box-shadow: 0px -18px 40px 7px rgba(0, 84, 255, 0.11);
          ${getBackgroundGradientCss('main0')}
          color: ${theme.color.base2};
        `}
      }
    `
  }}
`
