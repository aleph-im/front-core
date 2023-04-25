import React from 'react'
import { StoryFn } from '@storybook/react'
import { BulletItem, BulletList } from './cmp'
import { BulletListProps } from './types'

export default {
  title: 'Components/UI/BulletList',
  component: BulletList,
  subcomponents: { BulletItem },
}

const defaultArgs: Partial<BulletListProps> = {
  size: 'big',
}

// ---

const Template: StoryFn<typeof BulletList> = (args) => (
  <>
    <BulletList {...args} />
  </>
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
  items: [
    { kind: 'check', title: 'bullet-item-1' },
    { kind: 'check', title: 'bullet-item-2', text: 'Lorem ipsum' },
    { kind: 'success', title: 'bullet-item-3' },
    { kind: 'success', title: 'bullet-item-4', text: 'Lorem ipsum' },
    { kind: 'warning', title: 'bullet-item-5' },
    { kind: 'warning', title: 'bullet-item-6', text: 'Lorem ipsum' },
    { kind: 'error', title: 'bullet-item-7' },
    { kind: 'error', title: 'bullet-item-8', text: 'Lorem ipsum' },
  ],
}
Default.parameters = {
  controls: { exclude: ['color'] },
}
