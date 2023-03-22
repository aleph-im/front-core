import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import TextArea from './cmp'
import { TextAreaProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/TextArea',
  component: TextArea,
  decorators: [withDesign],
} as ComponentMeta<typeof TextArea>

const defaultArgs: Partial<TextAreaProps> = {
  name: 'text-area',
  placeholder: 'Placeholder',
  value: ''
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qNnjyRzhXcmj6nwbL9XP5K/ALEPH-Cloud-Website?node-id=317%3A6973&t=Q7NxYTLQFhG5jH6c-0',
  },
  controls: { exclude: ['color', 'size', 'name', 'button'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState<string>(args.value as string)

  return (
    <>
      <TextArea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h6 className='my-md'>value:</h6>
      <pre>{value}</pre>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}