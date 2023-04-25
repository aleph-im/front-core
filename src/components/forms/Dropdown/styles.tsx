import styled, { css } from 'styled-components'
import Icon from '../../Icon'
import tw from 'twin.macro'

export const StyledDropdown = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => {
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

      & {
        ${isOpen &&
        css`
          border-color: ${theme.color.text};
        `}
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

export const StyledDropdownOptionMenu = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    return css`
      display: none;
      position: absolute;
      left: 0;
      top: 100%;
      margin-top: 0.375rem;
      width: 100%;
      border-radius: 1.875rem;
      overflow: scroll;
      max-height: 20rem;
      backdrop-filter: blur(10px);

      & {
        ${isOpen &&
        css`
          display: block;
        `}
      }
    `
  }}
`
