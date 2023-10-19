import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import CheckboxGroup from './cmp'
import { CheckboxGroupProps, CheckboxGroupValue } from './types'
import Checkbox from '../Checkbox/cmp'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/CheckboxGroup',
  component: CheckboxGroup,
  subcomponents: { Checkbox },
}

const defaultArgs: Partial<CheckboxGroupProps> = {
  label: 'Select an option',
  error: undefined,
  direction: 'row',
  value: ['1', '2'],
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof CheckboxGroup> = (args) => {
  const options: [string, string][] = useMemo(
    () => [
      ['1', 'Option 1'],
      ['2', 'Option 2'],
      ['3', 'Option 3'],
    ],
    [],
  )

  const [value, setValue] = useState<string[]>(args.value as string[])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, groupValue: CheckboxGroupValue[]) =>
      setValue(groupValue as string[]),
    [setValue],
  )

  const selectedIds = useMemo(() => new Set(value), [value])

  const selectedOption = useMemo(
    () => options.filter(([k]) => selectedIds.has(k)),
    [options, selectedIds],
  )

  return (
    <>
      <CheckboxGroup
        {...args}
        name={args.name}
        value={value}
        onChange={handleChange}
      >
        {options.map((opt) => {
          const [id, label] = opt
          return <Checkbox key={id} label={label} value={id} />
        })}
      </CheckboxGroup>
      <h6 tw="my-5">value:</h6>
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
