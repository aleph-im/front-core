import { HTMLAttributes, ReactNode } from 'react'

export type ModalCardVariant = 'success' | 'warning' | 'error'

export type ModalCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'content'> & {
  variant: ModalCardVariant
  title?: string
  text?: string
  detail?: string
  onClose?: () => void
  progress?: number

  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}
