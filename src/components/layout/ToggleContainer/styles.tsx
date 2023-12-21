import styled, { css } from 'styled-components'
import { ToggleContainerVariant } from './types'

export const StyledContainer = styled.div<{
  $isOpen: boolean
  $duration?: number
  $variant?: ToggleContainerVariant
}>`
  ${({ $isOpen, $duration = 200, $variant = '2' }) => {
    const $duration2 = $duration

    return css`
      display: grid;
      grid-template-rows: 0fr;
      will-change: grid-template-rows;

      transition: ${$variant === '1'
        ? `grid-template-rows ease-in-out ${$duration}ms 0s`
        : `grid-template-rows ease-in-out ${$duration}ms ${
            $isOpen ? '0' : $duration2
          }ms`};

      ${$isOpen &&
      css`
        grid-template-rows: 1fr;
      `}

      & ${StyledContent} {
        ${$variant === '2' &&
        css`
          opacity: ${$isOpen ? '1' : '0'};
          transition: ${`opacity ease-in-out ${$duration2}ms ${
            $isOpen ? $duration : '0'
          }ms`};
        `}
      }
    `
  }}
`

export const StyledContent = styled.div`
  overflow: hidden;
`
