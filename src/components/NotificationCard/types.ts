import { HTMLAttributes, ReactNode } from "react"

export type NotificationCardVariant = 'success' | 'warning' | 'error'

export type NotificationCardProps = HTMLAttributes<HTMLDivElement> & {
  variant: NotificationCardVariant
  title?: string
  text?: string
  detail?: string
  onClose?: () => void

  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}
