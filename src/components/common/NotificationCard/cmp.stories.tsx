import React from 'react'
import { StoryFn } from '@storybook/react'

import NotificationCard from './cmp'
import { NotificationCardProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/NotificationCard',
  component: NotificationCard,
}

const defaultArgs: Partial<NotificationCardProps> = {
  title: 'Information',
  variant: 'success',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis',
  detail: 'Lorem ipsum dolor sit amet',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof NotificationCard> = (args) => (
  <NotificationCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

export const Transcluded = Template.bind({})
Transcluded.args = {
  ...defaultArgs,
  header: <header className="tp-h2">Transcluded header</header>,
  content: <div>Transcluded content</div>,
  footer: (
    <span>
      <strong>Error#520:</strong> “No dependency volume defined.”
    </span>
  ),
}
Transcluded.parameters = {
  ...defaultParams,
}
