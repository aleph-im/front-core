import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Select from './cmp'
import { SelectProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/Select',
  component: Select,
  decorators: [withDesign],
} as ComponentMeta<typeof Select>

const defaultArgs: Partial<SelectProps> = {
  label: 'Select an option',
  value: '2',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: ComponentStory<typeof Select> = (args) => {
  const options: [string, string][] = Array.from({ length: 10 }, (_, i) => [`${i}`, `Option ${i}`])

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(args.value as string | string[]))

  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>, value: string | string[]) => {
    console.log('CHANGE', value)
    setSelectedIds(new Set(value))
  }, [setSelectedIds])

  const selectedOptions = useMemo(() => options.filter(([k]) => selectedIds.has(k)), [options, selectedIds])

  return (
    <>
      <Select
        {...args}
        options={options.map(([k, v]) => ({ label: v, value: k }))}
        onChange={handleChange}
        className="mb-md"
      />
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

export const Multiselect = Template.bind({})
Multiselect.args = {
  ...defaultArgs,
  label: 'Select multiple options',
  multiple: true,
  value: ['1', '2'],
}
Multiselect.parameters = {
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
