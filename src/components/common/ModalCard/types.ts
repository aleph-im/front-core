import { HTMLAttributes, ReactNode } from 'react'

export type ModalCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'content'> & {
  title?: string
  text?: string
  onClose?: () => void

  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}
