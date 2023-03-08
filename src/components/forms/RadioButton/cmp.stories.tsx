import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import RadioButton from './cmp'
import { RadioButtonProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/RadioButton',
  component: RadioButton,
  decorators: [withDesign],
} as ComponentMeta<typeof RadioButton>

const defaultArgs: Partial<RadioButtonProps> = {
  label: 'Select an option',
  name: 'group',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: ComponentStory<typeof RadioButton> = (args) => {
  const options: [string, string][] = [
    ['Option 1', '1'],
    ['Option 2', '2'],
    ['Option 3', '3']
  ]

  const [selected, setSelected] = useState<[string, string]>(options[0])

  return (
    <>
      {options.map((opt) => {
        const [k, v] = opt

        return (<RadioButton
          {...args}
          key={k}
          label={k}
          value={v}
          checked={v === selected[1]}
          onChange={() => setSelected(opt)}
          className="mb-md"
        />)

      })}

      <pre>selected {JSON.stringify(selected)}</pre>
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

// ---


export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true,
  checked: true,
}
Disabled.parameters = {
  ...defaultParams,
}
