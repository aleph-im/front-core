import { ModalCardProps } from '../ModalCard'

export type ModalProps = ModalCardProps & {
  open: boolean
  closeOnClickOutside?: boolean
}
