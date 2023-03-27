import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import NotificationCard from './cmp'
import { NotificationCardProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/NotificationCard',
  component: NotificationCard,
  decorators: [withDesign],
} as ComponentMeta<typeof NotificationCard>

const defaultArgs: Partial<NotificationCardProps> = {
  title: 'Information',
  variant: 'success',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis',
  detail: 'Lorem ipsum dolor sit amet',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qNnjyRzhXcmj6nwbL9XP5K/ALEPH-Cloud-Website?node-id=1027-24950&t=Ji5keVCp3vrjy7em-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof NotificationCard> = (args) => <NotificationCard {...args} />

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
  header: (
    <header className='tp-h2 m-0'>Transcluded header</header>
  ),
  content: (
    <div className='m-xl'>Transcluded content</div>
  ),
  footer: (
    <span><strong>Error#520:</strong> “No dependency volume defined.”</span>
  )
}
Transcluded.parameters = {
  ...defaultParams,
}
