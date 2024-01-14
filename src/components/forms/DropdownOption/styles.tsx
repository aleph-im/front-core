import styled, { css } from 'styled-components'

export type StyledDropdownOptionProps = { checked: boolean }

export const StyledDropdownOption = styled.li<StyledDropdownOptionProps>`
  ${({ theme, checked }) => {
    const { option } = theme.form.select

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      outline: 0;
      cursor: pointer;
      background: ${option.background};
      color: ${option.color};
      border-bottom: ${option.border};
      padding: 0.875rem;
      min-height: 2.75em;
      width: 100%;
      font-weight: 700;

      &:last-child {
        border-bottom: none;
      }

      & {
        ${checked &&
        css`
          box-shadow: ${option.selected.shadow};
          background: ${option.selected.background} !important;
          color: ${option.selected.color};
        `}
      }
    `
  }}
`
