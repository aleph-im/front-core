import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import RadioGroup from './cmp'
import { RadioGroupProps } from './types'
import Radio from '../Radio/cmp'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/RadioGroup',
  component: RadioGroup,
  subcomponents: { Radio },
  decorators: [withDesign],
} as ComponentMeta<typeof RadioGroup>

const defaultArgs: Partial<RadioGroupProps> = {
  label: 'Select an option',
  error: undefined,
  direction: 'row',
  name: 'group-1',
  defaultValue: '2',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  const options: [string, string][] = [
    ['1', 'Option 1'],
    ['2', 'Option 2'],
    ['3', 'Option 3']
  ]

  const [selectedId, setSelectedId] = useState<string>(args.defaultValue as string)

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value
    setSelectedId(id)
  }, [setSelectedId])

  const selectedOption = useMemo(() => options.find(([k]) => k === selectedId), [options, selectedId])

  return (
    <>
      <RadioGroup
        {...args}
        name={args.name}
        value={args.value}
        onChange={handleChange}
      >
        {options.map((opt) => {
          const [id, label] = opt
          return (
            <Radio
              key={id}
              label={label}
              value={id}
            />)
        })}
      </RadioGroup>

      <pre className='mt-md'>
        selected {JSON.stringify(selectedOption)}
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
