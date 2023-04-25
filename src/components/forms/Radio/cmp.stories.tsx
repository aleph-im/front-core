import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import Radio from './cmp'
import { RadioProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/Radio',
  component: Radio,
}

const defaultArgs: Partial<RadioProps> = {
  label: 'Select an option',
  name: 'group',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof Radio> = (args) => {
  const options: [string, string][] = [
    ['1', 'Option 1'],
    ['2', 'Option 2'],
    ['3', 'Option 3'],
  ]

  const [selectedId, setSelectedId] = useState<string>(options[0][0])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const id = event.target.value
      setSelectedId(id)
    },
    [setSelectedId],
  )

  const selectedOption = useMemo(
    () => options.find(([k]) => k === selectedId),
    [options, selectedId],
  )

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
            tw="mb-5"
          />
        )
      })}
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

// ---

export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true,
}
Disabled.parameters = {
  ...defaultParams,
}
