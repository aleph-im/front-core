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
  disabled: false,
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

  const [value, setValue] = useState<undefined | string | string[]>(args.value)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>, value: string | string[]) => {
      setValue(value)
    },
    [setValue],
  )

  const selectedOptions = useMemo(
    () => options.filter(([k]) => value?.includes(k)),
    [options, value],
  )

  return (
    <>
      <Select
        {...args}
        options={options.map(([k, v]) => ({ label: v, value: k }))}
        onChange={handleChange}
        value={value}
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

// ---

export const WithError = Template.bind({})
WithError.args = {
  ...defaultArgs,
  error: new Error('Boom'),
}
WithError.parameters = {
  ...defaultParams,
}
