import tw from 'twin.macro'
import styled, { css } from 'styled-components'
import { NotificationBadgeVariant } from './types'
import { addClasses } from '../../../utils'

export type StyledNotificationBadgeProps = {
  $variant: NotificationBadgeVariant
}

export const StyledNotificationBadge = styled.span.attrs<StyledNotificationBadgeProps>(
  addClasses('tp-info'),
)<StyledNotificationBadgeProps>`
  ${({ theme, $variant }) => {
    const color =
      $variant === 'success'
        ? 'main1'
        : $variant === 'error'
        ? 'error'
        : $variant === 'info'
        ? 'main0'
        : 'main2'

    return css`
      && {
        ${tw`inline-flex items-center justify-center h-3 w-3 `}
        display: inline-flex;
        font-size: 0.375rem;
        border-radius: 2.5rem;
        line-height: normal !important;
        color: ${theme.color.base2};
        background-color: ${theme.color[color]};
        text-transform: uppercase;
        font-style: normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `
  }}
`
