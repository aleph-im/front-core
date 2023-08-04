import styled, { css } from 'styled-components'
import Icon from '../../Icon'
import tw from 'twin.macro'
import { FormError } from '../FormError/types'

export type StyledDropdownProps = {
  isOpen: boolean
  error?: FormError
}
export type StyledDropdownOptionMenuProps = StyledDropdownProps & {
  size?: DOMRect
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
  ${({ theme, isOpen, error }) => {
    return css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: start;
      text-align: left;
      width: 100%;
      max-width: 100%;
      cursor: pointer;
      background-color: ${theme.color.text}0F;
      color: ${theme.color.text};
      box-shadow: 0px 4px 24px #00000040;
      border: 1px solid transparent;
      border-radius: 1.875rem;
      padding: 0.5rem 2rem;
      text-overflow: ellipsis;
      white-space: nowrap;

      ${isOpen &&
      css`
        border-color: ${theme.color.text};
      `}

      && {
        ${() => {
          if (!error) return ''

          if (error.level === 'warn') {
            return css`
              border-color: #ffd179;
            `
          } else {
            return css`
              border-color: #d92446;
            `
          }
        }}
      }
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

    return {
      ...props,
      style: {
        transform: `translate3d(${x}px, ${y}px, 0)`,
        width,
      },
    }
  },
)<StyledDropdownOptionMenuProps>`
  ${({ isOpen }) => {
    return css`
      top: 0;
      left: 0;
      display: none;
      position: fixed;
      margin-top: 0.375rem;
      border-radius: 1.875rem;
      overflow: auto;
      max-height: 20rem;
      backdrop-filter: blur(10px);
      z-index: 999;

      & {
        ${isOpen &&
        css`
          display: block;
        `}
      }
    `
  }}
`
