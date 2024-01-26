import styled, { DefaultTheme, css } from 'styled-components'
import { StyledButtonProps } from './types'
import { normalizeBackgroundImageColor } from '../../../utils/color'
import { CssOutput, Gradient } from '../../../themes/types'

function getColor(
  theme: DefaultTheme,
  item: {
    transparency?: string
    background?: {
      default?: boolean | string
      focus?: boolean | string
      disabled?: boolean | string
    }
    gradient?: {
      default?: boolean | string | Gradient
      focus?: boolean | string | Gradient
      disabled?: boolean | string | Gradient
    }
  },
  $color: string,
  state: 'default' | 'focus' | 'disabled' = 'default',
) {
  const c1 = item.background?.[state]
  const c2 = item.gradient?.[state]

  const color1Config =
    c1 === true ? theme.color[$color] || $color : c1 || 'transparent'

  const gradient1Config =
    c2 === true ? theme.gradient[$color] || $color : c2 || 'transparent'

  const { backgroundColor: color1, backgroundColorDisabled: color1Disabled } =
    normalizeBackgroundImageColor(color1Config, item.transparency)

  const {
    backgroundImage: gradient1,
    backgroundImageDisabled: gradient1Disabled,
  } = normalizeBackgroundImageColor(gradient1Config, item.transparency)

  const color = !item.transparency ? color1 : color1Disabled
  const gradient = !item.transparency ? gradient1 : gradient1Disabled

  return { color, gradient }
}

const defaultVariants = (props: StyledButtonProps) => {
  const { theme, $color, $variant, $kind, $size } = props

  const button = theme.component.button[$kind][$variant]
  if (!button) return

  const buttonCl = getColor(theme, button, $color)
  const borderCl = getColor(theme, button.border, $color)

  return css`
    position: relative;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;
    text-align: center;
    margin: 0;
    width: auto;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border: none;
    border-radius: 1.875rem;
    line-height: 1.16666666667;
    letter-spacing: 0.0522rem;
    outline: 0;
    transform: transale3d(0, 0, 0);
    text-decoration: none !important;
    z-index: 0;
    transition: all 0.2s 0s ease-in-out;
    outline-style: solid;
    font-family: ${button.font.family};
    font-style: ${button.font.style};
    font-weight: ${button.font.weight};
    font-size: ${button.font.size[$size]}rem;
    min-height: ${button.height[$size]}rem;
    padding: ${button.padding};
    color: ${button.color?.default};
    background-color: ${buttonCl.color};
    background-image: ${buttonCl.gradient};
    outline-width: ${button.outline.size?.default}rem;
    outline-color: ${button.outline.color?.default};
    ${button.css?.default && button.css?.default($color)}

    ${button.border.type === 'underscore' &&
    css`
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      background-color: transparent;
    `}

    /* BORDER */
    &::after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      border-radius: 1.875rem;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask-composite: xor;
      padding: ${button.border.size.default}rem;
      background-color: ${borderCl.color};
      background-image: ${borderCl.gradient};

      ${button.border.type === 'underscore' &&
      css`
        mask: none;
        height: ${button.border.size.default}rem;
        padding: 0;
        background-clip: content-box;
        border-radius: 0;
        top: 50%;
        margin-top: 0.6em;
      `}
    }
  `
}

const focusVariants = (props: StyledButtonProps) => {
  const { theme, $kind, $variant } = props

  const button = theme.component.button[$kind][$variant]
  if (!button) return

  const borderCl = getColor(theme, button.border, 'white', 'focus')

  return css`
    outline-width: ${button.outline.size?.focus}rem;
    outline-color: ${button.outline.color?.focus};

    &::after {
      background-color: ${borderCl.color};
      background-image: ${borderCl.gradient};
      padding: ${button.border.size.focus}rem;

      ${button.border.type === 'underscore' &&
      css`
        padding: 0;
        height: ${button.border.size.focus}rem;
      `}
    }
  `
}

const hoverVariants = (props: StyledButtonProps) => {
  const { theme, $color, $variant, $kind } = props

  const button = theme.component.button[$kind][$variant]
  if (!button) return

  return css`
    ${button.css?.hover && button.css?.hover($color)}
  `
}

const activeVariants = (
  props: StyledButtonProps,
  defaultVariantsCss?: CssOutput,
) => {
  const { theme, $kind, $variant, $color } = props

  const button = theme.component.button[$kind][$variant]
  if (!button) return

  return css`
    ${defaultVariantsCss}
    ${button.css?.active && button.css?.active($color)}
  `
}

const disableVariants = (props: StyledButtonProps) => {
  const { theme, $kind, $variant } = props

  const button = theme.component.button[$kind][$variant]
  if (!button) return

  const buttonCl = getColor(theme, button, 'transparent', 'disabled')
  const borderCl = getColor(theme, button.border, 'transparent', 'disabled')

  return css`
    cursor: not-allowed;
    color: ${button.color?.disabled};
    background-color: ${buttonCl.color};
    background-image: ${buttonCl.gradient};
    outline-width: ${button.outline.size?.disabled}rem;
    outline-color: ${button.outline.color?.disabled};
    box-shadow: none;
    backdrop-filter: none;

    &::after {
      background-color: ${borderCl.color};
      background-image: ${borderCl.gradient};
      padding: ${button.border.size.disabled}rem;

      ${button.border.type === 'underscore' &&
      css`
        padding: 0;
        height: ${button.border.size.disabled}rem;
      `}
    }
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => {
    const defaultVariantsCss = defaultVariants(props)
    const focusVariantsCss = focusVariants(props)
    const hoverVariantsCss = hoverVariants(props)
    const activeVariantsCss = activeVariants(props, defaultVariantsCss)
    const disableVariantsCss = disableVariants(props)

    return css`
      && {
        /* DEFAULT VARIANT STYLES FOR EACH KIND */
        ${defaultVariantsCss}

        &:focus, &._focus {
          ${focusVariantsCss}
        }

        &:hover,
        &._hover {
          ${hoverVariantsCss}
        }

        &:active,
        &._active {
          ${activeVariantsCss}
        }

        &:disabled {
          ${disableVariantsCss}
        }
    `
  }}
`
