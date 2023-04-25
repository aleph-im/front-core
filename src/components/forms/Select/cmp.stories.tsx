import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import Select from './cmp'
import { SelectProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/Select',
  component: Select,
}

const defaultArgs: Partial<SelectProps> = {
  label: 'Select an option',
  value: '2',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof Select> = (args) => {
  const options: [string, string][] = Array.from({ length: 10 }, (_, i) => [
    `${i}`,
    `Option ${i}`,
  ])

  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(args.value as string | string[]),
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>, value: string | string[]) => {
      setSelectedIds(new Set(value))
    },
    [setSelectedIds],
  )

  const selectedOptions = useMemo(
    () => options.filter(([k]) => selectedIds.has(k)),
    [options, selectedIds],
  )

  return (
    <>
      <Select
        {...args}
        options={options.map(([k, v]) => ({ label: v, value: k }))}
        onChange={handleChange}
        tw="mb-5"
      />
      <h6 tw="my-5">value:</h6>
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
