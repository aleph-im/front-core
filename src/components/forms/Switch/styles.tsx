import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import { normalizeBackgroundImageColor } from '../../../utils/color'

export const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
`

export const StyledInputContainer = styled.div`
  ${({ theme }) => {
    const { shadow } = theme.form.switch

    return css`
      position: relative;
      width: 3.75rem;
      height: 2rem;
      border-radius: 6.25rem;
      box-shadow: ${shadow};
    `
  }}
`

export const StyledInput = styled.input.attrs(addClasses('fx-glass-base0'))`
  ${({ theme }) => {
    const { border, disabledType } = theme.form.switch

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
      border: ${border.size}rem solid ${border.color};

      &:checked {
        border-color: ${border.checked.color};
      }

      &:focus {
        border-width: ${border.focus.size}rem;
        border-color: ${border.focus.color};
      }

      &:disabled {
        cursor: not-allowed;

        ${disabledType === 'opacity'
          ? css`
              border-color: #ffffff0f;

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
    const { dot, disabledType } = theme.form.switch

    const { background, backgroundDisabled } = normalizeBackgroundImageColor(
      dot.checked.background,
    )

    return css`
      position: absolute;
      top: 0.25rem;
      left: 0.38rem;
      pointer-events: none;
      width: 1.5rem;
      height: 1.5rem;
      z-index: 1;
      border-radius: 50%;
      background: ${dot.background};

      &:after {
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: ${background};
        opacity: 0;
        will-change: opacity;
        transition: all ease-in-out ${duration.fast}ms 0s;
      }

      will-change: transform;
      transition: transform ease-in-out ${duration.fast}ms 0s;

      ${StyledInput}:checked + & {
        transform: translateX(100%);

        &:after {
          opacity: 1;
        }
      }

      ${StyledInput}:disabled + & {
        cursor: not-allowed;

        ${disabledType === 'opacity'
          ? css`
              background: #ffffff1a;
            `
          : css`
              background: #ffffff;
            `}
      }

      ${StyledInput}:checked:disabled + &:after {
        ${disabledType === 'opacity'
          ? css`
              background: ${backgroundDisabled};
            `
          : css`
              background: #ffffff;
            `}
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
