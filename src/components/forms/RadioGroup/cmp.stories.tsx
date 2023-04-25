import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import RadioGroup from './cmp'
import { RadioGroupProps } from './types'
import Radio from '../Radio/cmp'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/RadioGroup',
  component: RadioGroup,
  subcomponents: { Radio },
}

const defaultArgs: Partial<RadioGroupProps> = {
  label: 'Select an option',
  error: undefined,
  direction: 'row',
  name: 'group-1',
  value: '2',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof RadioGroup> = (args) => {
  const options: [string, string][] = [
    ['1', 'Option 1'],
    ['2', 'Option 2'],
    ['3', 'Option 3'],
  ]

  const [selectedId, setSelectedId] = useState<string>(args.value as string)

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
      <RadioGroup
        {...args}
        name={args.name}
        value={args.value}
        onChange={handleChange}
      >
        {options.map((opt) => {
          const [id, label] = opt
          return <Radio key={id} label={label} value={id} />
        })}
      </RadioGroup>
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
