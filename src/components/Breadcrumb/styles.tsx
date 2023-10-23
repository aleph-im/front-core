import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../utils'

export const StyledNavlink = styled.li.attrs(addClasses('tp-info fs-10'))<{
  selected: boolean
  selectedColor?: string
}>`
  ${({ theme, selected, selectedColor = 'main0' }) => {
    const mainColor = theme.color[selectedColor] || selectedColor

    return css`
      ${tw`p-0.5`}

      a,
      span {
        color: inherit;
        text-decoration: none;
      }

      :hover {
        ${tw`underline`}
      }

      &:not(:last-child)::after {
        content: '/';
        ${tw`inline-block pl-1 no-underline`}
      }

      ${selected &&
      css`
        &,
        * {
          color: ${mainColor};
          ${tw`!cursor-default !no-underline`}
        }
      `}
    `
  }}
`
