import React, { useContext } from 'react'
import { NotificationCardProps } from '../NotificationCard'

export type AddNotificationInfo = Omit<NotificationCardProps, 'onClose'> & {
  id?: string
  timeout?: number
}

export type SetNotificationInfo = Omit<NotificationCardProps, 'onClose'> & {
  timeout?: number
}

export type NotificationInfo = AddNotificationInfo & {
  id: string
  timestamp: number
  timeout: number
  pending: number
}

export type NotificationContextValue = {
  notifications: Record<string, NotificationInfo>
  notificationList: NotificationInfo[]
  add: (el: AddNotificationInfo) => string | undefined
  set: (id: string, el: SetNotificationInfo) => void
  del: (id: string) => void
}

export const NotificationContext = React.createContext<
  NotificationContextValue | undefined
>(undefined)

export const useNotification = () => useContext(NotificationContext)
