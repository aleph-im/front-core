import React, { memo } from 'react'
import { StyledNotificationBadge } from './styles'
import { NotificationBadgeProps } from './types'

export const NotificationBadge = ({
  children,
  variant = 'warning',
  ...rest
}: NotificationBadgeProps) => {
  return (
    <StyledNotificationBadge {...rest} $variant={variant}>
      {children}
    </StyledNotificationBadge>
  )
}
NotificationBadge.displayName = 'NotificationBadge'

export default memo(NotificationBadge) as typeof NotificationBadge
