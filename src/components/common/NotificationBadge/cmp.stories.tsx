import React from 'react'
import { StoryFn } from '@storybook/react'

import NotificationBadge from './cmp'
import { NotificationBadgeProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/NotificationBadge',
  component: NotificationBadge,
}

const defaultArgs: Partial<NotificationBadgeProps> = {
  variant: 'success',
  children: '1',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof NotificationBadge> = (args) => (
  <NotificationBadge {...args} />
)

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
