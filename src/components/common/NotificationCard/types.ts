import { HTMLAttributes, ReactNode } from 'react'

export type NotificationCardVariant = 'success' | 'warning' | 'error'

export type NotificationCardProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'content'
> & {
  variant: NotificationCardVariant
  title?: string
  text?: string
  detail?: string
  onClose?: () => void
  progress?: number

  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}
