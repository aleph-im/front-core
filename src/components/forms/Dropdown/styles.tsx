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

    if (!size) {
      return {
        ...props,
        style: {
          transform: `translate3d(0px, 0px, 0)`,
          width: 200,
        },
      }
    }

    const triggerBottom = size.y + size.height
    const triggerTop = size.y
    const triggerLeft = size.x
    const triggerWidth = size.width

    // Calculate available space
    const viewportHeight = window.innerHeight
    const spaceBelow = viewportHeight - triggerBottom
    const spaceAbove = triggerTop

    // Dropdown menu estimated height (max-height is 20rem = 320px)
    const dropdownMaxHeight = 320
    const dropdownMargin = 6 // 0.375rem margin

    // Determine positioning
    const shouldPositionAbove =
      spaceBelow < dropdownMaxHeight + dropdownMargin && spaceAbove > spaceBelow

    let y: number
    let maxHeight: number

    if (shouldPositionAbove) {
      // Position above the trigger
      const availableHeight = Math.min(
        dropdownMaxHeight,
        spaceAbove - dropdownMargin,
      )
      // Position so the dropdown appears above the trigger with margin
      y = triggerTop - dropdownMargin
      maxHeight = availableHeight
    } else {
      // Position below the trigger (default)
      const availableHeight = Math.min(
        dropdownMaxHeight,
        spaceBelow - dropdownMargin,
      )
      y = triggerBottom
      maxHeight = availableHeight
    }

    return {
      ...props,
      style: {
        transform: `translate3d(${triggerLeft}px, ${y}px, 0)`,
        width: triggerWidth,
        maxHeight: `${maxHeight}px`,
        marginTop: shouldPositionAbove ? '-0.375rem' : '0.375rem',
      },
    }
  },
)<StyledDropdownOptionMenuProps>`
  ${({ theme, isOpen }) => {
    const { shadow } = theme.form.input

    return css`
      ${tw`fixed left-0 overflow-auto`}
      ${tw`opacity-0 invisible -top-2`}
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
