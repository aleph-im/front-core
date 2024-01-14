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
  ${({ theme, $size }) => {
    const { shadow } = theme.form.radio
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
      box-shadow: ${shadow};
    `
  }}
`

export const StyledInput = styled.input`
  ${({ theme }) => {
    const { duration } = theme.transition
    const { background, border, disabledType } = theme.form.radio

    return css`
      position: absolute;
      inset: 0;
      appearance: none;
      outline: 0;
      cursor: pointer;
      border: ${border.size}rem solid ${border.color};
      background: ${background};
      border-radius: 50%;
      width: 100%;
      height: 100%;
      margin: 0;
      transition: all ease-out ${duration.fast}ms 0s;
      transition-property: border;

      &:checked {
        border-color: ${border.checked.color};
      }

      &:focus {
        border-color: ${border.focus.color};
      }

      &:disabled {
        ${disabledType === 'opacity'
          ? css`
              border-color: #ffffff0f;
              cursor: not-allowed;

              &:checked {
                border-color: ${border.checked.color}1A;
              }
            `
          : css`
              border-color: ${theme.color.disabled};
              background: ${theme.color.disabled};
            `}
      }
    `
  }}
`

export const StyledInputDot = styled.span`
  ${({ theme }) => {
    const { duration } = theme.transition
    const { dot, disabledType } = theme.form.radio
    const [g0, g1] = dot.checked.background.colors

    return css`
      position: relative;
      pointer-events: none;
      width: 65%;
      height: 65%;
      background: ${dot.background};
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
        transition: all ease-out ${duration.fast}ms 0s;
      }

      ${StyledInput}:checked + &:after {
        visibility: visible;
        clip-path: circle(100% at 50% 50%);
      }

      ${StyledInput}:disabled + & {
        cursor: not-allowed;

        ${disabledType === 'opacity'
          ? css`
              background: #ffffff0f;
            `
          : css`
              background: #00000010;
            `}
      }

      ${StyledInput}:checked:disabled + &:after {
        ${disabledType === 'opacity'
          ? css`
              background-image: linear-gradient(
                90deg,
                ${g0}1A 0%,
                ${g1}1A 100%
              );
            `
          : css`
              background: #00000040;
            `}
      }
    `
  }}
`

export type StyledLabelProps = {
  $size?: RadioSize
  $disabled?: boolean
}

export const StyledLabel = styled.label<StyledLabelProps>`
  ${({ $size, $disabled }) => {
    const size = $size === 'xs' ? '0.75rem' : '1rem'

    return css`
      cursor: pointer;
      font-size: ${size};

      ${$disabled &&
      css`
        cursor: not-allowed;
        opacity: 0.4;
      `}
    `
  }}
`
