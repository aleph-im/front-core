import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import RadioButtonGroup from './cmp'
import { RadioButtonGroupProps } from './types'
import RadioButton from '../RadioButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/RadioButtonGroup',
  component: RadioButtonGroup,
  subcomponents: { RadioButton },
  decorators: [withDesign],
} as ComponentMeta<typeof RadioButtonGroup>

const defaultArgs: Partial<RadioButtonGroupProps> = {
  label: 'Select an option',
  error: undefined,
  direction: 'row'
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => {
  const options: [string, string][] = [
    ['Option 1', '1'],
    ['Option 2', '2'],
    ['Option 3', '3']
  ]

  const [selected, setSelected] = useState<[string, string]>(options[0])

  return (
    <>
      <RadioButtonGroup {...args}>
        {options.map((opt) => {
          const [k, v] = opt

          return (
            <RadioButton
              name=''
              key={k}
              label={k}
              value={v}
              checked={v === selected[1]}
              onChange={() => setSelected(opt)}
            />)
        })}
      </RadioButtonGroup>

      <pre className='mt-md'>
        selected {JSON.stringify(selected)}
      </pre>
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
