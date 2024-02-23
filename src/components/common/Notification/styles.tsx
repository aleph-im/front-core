import styled, { css } from 'styled-components'
import Button from '../Button'
import Icon from '../Icon'
import tw from 'twin.macro'
import NotificationCard from '../NotificationCard'
import { Stage } from 'transition-hook'

export const StyledContainer = styled.div`
  ${tw`fixed bottom-0 right-0 flex flex-col justify-start items-end p-4 overflow-auto max-h-full max-w-full z-30`}
`

export const StyledNotificationContainer = styled.div`
  ${tw`flex-auto flex flex-col overflow-auto max-w-full gap-4`}
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

export type StyledNotificationCardProps = {
  $stage: Stage
}

export const StyledNotificationCard = styled(
  NotificationCard,
)<StyledNotificationCardProps>`
  ${({ theme, $stage }) => {
    const isOpen = $stage === 'enter'

    return css`
      position: relative;
      opacity: ${isOpen ? 1 : 0};
      top: ${isOpen ? 0 : '1.5rem'};
      visibility: ${isOpen ? 'inherit' : 'hidden'};
      transition-property: top, opacity, visibility;
      transition-duration: ${theme.transition.duration.fast}ms;
      transition-timing-function: ${theme.transition.timing};
    `
  }}
`
