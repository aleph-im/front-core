/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  AddNotificationInfo,
  NotificationContext,
  NotificationInfo,
  SetNotificationInfo,
} from './context'
import {
  StyledClearButton,
  StyledClearIcon,
  StyledContainer,
  StyledNotificationCard,
  StyledNotificationContainer,
} from './styles'
import { NotificationProps } from './types'
import { useListTransition } from 'transition-hook'
import { useTheme } from 'styled-components'
import { Portal } from '../../layout/Portal'

export const Notification = ({
  max = 10,
  timeout: timeoutProp = 2000,
  children,
}: NotificationProps) => {
  const [notifications, setNotifications] = useState<
    Record<string, NotificationInfo>
  >({})

  const notificationList = useMemo(
    () =>
      Object.values(notifications).sort((a, b) => a.timestamp - b.timestamp),
    [notifications],
  )

  const timerIdRef = useRef<NodeJS.Timeout | undefined>()
  const lastCheckRef = useRef<number>(Number.MAX_SAFE_INTEGER)

  const add = useCallback(
    (info: AddNotificationInfo) => {
      const timestamp = Date.now()
      const id = info.id || `${timestamp}-${Math.ceil(Math.random() * 1000)}`

      const timeout =
        info.timeout === 0
          ? Number.MAX_SAFE_INTEGER
          : info.timeout || timeoutProp
      const pending = timeout

      const notification: NotificationInfo = {
        ...info,
        id,
        timestamp,
        timeout,
        pending,
      }

      setNotifications((prev) => {
        const length = Object.values(prev).length
        if (length >= max) return prev
        return { ...prev, [id]: notification }
      })

      return id
    },
    [max, timeoutProp],
  )

  const set = useCallback(
    (id: string, info: SetNotificationInfo) => {
      setNotifications((prev) => {
        const notification: NotificationInfo = {
          ...prev[id],
          ...info,
        }

        notification.timeout =
          notification.timeout === 0
            ? Number.MAX_SAFE_INTEGER
            : notification.timeout || timeoutProp
        notification.pending = notification.pending || notification.timeout

        return { ...prev, [id]: notification }
      })

      return true
    },
    [timeoutProp],
  )

  const del = useCallback((id: string) => {
    setNotifications((prev) => {
      const { [id]: _, ...rest } = prev
      return rest
    })

    return true
  }, [])

  const contextValue = useMemo(
    () => ({
      notifications,
      notificationList,
      add,
      set,
      del,
    }),
    [notifications, notificationList, add, set, del],
  )

  const stopTimer = useCallback(() => {
    if (!timerIdRef.current) return
    clearInterval(timerIdRef.current)
    timerIdRef.current = undefined
  }, [])

  const resetTimer = useCallback(() => {
    stopTimer()

    const now = Date.now()
    lastCheckRef.current = now

    timerIdRef.current = setInterval(() => {
      const now = Date.now()
      const elapsed = Math.max(now - lastCheckRef.current, 0)
      lastCheckRef.current = now

      setNotifications((prev) => {
        return Object.values(prev)
          .map((noti) => {
            noti.pending = Math.max(noti.pending - elapsed, 0)
            return noti
          })
          .filter((noti) => noti.pending > 0)
          .reduce((ac, cv) => {
            ac[cv.id] = cv
            return ac
          }, {} as Record<string, NotificationInfo>)
      })
    }, 0)
  }, [stopTimer])

  const clearAll = useCallback(() => {
    stopTimer()
    setNotifications({})
  }, [stopTimer])

  useEffect(() => {
    if (notificationList.length) resetTimer()
    return stopTimer
  }, [notificationList.length, resetTimer, stopTimer])

  const theme = useTheme()

  const list = useListTransition(
    notificationList,
    theme.transition.duration.fast,
  )

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <Portal>
        <StyledContainer onMouseOver={stopTimer} onMouseOut={resetTimer}>
          <StyledNotificationContainer>
            {list((item, $stage) => (
              <>
                <StyledNotificationCard
                  key={item.id}
                  {...{
                    onClose: () => contextValue.del(item.id),
                    $stage,
                    progress: Math.min(
                      (item.timeout - item.pending) / item.timeout,
                      1,
                    ),
                    ...item,
                  }}
                />
              </>
            ))}
          </StyledNotificationContainer>
          {notificationList.length > 2 && (
            <div tw="mt-4">
              <StyledClearButton onClick={clearAll}>
                Clear all <StyledClearIcon tw="ml-2" />
              </StyledClearButton>
            </div>
          )}
        </StyledContainer>
      </Portal>
    </NotificationContext.Provider>
  )
}
Notification.displayName = 'Notification'

export default memo(Notification) as typeof Notification
