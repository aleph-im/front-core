import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import CodeEditor from './cmp'
import { CodeEditorProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/CodeEditor',
  component: CodeEditor,
  decorators: [withDesign],
} as ComponentMeta<typeof CodeEditor>

const defaultArgs: Partial<CodeEditorProps> = {
  placeholder: 'Placeholder',
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
const Template: ComponentStory<typeof CodeEditor> = (args) => {
  const [value, setValue] = useState<string>(args.value as string)

  return (
    <>
      <CodeEditor
        {...args}
        value={value}
        onChange={(v) => setValue(v || '')}
      />
      <h6 className='my-md'>value:</h6>
      <pre>{value}</pre>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
  value: `// This is an example

function sayHello() {
  console.log("Hello!")
}

sayHello();
`
}
Default.parameters = {
  ...defaultParams,
}
