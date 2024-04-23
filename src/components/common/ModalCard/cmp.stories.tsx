import React from 'react'
import { StoryFn } from '@storybook/react'

import ModalCard from './cmp'
import { ModalCardProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/ModalCard',
  component: ModalCard,
}

const defaultArgs: Partial<ModalCardProps> = {
  title: 'Modal header',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis 0x9318d7bb1be054cd500f7341dce588f087cdf8f818972b61e3d902018d4251d6',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof ModalCard> = (args) => <ModalCard {...args} />

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
