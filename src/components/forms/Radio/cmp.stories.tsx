import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Radio from './cmp'
import { RadioProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/Radio',
  component: Radio,
  decorators: [withDesign],
} as ComponentMeta<typeof Radio>

const defaultArgs: Partial<RadioProps> = {
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

const Template: ComponentStory<typeof Radio> = (args) => {
  const options: [string, string][] = [
    ['1', 'Option 1'],
    ['2', 'Option 2'],
    ['3', 'Option 3']
  ]

  const [selectedId, setSelectedId] = useState<string>(options[0][0])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value
    setSelectedId(id)
  }, [setSelectedId])

  const selectedOption = useMemo(() => options.find(([k]) => k === selectedId), [options, selectedId])

  return (
    <>
      {options.map((opt) => {
        const [id, label] = opt
        return (
          <Radio
            {...args}
            key={id}
            label={label}
            value={id}
            defaultChecked={id === selectedId}
            onChange={handleChange}
            className="mb-md"
          />)
      })}
      <h6 className='my-md'>value:</h6>
      <pre>{JSON.stringify(selectedOption, null, 2)}</pre>
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
}
Disabled.parameters = {
  ...defaultParams,
}
