import React, { useCallback } from 'react'
import { StoryFn } from '@storybook/react'

import Notification from './cmp'
import { NotificationProps } from './types'
import NotificationCard from '../NotificationCard'
import { useNotification } from './context'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Notification',
  component: Notification,
  subcomponents: { NotificationCard },
}

const defaultArgs: Partial<NotificationProps> = {
  max: 2,
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const variants = ['success', 'warning', 'error']

const ConsumerComponent = () => {
  const noti = useNotification()

  const handleAddNotification = useCallback(() => {
    noti?.add({
      variant: variants[Math.ceil(Math.random() * variants.length)] as any,
      title: 'Title',
      text: 'Content',
      footer: new Date().toISOString(),
    })
  }, [noti])

  return <button onClick={handleAddNotification}>Add Notification</button>
}

const Template: StoryFn<typeof Notification> = (args) => {
  return (
    <Notification {...args}>
      <ConsumerComponent />
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
