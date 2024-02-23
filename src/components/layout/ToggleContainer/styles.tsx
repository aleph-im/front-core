import styled, { css } from 'styled-components'
import { ToggleContainerVariant } from './types'

export const StyledContainer = styled.div<{
  $isOpen: boolean
  $duration: number
  $variant?: ToggleContainerVariant
}>`
  ${({ theme, $isOpen, $duration, $variant = '2' }) => {
    const $duration1 = $duration * (2 / 3)
    const $duration2 = $duration * (1 / 3)

    return css`
      display: grid;
      grid-template-rows: 0fr;
      will-change: grid-template-rows;

      transition-property: grid-template-rows;
      transition-duration: ${$variant === '1' ? $duration : $duration1}ms;
      transition-delay: ${$variant === '1' ? 0 : $isOpen ? '0' : $duration2}ms;
      transition-timing-function: ${theme.transition.timing};

      ${$isOpen &&
      css`
        grid-template-rows: 1fr;
      `}

      & ${StyledContent} {
        ${$variant === '2' &&
        css`
          visibility: ${$isOpen ? 'inherit' : 'hidden'};
          opacity: ${$isOpen ? '1' : '0'};

          transition-property: visibility, opacity;
          transition-duration: ${$duration1}ms;
          transition-delay: ${$isOpen ? $duration2 : '0'}ms;
          transition-timing-function: ${theme.transition.timing};
        `}
      }
    `
  }}
`

export const StyledContent = styled.div`
  overflow: hidden;
`
