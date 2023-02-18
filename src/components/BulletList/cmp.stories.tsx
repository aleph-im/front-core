import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BulletItem, BulletList } from './cmp'
import { BulletListProps } from './types'

export default {
  title: 'Components/UI/BulletList',
  component: BulletList,
  subcomponents: { BulletItem },
  decorators: [withDesign],
} as ComponentMeta<typeof BulletList>

const defaultArgs: Partial<BulletListProps> = {
  size: 'big'
}

// ---

const Template: ComponentStory<typeof BulletList> = (args) => (
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
    { kind: 'check2', title: 'bullet-item-3' },
    { kind: 'check2', title: 'bullet-item-4', text: 'Lorem ipsum' },
    { kind: 'error', title: 'bullet-item-5' },
    { kind: 'error', title: 'bullet-item-6', text: 'Lorem ipsum' },
  ]
}
Default.parameters = {
  controls: { exclude: ['color'] }
}

