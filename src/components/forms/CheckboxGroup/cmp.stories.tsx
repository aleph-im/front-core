import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import CheckboxGroup from './cmp'
import { CheckboxGroupProps, CheckboxGroupValue } from './types'
import Checkbox from '../Checkbox/cmp'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/CheckboxGroup',
  component: CheckboxGroup,
  subcomponents: { Checkbox },
  decorators: [withDesign],
} as ComponentMeta<typeof CheckboxGroup>

const defaultArgs: Partial<CheckboxGroupProps> = {
  label: 'Select an option',
  error: undefined,
  direction: 'row',
  value: ['1', '2'],
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: ComponentStory<typeof CheckboxGroup> = (args) => {
  const options: [string, string][] = [
    ['1', 'Option 1'],
    ['2', 'Option 2'],
    ['3', 'Option 3']
  ]

  const [selectedIds, setSelectedIds] = useState<Set<CheckboxGroupValue>>(new Set(args.value as string[]))

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>, groupValue: CheckboxGroupValue[]) => {
    setSelectedIds(new Set(groupValue))
  }, [setSelectedIds])

  const selectedOption = useMemo(() => options.filter(([k]) => selectedIds.has(k)), [options, selectedIds])

  return (
    <>
      <CheckboxGroup
        {...args}
        name={args.name}
        onChange={handleChange}
      >
        {options.map((opt) => {
          const [id, label] = opt
          return (
            <Checkbox
              key={id}
              label={label}
              value={id}
            />)
        })}
      </CheckboxGroup>
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
