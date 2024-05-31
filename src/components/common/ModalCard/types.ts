import { HTMLAttributes, ReactNode } from 'react'

export type ModalCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'content'> & {
  title?: string
  text?: string
  onClose?: () => void
  width?: string
  height?: string

  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}
