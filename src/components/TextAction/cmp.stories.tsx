import React from 'react'
import { StoryFn } from '@storybook/react'
import { TextAction } from './cmp'
import { TextActionProps } from './types'
import { useClipboard } from '../../hooks/useCopyToClipboard'

export default {
  title: 'Components/UI/TextAction',
  component: TextAction,
  argTypes: {
    size: { control: 'text' },
  },
}

const defaultArgs: TextActionProps = {
  icon: 'copy',
  size: 14,
  content: 'e03b28d01a3a8e7cbb2f9bafbaa58d9dbdf7c75906a01b075890ad06ddc670',
  position: 'left',
  type: 'body1',
  color: 'white',
  useAction: async () => useClipboard(defaultArgs.content),
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qNnjyRzhXcmj6nwbL9XP5K/ALEPH-Cloud-Website?node-id=348-8307&t=U6S2A1qWUAiWK4b1-4',
  },
}

// ---

const Template: StoryFn<typeof TextAction> = (args) => (
  <>
    <TextAction {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
