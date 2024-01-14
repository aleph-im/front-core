import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { getGlowHoverEffectCss, getGlowMinEffectCss } from '../../../styles'
import { StyledButtonProps } from './types'

const defaultVariants = (
  props: StyledButtonProps & { theme: DefaultTheme },
) => {
  const { theme, color, variant, kind } = props
  const mainColor = theme.color[color] || color
  const [g0, g1] = theme.gradient[color]?.colors || [color, color]

  // @todo: Fix this
  const glowMinCss = theme.button.glow
    ? getGlowMinEffectCss(color, { width: 192, height: 192 })
    : undefined

  const underscoreCss =
    variant === 'text-only'
      ? css`
          padding-left: 0;
          padding-right: 0;
          border-radius: 0;

          /* TRANSFORM BORDER INTO UNDERSCORE */
          &::after {
            display: block;
            mask: none;
            height: ${theme.button.border.size}rem;
            padding: 0;
            background-clip: content-box;
            border-radius: 0;
            top: 50%;
            margin-top: 0.48em;
          }
        `
      : undefined

  if (kind === 'flat') {
    switch (variant) {
      case 'primary': {
        return css`
          color: ${theme.color.background};
          background-color: ${mainColor};

          &::after {
            display: none;
          }
        `
      }
      case 'secondary': {
        return css`
          &::after {
            display: block;
          }
        `
      }
      case 'text-only': {
        return css`
          ${underscoreCss}
        `
      }
    }
  } else {
    switch (variant) {
      case 'primary': {
        return css`
          color: ${theme.color.background};
          background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);

          ${glowMinCss}

          &::after {
            display: none;
          }
        `
      }
      case 'secondary': {
        return css`
          &::after {
            display: block;
            background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
          }
        `
      }
      case 'tertiary': {
        return css`
          background-image: linear-gradient(90deg, ${g0}1f 0%, ${g1}1f 100%);

          &::after {
            display: block;
            background-image: linear-gradient(90deg, ${g0} 0%, ${g1} 100%);
          }
        `
      }
      case 'text-only': {
        return css`
          color: ${theme.color.text};
          background-color: transparent;
          ${underscoreCss}
        `
      }
    }
  }
}

const focusVariants = (props: StyledButtonProps & { theme: DefaultTheme }) => {
  const { theme, variant } = props

  return css`
    &::after {
      display: block;
      background-image: none;
      background-color: ${theme.color.text};

      ${variant === 'text-only'
        ? css`
            height: ${theme.button.border.focus.size}rem;
          `
        : css`
            padding: ${theme.button.border.focus.size}rem;
          `}
    }
  `
}

const hoverVariants = (props: StyledButtonProps & { theme: DefaultTheme }) => {
  const { theme, color, variant, kind } = props

  const glowHoverCss = theme.button.glow
    ? getGlowHoverEffectCss(color, { width: 192, height: 192 })
    : undefined

  if (kind === 'neon' && variant === 'primary') {
    return glowHoverCss
  }

  return css``
}

const activeVariants = (
  props: StyledButtonProps & { theme: DefaultTheme },
  defaultVariantsCss?: FlattenSimpleInterpolation,
) => {
  const { variant } = props

  return css`
    ${defaultVariantsCss}
    ${variant === 'tertiary' ? `background-image: none;` : ''}
    box-shadow: none;
    backdrop-filter: none;
  `
}

const disableVariants = (
  props: StyledButtonProps & { theme: DefaultTheme },
) => {
  const { theme, variant } = props
  const whiteDisabled = `${theme.color.text}4C`
  const blackDisabled = theme.color.base2

  return css`
    cursor: not-allowed;
    color: ${theme.color.text};
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    backdrop-filter: none;

    ${variant === 'primary'
      ? css`
          background-color: ${whiteDisabled};
          color: ${blackDisabled};
        `
      : css`
          color: ${whiteDisabled};
        `}

    &::after {
      display: block;

      ${variant === 'primary'
        ? css`
            background-color: ${blackDisabled};
          `
        : css`
            background-color: ${whiteDisabled};
            background-image: none;
          `}
    }
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => {
    const { theme, color, size, variant } = props
    const mainColor = theme.color[color] || color

    const defaultVariantsCss = defaultVariants(props)
    const focusVariantsCss = focusVariants(props)
    const hoverVariantsCss = hoverVariants(props)
    const activeVariantsCss = activeVariants(props, defaultVariantsCss)
    const disableVariantsCss = disableVariants(props)

    return css`
      && {
        position: relative;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.375rem;
        text-align: center;
        font-weight: ${theme.button.font.weight};
        font-family: ${theme.button.font.family};
        font-style: ${theme.button.font.style};
        margin: 0;
        padding: 0.5rem 1.375rem;
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
        background-color: transparent;
        outline: 0;
        color: ${theme.color.text};
        transform: transale3d(0, 0, 0);
        text-decoration: none !important;
        z-index: 0;
        transition: all 0.2s 0s ease-in-out;

        /* BORDER */
        &::after {
          display: none;
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: ${mainColor};
          z-index: -1;
          padding: ${theme.button.border.size}rem;
          border-radius: 1.875rem;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
        }

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

        &[disabled] {
          ${disableVariantsCss}
        }

        /* Size */
        ${() => {
          switch (size) {
            case 'regular': {
              return css`
                min-height: 2.3125rem; // 37px
                font-size: ${theme.button.font.size.regular -
                (variant !== 'text-only' ? 0 : 0.25)}rem;
              `
            }
            case 'big': {
              return css`
                min-height: 2.75rem; // 44px
                font-size: ${theme.button.font.size.big -
                (variant !== 'text-only' ? 0 : 0.375)}rem;
              `
            }
          }
        }}
      }
    `
  }}
`
