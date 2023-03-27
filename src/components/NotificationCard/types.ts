import { ReactNode } from "react"

export type NotificationCardVariant = 'success' | 'warning' | 'error'

export type NotificationCardProps = {
  variant: NotificationCardVariant
  title: string
  text: string
  detail: string

  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}
