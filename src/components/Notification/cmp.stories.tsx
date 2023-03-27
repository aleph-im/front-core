import React, { useCallback } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Notification from './cmp'
import { NotificationProps } from './types'
import NotificationCard from '../NotificationCard'
import { useNotification } from './context'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Notification',
  component: Notification,
  subcomponents: { NotificationCard },
  decorators: [withDesign],
} as ComponentMeta<typeof Notification>

const defaultArgs: Partial<NotificationProps> = {
  max: 2,
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
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
      footer: (new Date()).toISOString()
    })
  }, [noti])

  return (
    <button onClick={handleAddNotification}>Add Notification</button>
  )
}

const Template: ComponentStory<typeof Notification> = (args) => {
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
