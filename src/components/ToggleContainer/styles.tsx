import styled, { css } from 'styled-components'

export const StyledContainer = styled.div<{
  $isOpen: boolean
  $duration?: number
}>`
  ${({ $isOpen, $duration = 700 }) => css`
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows ${$duration}ms ease-in-out;
    will-change: grid-template-rows;

    ${$isOpen &&
    css`
      grid-template-rows: 1fr;
    `}
  `}
`

export const StyledContent = styled.div`
  overflow: hidden;
`
