import styled, { css } from 'styled-components'
import { CheckboxSize } from './types'
import Icon from '../../common/Icon'

export type StyledCheckboxContainerProps = {
  $size?: CheckboxSize
}

export const StyledCheckboxContainer = styled.div<StyledCheckboxContainerProps>`
  ${({ $size }) => {
    const gap = $size === 'xs' ? '0.75rem' : '1.125rem'

    return css`
      display: flex;
      align-items: center;
      gap: ${gap};
    `
  }}
`

export const borderRadiusStyles = css<{
  $size?: CheckboxSize
}>`
  border-radius: ${({ $size }) =>
    $size === 'xs' ? '0.25rem' : $size === 'sm' ? '0.375rem' : '0.5rem'};
`

export const StyledInputContainer = styled.div<{
  $size?: CheckboxSize
}>`
  ${({ theme, $size }) => {
    const { shadow } = theme.form.checkbox
    const size = $size === 'xs' ? '1rem' : $size === 'sm' ? '1.5rem' : '2rem'

    return css`
      flex: 0 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${size};
      height: ${size};
      box-shadow: ${shadow};
      ${borderRadiusStyles}
    `
  }}
`

export const StyledInput = styled.input<{
  $size?: CheckboxSize
}>`
  ${({ theme, $size }) => {
    const { duration } = theme.transition
    const { background, border, disabledType, check } = theme.form.checkbox

    return css`
      position: absolute;

      inset: 0;
      appearance: none;
      outline: 0;
      cursor: pointer;
      border: ${border.size}rem solid ${border.color};
      background: ${background};
      width: 100%;
      height: 100%;
      margin: 0;
      ${borderRadiusStyles}
      transition: all ease-out ${duration.fast}ms 0s;
      transition-property: border, box-shadow;

      &:checked {
        box-shadow: ${check.checked.shadow?.($size)};
        background: ${check.checked.background};
        border-width: ${border.checked.size}rem;
        border-color: ${border.color};
      }

      &:focus {
        border-width: ${border.focus.size}rem;
        border-color: ${border.focus.color};
      }

      &:disabled {
        ${disabledType === 'opacity'
          ? css`
              box-shadow: none;
              border-color: ${border.color};
              cursor: not-allowed;
            `
          : css`
              border-color: ${theme.color.disabled};
              background: ${theme.color.disabled};
            `}
      }
    `
  }}
`

export const StyledCheckIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'check',
  }
})`
  ${({ theme }) => {
    const { duration } = theme.transition
    const { border, check, disabledType } = theme.form.checkbox

    return css`
      && {
        display: block;
        pointer-events: none;
        width: 65%;
        height: 65%;
        background: transparent;
        color: ${check.checked.color};
        border-radius: 0.5rem;
        z-index: 1;
        visibility: hidden;
        clip-path: circle(0% at 0% 75%);
        will-change: visibility clip-path;
        transition: all ease-out ${duration.fast}ms 0s;

        ${StyledInput}:checked + & {
          visibility: inherit;
          clip-path: circle(100% at 50% 50%);
        }

        ${StyledInput}:disabled + & {
          cursor: not-allowed;

          ${disabledType === 'opacity'
            ? css`
                color: ${border.color};
              `
            : css`
                color: #ffffff66;
              `}
        }
      }
    `
  }}
`

export type StyledLabelProps = {
  $size?: CheckboxSize
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
