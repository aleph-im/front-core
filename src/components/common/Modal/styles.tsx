import styled, { css } from 'styled-components'
import Button from '../Button'
import Icon from '../Icon'
import tw from 'twin.macro'
import ModalCard from '../ModalCard'
import { Stage } from 'transition-hook'

export type StyledOverlayProps = {
  $stage: Stage
}

export const StyledOverlay = styled.div<StyledOverlayProps>`
  ${({ theme, $stage }) => {
    const $isOpen = $stage === 'enter'
    const { background } = theme.component.modal.overlay
    const $clip = $isOpen ? 100 : 0

    return css`
      ${tw`fixed inset-0 p-6 flex items-center justify-center overflow-hidden w-full h-full z-20`}
      background: ${background};
      backdrop-filter: blur(32px);
      opacity: ${$isOpen ? 1 : 0.5};
      clip-path: circle(${$clip}%);

      visibility: ${$isOpen ? 'inherit' : 'hidden'};
      transition-property: clip-path, opacity, visibility;
      transition-duration: ${theme.transition.duration.normal}ms;
      transition-timing-function: ${theme.transition.timing};
    `
  }}
`

export const StyledClearButton = styled(Button).attrs(() => {
  return {
    color: 'main0',
    variant: 'tertiary',
    size: 'regular',
  }
})`
  ${tw`flex-1`}
`

export const StyledClearIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'multiply',
    size: 'lg',
    className: 'ml-2.5',
  }
})`
  ${tw`ml-2`}
`

export type StyledModalCardProps = {
  $stage: Stage
}

export const StyledModalCard = styled(ModalCard)<StyledModalCardProps>`
  ${({ theme, $stage }) => {
    const $isOpen = $stage === 'enter'
    const $top = $isOpen ? 0 : ($stage === 'leave' ? 1 : -1) * 3

    return css`
      position: relative;
      opacity: ${$isOpen ? 1 : 0};
      top: ${$top}rem;
      visibility: ${$isOpen ? 'inherit' : 'hidden'};
      transition-property: top, opacity, visibility;
      transition-duration: ${theme.transition.duration.normal}ms;
      transition-timing-function: ${theme.transition.timing};
    `
  }}
`
