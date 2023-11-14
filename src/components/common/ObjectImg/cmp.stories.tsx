import React from 'react'
import { StoryFn } from '@storybook/react'

import ObjectImg from './cmp'
import { ObjectId, ObjectImgProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/ObjectImg',
  component: ObjectImg,
  argTypes: {
    size: { control: 'text' },
    id: { control: 'select' },
  },
}

const defaultArgs: Partial<ObjectImgProps> = {
  id: 'Object1',
  size: '100px',
}

const defaultParams = {}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof ObjectImg> = (args) => <ObjectImg {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

const Template2: StoryFn<typeof ObjectImg> = (args) => {
  const all = Array.from({ length: 19 })

  return (
    <>
      {all.map((_, i) => {
        const id = `Object${i + 1}` as ObjectId
        return (
          <div key={id} tw="flex items-center my-7">
            <span tw="mx-6">{id}:</span>
            <ObjectImg {...args} id={id} />
          </div>
        )
      })}
    </>
  )
}

export const Catalog = Template2.bind({})
Catalog.args = {
  ...defaultArgs,
}
Catalog.parameters = {
  ...defaultParams,
}
