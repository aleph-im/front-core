import styled, { css } from 'styled-components'
import { RadioSize } from './types'

export const StyledRadioContainer = styled.div<{ $size?: RadioSize }>`
  ${({ $size }) => {
    const gap = $size === 'xs' ? '0.75rem' : '1.125rem'

    return css`
      display: flex;
      align-items: center;
      gap: ${gap};
    `
  }}
`

export const StyledInputContainer = styled.div<{ $size?: RadioSize }>`
  ${({ $size }) => {
    const size = $size === 'xs' ? '1rem' : $size === 'sm' ? '1.5rem' : '2rem'

    return css`
      flex: 0 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${size};
      height: ${size};
      border-radius: 50%;
      box-shadow: 0px 4px 24px #00000040;
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
      position: relative;
      pointer-events: none;
      width: 65%;
      height: 65%;
      background-color: #ffffff1a;
      border-radius: 50%;
      z-index: 1;

      &:after {
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
        visibility: hidden;
        clip-path: circle(0% at 50% 50%);
        will-change: visibility clip-path;
        transition: all ease-out 0.35s 0s;
      }

      ${StyledInput}:checked + &:after {
        visibility: visible;
        clip-path: circle(100% at 50% 50%);
      }

      ${StyledInput}:disabled + & {
        background-color: #ffffff0f;
        cursor: not-allowed;
      }

      ${StyledInput}:checked:disabled + &:after {
        background-image: linear-gradient(90deg, ${g0}1A 0%, ${g1}1A 100%);
      }
    `
  }}
`

export const StyledLabel = styled.label<{ $size?: RadioSize }>`
  ${({ $size }) => {
    const size = $size === 'xs' ? '0.75rem' : '1rem'

    return css`
      cursor: pointer;
      font-size: ${size};
    `
  }}
`
