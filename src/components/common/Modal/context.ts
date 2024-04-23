import React, { useContext } from 'react'
import { ModalCardProps } from '../ModalCard'

export type OpenModalInfo = Omit<ModalCardProps, 'onClose'>

export type ModalInfo = OpenModalInfo

export type ModalContextValue = {
  modal?: ModalInfo
  open: (info: OpenModalInfo) => void
  close: () => void
}

export const ModalContext = React.createContext<ModalContextValue | undefined>(
  undefined,
)

export const useModal = () => useContext(ModalContext)
