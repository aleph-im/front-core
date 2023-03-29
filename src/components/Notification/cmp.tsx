import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import NotificationCard from '../NotificationCard';
import { AddNotificationInfo, NotificationContext, NotificationInfo } from './context'
import { StyledClearButton, StyledClearIcon, StyledContainer } from './styles';
import { NotificationProps } from './types'

export const Notification = ({
  max = 10,
  timeout = 2000,
  children,
}: NotificationProps) => {
  const [notifications, setNotifications] = useState<NotificationInfo[]>([])
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>()

  const contextValue = useMemo(
    () => ({
      notifications,
      add(info: AddNotificationInfo) {
        if (notifications.length >= max) return

        const now = Date.now()
        const notification: NotificationInfo = {
          ...info,
          id: info.id || `${now}-${notifications.length}`,
          timestamp: now,
        }
        setNotifications([...notifications, notification])
      },
      remove(id: string) {
        setNotifications(notifications.filter(noti => noti.id !== id))
      }
    }),
    [notifications, setNotifications],
  )

  const firstTimestamp = useMemo(
    () => notifications.reduce((acc, curr) => Math.min(acc, curr.timestamp), Number.MAX_SAFE_INTEGER),
    [notifications, timeout]
  )

  const disposeNotifications = useCallback(() => {
    timeoutIdRef.current = undefined
    setNotifications(notifications.filter(noti => Date.now() < (noti.timestamp + timeout)))
  }, [notifications, timeout])

  const stopTimeout = useCallback(() => {
    if (!timeoutIdRef.current) return
    clearTimeout(timeoutIdRef.current)
    timeoutIdRef.current = undefined
  }, [firstTimestamp, timeoutIdRef.current, timeout, disposeNotifications])

  const resetTimeout = useCallback(() => {
    if (notifications.length === 0) return
    stopTimeout()
    const ms = Math.max(firstTimestamp + timeout - Date.now(), 0)
    timeoutIdRef.current = setTimeout(disposeNotifications, ms)
  }, [notifications, stopTimeout, firstTimestamp, timeoutIdRef.current, timeout, disposeNotifications])

  const clearAll = useCallback(() => {
    stopTimeout()
    setNotifications([])
  }, [stopTimeout, setNotifications])

  useEffect(() => {
    resetTimeout()
    return stopTimeout
  }, [notifications, timeoutIdRef.current, resetTimeout])

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      {createPortal(
        (
          <StyledContainer
            onMouseOver={stopTimeout}
            onMouseOut={resetTimeout}
          >
            {notifications.sort().map(noti => (
              <NotificationCard
                key={noti.id}
                onClose={() => contextValue.remove(noti.id)}
                className="mt-sm"
                {...noti}
              />
            ))}
            {notifications.length > 2 && <StyledClearButton onClick={clearAll}>Clear all <StyledClearIcon /></StyledClearButton>}
          </StyledContainer>
        )
        , document.body)
      }
    </NotificationContext.Provider>
  )
}

export default Notification
