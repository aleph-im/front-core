import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'
import CodeEditor from './cmp'
import { CodeEditorProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/CodeEditor',
  component: CodeEditor,
}

const defaultArgs: Partial<CodeEditorProps> = {
  placeholder: 'Placeholder',
}

const defaultParams = {
  controls: { exclude: ['color', 'size', 'name', 'button'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof CodeEditor> = (args) => {
  const [value, setValue] = useState<string>(args.value as string)

  return (
    <>
      <CodeEditor {...args} value={value} onChange={(v) => setValue(v || '')} />
      <h6 tw="my-5">value:</h6>
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
`,
}
Default.parameters = {
  ...defaultParams,
}
