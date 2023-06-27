import styled, { css } from 'styled-components'

export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledInputContainer = styled.div<{ label?: string }>`
  ${({ label }) => {
    return css`
      flex: 0 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      box-shadow: 0px 4px 24px #00000040;
      ${label ? 'margin-right: 1.125rem;' : ''}
    `
  }}
`

export const StyledInput = styled.input`
  ${({ theme }) => {
    return css`
      position: absolute;
      inset: 0;
      appearance: none;
      outline: 0;
      cursor: pointer;
      border: 1px solid ${theme.color.main0};
      background: #ffffff0f;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      margin: 0;

      &:focus {
        border-color: ${theme.color.base0};
      }

      &:disabled {
        border-color: #ffffff0f;
        cursor: not-allowed;
      }

      &:checked:disabled {
        border-color: ${theme.color.main0}1A;
      }
    `
  }}
`

export const StyledInputDot = styled.span`
  ${({ theme }) => {
    const [g0, g1] = theme.gradient.main0.colors

    return css`
      pointer-events: none;
      content: '';
      width: 65%;
      height: 65%;
      background-color: #ffffff1a;
      border-radius: 50%;
      z-index: 1;

      ${StyledInput}:checked + & {
        background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
      }

      ${StyledInput}:disabled + & {
        background-color: #ffffff0f;
        cursor: not-allowed;
      }

      ${StyledInput}:checked:disabled + & {
        background-image: linear-gradient(90deg, ${g0}1A 0%, ${g1}1A 100%);
      }
    `
  }}
`

export const StyledLabel = styled.label`
  cursor: pointer;
`
