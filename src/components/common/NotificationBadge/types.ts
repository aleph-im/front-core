import { HTMLAttributes } from 'react'

export type NotificationBadgeVariant = 'success' | 'warning' | 'error' | 'info'

export type NotificationBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode
  variant?: NotificationBadgeVariant
}
