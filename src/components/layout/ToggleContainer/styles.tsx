import styled, { css } from 'styled-components'
import { ToggleContainerVariant } from './types'

export const StyledContainer = styled.div<{
  $isOpen: boolean
  $duration?: number
  $variant?: ToggleContainerVariant
}>`
  ${({ $isOpen, $duration = 700, $variant = '2' }) => {
    const $duration1 = $duration * (2 / 3)
    const $duration2 = $duration * (1 / 3)

    return css`
      display: grid;
      grid-template-rows: 0fr;
      will-change: grid-template-rows;

      transition: ${$variant === '1'
        ? `all ease-in-out ${$duration}ms 0s`
        : `all ease-in-out ${$duration1}ms ${$isOpen ? '0' : $duration2}ms`};
      transition-property: grid-template-rows;

      ${$isOpen &&
      css`
        grid-template-rows: 1fr;
      `}

      & ${StyledContent} {
        ${$variant === '2' &&
        css`
          visibility: ${$isOpen ? 'inherit' : 'hidden'};
          opacity: ${$isOpen ? '1' : '0'};
          transition: ${`all ease-in-out ${$duration1}ms ${
            $isOpen ? $duration2 : '0'
          }ms`};
          transition-property: visibility, opacity;
        `}
      }
    `
  }}
`

export const StyledContent = styled.div`
  overflow: hidden;
`
