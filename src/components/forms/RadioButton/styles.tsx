import styled, { css } from 'styled-components'

export const StyledRadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledInputContainer = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1.125rem;
  border-radius: 50%;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
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
      background: #FFFFFF0F;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      margin: 0;

      &:focus {
        border-color: ${theme.color.base0};
      }

      &:disabled {
        border-color: #FFFFFF0F;
      }

      &:checked:disabled {
        border-color: ${theme.color.main0}1A;
      }
  `}}
`

export const StyledInputDot = styled.span`
  ${({ theme }) => {
    const [g0, g1] = theme.gradient.main0.colors

    return css`
      pointer-events: none;
      content: '';
      width: 65%;
      height: 65%;
      background-color: #FFFFFF1A;
      border-radius: 50%;
      z-index: 1;

      ${StyledInput}:checked + & {
        background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
      }

      ${StyledInput}:disabled + & {
        background-color: #FFFFFF0F;
      }

      ${StyledInput}:checked:disabled + & {
        background-image: linear-gradient(90deg, ${g0}1A 0%, ${g1}1A 100%);
      }
  `}}
`

export const StyledLabel = styled.label`
  cursor: pointer;
`