import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import SwitchGroup from './cmp'
import { SwitchGroupProps, SwitchGroupValue } from './types'
import Switch from '../Switch/cmp'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/SwitchGroup',
  component: SwitchGroup,
  subcomponents: { Switch },
}

const defaultArgs: Partial<SwitchGroupProps> = {
  label: 'Select an option',
  error: undefined,
  direction: 'row',
  value: ['1', '2'],
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof SwitchGroup> = (args) => {
  const options: [string, string][] = useMemo(
    () => [
      ['1', 'Option 1'],
      ['2', 'Option 2'],
      ['3', 'Option 3'],
    ],
    [],
  )
  const [selectedIds, setSelectedIds] = useState<Set<SwitchGroupValue>>(
    new Set(args.value as string[]),
  )

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, groupValue: SwitchGroupValue[]) => {
      setSelectedIds(new Set(groupValue))
    },
    [setSelectedIds],
  )

  const selectedOption = useMemo(
    () => options.filter(([k]) => selectedIds.has(k)),
    [options, selectedIds],
  )

  return (
    <>
      <SwitchGroup {...args} name={args.name} onChange={handleChange}>
        {options.map((opt) => {
          const [id, label] = opt
          return <Switch key={id} label={label} value={id} />
        })}
      </SwitchGroup>
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
