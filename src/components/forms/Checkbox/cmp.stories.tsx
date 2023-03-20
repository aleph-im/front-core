import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Checkbox from './cmp'
import { CheckboxProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/Checkbox',
  component: Checkbox,
  decorators: [withDesign],
} as ComponentMeta<typeof Checkbox>

const defaultArgs: Partial<CheckboxProps> = {
  label: 'Select multiple options',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const options: [string, string][] = [
    ['1', 'Option 1'],
    ['2', 'Option 2'],
    ['3', 'Option 3']
  ]

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(options[0][0]))

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value

    selectedIds.has(id)
      ? selectedIds.delete(id)
      : selectedIds.add(id)

    setSelectedIds(new Set(selectedIds))
  }, [selectedIds, setSelectedIds])

  const selectedOptions = useMemo(() => Object.fromEntries(options.filter(([k]) => selectedIds.has(k))), [options, selectedIds])

  return (
    <>
      {options.map((opt) => {
        const [id, label] = opt
        return (
          <Checkbox
            {...args}
            key={id}
            label={label}
            value={id}
            defaultChecked={selectedIds.has(id)}
            onChange={handleChange}
            className="mb-md"
          />)
      })}
      <h6 className='my-md'>value:</h6>
      <pre>{JSON.stringify(selectedOptions, null, 2)}</pre>
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
