import React, { useContext } from "react"
import { NotificationCardProps } from "../NotificationCard"

export type AddNotificationInfo = Omit<NotificationCardProps, 'onClose'> & {
  id?: string
}

export type NotificationInfo = AddNotificationInfo & {
  id: string
  timestamp: number
}

export type NotificationContextValue = {
  notifications: NotificationInfo[]
  add: (el: AddNotificationInfo) => void
  remove: (id: string) => void
}

export const NotificationContext = React.createContext<NotificationContextValue | undefined>(undefined)

export const useNotification = () => useContext(NotificationContext)
