import styled, { css } from 'styled-components'
import { addClasses } from '../../../utils'
import Icon, { IconProps } from '../Icon'
import { NotificationCardVariant } from './types'
import tw from 'twin.macro'

type NotificationVariantProps = { variant: NotificationCardVariant }

export const StyledContainer = styled.div<NotificationVariantProps>`
  ${({ theme, variant }) => {
    const { notification } = theme.component
    const background =
      notification.background?.[variant] || theme.gradient[variant]?.fn

    return css`
      ${tw`p-6 break-words max-w-full`}
      word-break: break-word;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      width: 31.25rem;
      border-radius: 1.5rem;
      background: ${background};

      && {
        color: ${notification.color};
      }
    `
  }}
`

export const StyledHeaderContainer = styled.div.attrs(addClasses('tp-h7'))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

export const StyledHeaderIcon = styled(Icon).attrs<
  NotificationVariantProps,
  IconProps
>((props) => {
  const name =
    props.variant === 'success'
      ? 'check-circle'
      : props.variant === 'warning'
      ? 'info-circle'
      : 'exclamation-circle'

  return {
    name,
    size: '2xl',
  }
})<NotificationVariantProps>(() => [tw`mr-4`])

export const StyledHeaderActions = styled.div`
  ${tw`absolute flex items-center justify-center top-0 right-0`}
  width: 2.25rem;
  height: 2.25rem;
`

export type StyledHeaderCloseProgressProps = {
  $progress: number
}

export const StyledHeaderCloseProgress = styled.div.attrs<StyledHeaderCloseProgressProps>(
  ({ $progress, theme, ...props }) => {
    const color = theme.component.notification.color
    const deg = ($progress * 360).toFixed(4)

    const background = `conic-gradient(
      ${color} 0deg ${deg}deg,
      transparent ${deg}deg 360deg
    )`

    const min = 0.1
    const max = 0.9
    const opacity = min + (max - min) * $progress

    props.style = {
      ...props.style,
      background,
      opacity,
    }

    return props
  },
)<StyledHeaderCloseProgressProps>`
  position: absolute;
  inset: 0;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  padding: 0.25rem;
  border-radius: 50%;
`

export const StyledHeaderCloseIcon = styled(Icon).attrs((props) => {
  return {
    ...props,
    name: 'multiply',
    size: 'xl',
  }
})`
  && {
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1;
  }
`

export const StyledContentContainer = styled.div.attrs(
  addClasses('tp-body1 fs-18'),
)<NotificationVariantProps>(() => [tw`mb-4`])

export const StyledFooterContainer = styled.div.attrs(
  addClasses('tp-code fs-16'),
)<NotificationVariantProps>``
