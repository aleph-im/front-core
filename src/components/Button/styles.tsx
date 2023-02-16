import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
} from 'styled-components'
import { getGlowMinEffectCss } from '../../styles'
import { StyledButtonProps } from './types'

const defaultVariants = (
  props: StyledButtonProps & { theme: DefaultTheme },
) => {
  const { theme, color, variant, kind } = props
  const mainColor = theme.color[color] || color
  const [g0, g1] = theme.gradient[color]?.colors || [color, color]

  // @todo: Fix this
  const glowMinCss = getGlowMinEffectCss(color, { width: 192, height: 192 })

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
          /* TRANSFORM BORDER INTO UNDERSCORE */
          &::after {
            display: block;
            mask: none;
            height: 1px;
            padding: 0 22px;
            background-clip: content-box;
            top: 100%;
            margin-top: -8px;
          }
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

          /* TRANSFORM BORDER INTO UNDERSCORE */
          &::after {
            display: block;
            mask: none;
            height: 1px;
            padding: 0 22px;
            background-clip: content-box;
            top: 100%;
            margin-top: -8px;
          }
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
      ${variant === 'text-only' ? 'height: 2px;' : 'padding: 2px;'}
    }
  `
}

const hoverVariants = () => {
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
  const { theme } = props

  return css`
    cursor: not-allowed;
    opacity: 0.4;
    color: ${theme.color.text};
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    backdrop-filter: none;

    &::after {
      background-color: ${theme.color.text};
      background-image: none;
    }
  `
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => {
    const { theme, color, size, variant } = props
    const mainColor = theme.color[color] || color

    const defaultVariantsCss = defaultVariants(props)
    const focusVariantsCss = focusVariants(props)
    const hoverVariantsCss = hoverVariants()
    const activeVariantsCss = activeVariants(props, defaultVariantsCss)
    const disableVariantsCss = disableVariants(props)

    return css`
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      /* display: inline-flex; inline-flex doesnt work with text-overflow */
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: ${theme.button.font.weight};
      font-family: ${theme.button.font.family};
      font-style: ${theme.button.font.style};
      margin: 0;
      padding: 8px 22px;
      width: auto;
      min-width: 0;
      max-width: 100%;
      min-height: 1rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border: none;
      border-radius: 30px;
      line-height: 1em;
      background-color: transparent;
      outline: 0;
      color: ${theme.color.text};
      transform: transale3d(0, 0, 0);

      /* BORDER */
      &::after {
        display: none;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        background-color: ${mainColor};
        z-index: 1;
        padding: 1px;
        border-radius: 30px;
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
              font-size: ${theme.button.font.size.regular -
              (variant !== 'text-only' ? 0 : 0.25)}rem;
            `
          }
          case 'big': {
            return css`
              font-size: ${theme.button.font.size.big -
              (variant !== 'text-only' ? 0 : 0.375)}rem;
            `
          }
        }
      }}
    `
  }}
`
