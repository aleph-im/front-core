import React, { useCallback, useMemo } from 'react'
import { StoryFn } from '@storybook/react'

import Notification from './cmp'
import { NotificationProps } from './types'
import NotificationCard from '../NotificationCard'
import { AddNotificationInfo, useNotification } from './context'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/Notification',
  component: Notification,
  subcomponents: { NotificationCard },
}

export type Args = Partial<NotificationProps> & Partial<AddNotificationInfo>

const defaultArgs: Args = {
  max: 5,
  title: 'Title',
  text: 'Content',
  timeout: 1000,
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const variants = ['success', 'warning', 'error']

const ConsumerComponent = ({ title, text, timeout }: Args) => {
  const noti = useNotification()

  const id = useMemo(
    () => noti?.notificationList[noti.notificationList.length - 1]?.id,
    [noti],
  )

  const handleAddNotification = useCallback(() => {
    if (!noti) return

    const id = noti.add({
      variant: variants[Math.ceil(Math.random() * variants.length)] as any,
      title,
      text,
      footer: new Date().toISOString(),
      timeout,
    })

    console.log('noti id', id)
  }, [noti, title, text, timeout])

  const handleSetNotification = useCallback(() => {
    if (!noti) return
    if (!id) return

    noti.set(id, {
      variant: variants[Math.ceil(Math.random() * variants.length)] as any,
      title,
      text,
      footer: new Date().toISOString(),
      timeout,
    })
  }, [noti, id, title, text, timeout])

  const handleDelNotification = useCallback(() => {
    if (!noti) return
    if (!id) return

    noti.del(id)
  }, [noti, id])

  return (
    <div tw="flex flex-col items-start gap-4">
      <button onClick={handleAddNotification}>Add Notification</button>
      {noti && noti.notificationList.length > 0 && id && (
        <>
          <button onClick={handleSetNotification}>
            Modify last notification
          </button>
          <button onClick={handleDelNotification}>
            Delete last notification
          </button>
          <div>Last id: {id}</div>
        </>
      )}
    </div>
  )
}

const Template: StoryFn<typeof Notification> = (args) => {
  return (
    <Notification {...args}>
      <ConsumerComponent {...args} />
    </Notification>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
