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
      box-shadow: 0px 4px 24px #00000040;
      ${borderRadiusStyles}
    `
  }}
`

export const StyledInput = styled.input<{
  $size?: CheckboxSize
}>`
  ${({ theme, $size }) => {
    return css`
      position: absolute;

      inset: 0;
      appearance: none;
      outline: 0;
      cursor: pointer;
      border: 1px solid #ffffff4d;
      background: #ffffff0f;
      width: 100%;
      height: 100%;
      margin: 0;
      ${borderRadiusStyles}

      &:checked {
        box-shadow: ${$size === 'xs'
          ? `
          0px -41px 34px -32px rgba(68, 98, 144, 0.20) inset,
          0px 3.5px 5.5px -2px rgba(255, 255, 255, 0.80) inset,
          0px 2px 5.5px 0px rgba(146, 210, 175, 0.10) inset,
          0px 49px 50px -44px rgba(0, 255, 189, 0.06) inset,
          0px -1px 15px 0px rgba(0, 255, 189, 0.18),
          1.5px 3px 10px -1.5px rgba(0, 255, 189, 0.18)
        `
          : $size === 'sm'
          ? `
          0px -61.5px 51px -48px rgba(68, 98, 144, 0.20) inset,
          0px 5.25px 8.25px -3px rgba(255, 255, 255, 0.80) inset,
          0px 3px 8.25px 0px rgba(146, 210, 175, 0.10) inset,
          0px 73.5px 75px -66px rgba(0, 255, 189, 0.06) inset,
          0px -1.5px 22.5px 0px rgba(0, 255, 189, 0.18),
          2.25px 4.5px 15px -2.25px rgba(0, 255, 189, 0.18)
        `
          : `
          0px -82px 68px -64px rgba(68, 98, 144, 0.20) inset,
          0px 7px 11px -4px rgba(255, 255, 255, 0.80) inset,
          0px 4px 11px 0px rgba(146, 210, 175, 0.10) inset,
          0px 98px 100px -88px rgba(0, 255, 189, 0.06) inset,
          0px -2px 30px 0px rgba(0, 255, 189, 0.18),
          3px 6px 20px -3px rgba(0, 255, 189, 0.18)
        `};
      }

      &:focus {
        border-color: ${theme.color.base0};
      }

      &:disabled {
        box-shadow: none;
        border-color: #ffffff4d;
        cursor: not-allowed;
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
  && {
    display: block;
    pointer-events: none;
    width: 65%;
    height: 65%;
    background-color: transparent;
    color: #5cffb1;
    border-radius: 0.5rem;
    z-index: 1;
    visibility: hidden;
    clip-path: circle(0% at 0% 75%);
    will-change: visibility clip-path;
    transition: all ease-out 0.35s 0s;

    ${StyledInput}:checked + & {
      visibility: visible;
      clip-path: circle(100% at 50% 50%);
    }

    ${StyledInput}:disabled + & {
      color: #ffffff4d;
      cursor: not-allowed;
    }
  }
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
