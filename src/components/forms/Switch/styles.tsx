import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { getGlassEffectBorderCss } from '../../../styles'

export const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledInputContainer = styled.div<{ label?: string }>`
  ${({ label }) => {
    return css`
      position: relative;
      width: 3.75rem;
      height: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0px 4px 24px #00000040;
      ${label ? 'margin-right: 1.125rem;' : ''}
    `
  }}
`

export const StyledInput = styled.input.attrs(addClasses('fx-glass-base0'))`
  ${({ theme }) => {
    return css`
      position: absolute;
      appearance: none;
      inset: 0;
      outline: 0;
      cursor: pointer;
      border-radius: 6.25rem;
      width: 100%;
      height: 100%;
      margin: 0;
      ${getGlassEffectBorderCss('base1')}

      &:checked {
        border-color: ${theme.color.main0};
      }

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
      position: absolute;
      top: 0.25rem;
      left: 0.38rem;
      pointer-events: none;
      width: 1.5rem;
      height: 1.5rem;
      z-index: 1;
      border-radius: 50%;
      background-color: ${theme.color.base0};

      &:after {
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
        opacity: 0;
        will-change: opacity;
        transition: opacity ease-in-out 0.35s 0s;
      }

      will-change: transform;
      transition: transform ease-in-out 0.35s 0s;

      ${StyledInput}:checked + & {
        transform: translateX(100%);

        &:after {
          opacity: 1;
        }
      }

      ${StyledInput}:disabled + & {
        cursor: not-allowed;
        background-color: #ffffff1a;
      }

      ${StyledInput}:checked:disabled + &:after {
        background-image: linear-gradient(90deg, ${g0}1A 0%, ${g1}1A 100%);
      }
    `
  }}
`

export type StyledLabelProps = {
  $disabled?: boolean
}

export const StyledLabel = styled.label<StyledLabelProps>`
  ${({ $disabled }) => {
    return css`
      cursor: pointer;

      ${$disabled &&
      css`
        cursor: not-allowed;
        opacity: 0.4;
      `}
    `
  }}
`
