import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import Checkbox from './cmp'
import { CheckboxProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'inline-radio' },
    },
  },
}

const defaultArgs: Partial<CheckboxProps> = {
  name: 'name',
  size: 'md',
}

const defaultParams = {
  controls: { exclude: ['color'] },
}

// ---

const Template: StoryFn<typeof Checkbox> = (args) => {
  const options: [string, string][] = useMemo(
    () => [
      ['1', 'Option 1'],
      ['2', 'Option 2'],
      ['3', 'Option 3'],
    ],
    [],
  )

  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(options[0][0]),
  )

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const id = event.target.value

      selectedIds.has(id) ? selectedIds.delete(id) : selectedIds.add(id)

      setSelectedIds(new Set(selectedIds))
    },
    [selectedIds, setSelectedIds],
  )

  const selectedOptions = useMemo(
    () => Object.fromEntries(options.filter(([k]) => selectedIds.has(k))),
    [options, selectedIds],
  )

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
            tw="mb-5"
          />
        )
      })}
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

export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true,
}
Disabled.parameters = {
  ...defaultParams,
}
