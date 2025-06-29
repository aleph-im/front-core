import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { FormError } from '../FormError/types'
import { fieldDisabledCss, fieldErrorCss } from '../styles.forms'
import Icon from '../../common/Icon'

export type StyledDropdownProps = {
  isOpen: boolean
  error?: FormError
}
export type StyledDropdownOptionMenuProps = StyledDropdownProps & {
  size?: DOMRect
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
  ${({ theme, isOpen }) => {
    const { background, shadow, border, color } = theme.form.input

    const borderSize = Math.max(
      border.size,
      border.focus.size,
      border.feedback.size,
    )

    const paddingYSize = 0.5 - borderSize
    const paddingXSize = 2 - borderSize

    return css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: start;
      text-align: left;
      width: 100%;
      max-width: 100%;
      cursor: pointer;
      background: ${background.default};
      color: ${color.default};
      box-shadow: ${shadow};
      border: ${borderSize}rem solid transparent;
      border-radius: 1.875rem;
      padding: ${paddingYSize}rem ${paddingXSize}rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-height: 2.625rem;
      transition-property: border;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      ${isOpen &&
      css`
        border-color: ${theme.color.text};
      `}

      ${fieldErrorCss}

      ${fieldDisabledCss}
    `
  }}
`

export const StyledDropdownIcon = styled(Icon).attrs(() => {
  return {
    name: 'chevron-down',
    size: 'lg',
  }
})(() => [tw`ml-auto`])

export const StyledDropdownOptionMenu = styled.div.attrs<StyledDropdownOptionMenuProps>(
  (props) => {
    const { size } = props

    const y = (size?.y || 0) + (size?.height || 0)
    const x = size?.x || 0
    const width = size?.width || 200

    // Calculate available space below the trigger
    const viewportHeight = window.innerHeight
    const spaceBelow = viewportHeight - y
    const marginBottom = 20 // Some padding from viewport bottom
    const availableHeight = Math.max(100, spaceBelow - marginBottom) // Minimum 100px
    82
    // Default max-height is 20rem = 320px
    const defaultMaxHeight = 320
    const dynamicMaxHeight = Math.min(defaultMaxHeight, availableHeight)
    86

    return {
      ...props,
      style: {
        transform: `translate3d(${x}px, ${y}px, 0)`,
        width,
        maxHeight: `${dynamicMaxHeight}px`,
      },
    }
  },
)<StyledDropdownOptionMenuProps>`
  ${({ theme, isOpen }) => {
    const { shadow } = theme.form.input

    return css`
      ${tw`fixed left-0 overflow-auto`}
      ${tw`opacity-0 invisible -top-2`}

      margin-top: 0.375rem;
      border-radius: 1.875rem;
      max-height: 20rem;
      backdrop-filter: blur(10px);
      z-index: 999;
      box-shadow: ${shadow};
      transition-property: opacity, top, visibility;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};

      & {
        ${isOpen &&
        css`
          ${tw`opacity-100 top-0`}
          visibility: inherit;
        `}
      }
    `
  }}
`
