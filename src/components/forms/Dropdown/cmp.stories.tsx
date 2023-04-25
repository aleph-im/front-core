import React, { useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import Dropdown from './cmp'
import { DropdownProps } from './types'
import DropdownOption from '../DropdownOption'
import Icon from '../../Icon'
import { IconName } from '@fortawesome/fontawesome-svg-core'

export default {
  title: 'Components/UI/forms/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownOption },
}

const defaultArgs: Partial<DropdownProps> = {
  label: 'Dropdown an option',
  value: '2',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof Dropdown> = (args) => {
  const icons: IconName[] = ['user', 'house', 'twitter', 'image', 'phone']
  const options: [string, string, IconName][] = Array.from(
    { length: icons.length },
    (_, i) => [`${i}`, `Option ${i}`, icons[i]],
  )

  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(args.value as string | string[]),
  )

  const handleChange = useCallback(
    (value: string | string[]) => {
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
      <Dropdown {...args} onChange={handleChange} tw="mb-5">
        {options.map(([id, label, icon]) => (
          <DropdownOption key={id} value={id}>
            <Icon name={icon} tw="mr-2" /> {label}
          </DropdownOption>
        ))}
      </Dropdown>
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
  label: 'Dropdown multiple options',
  multiple: true,
  value: ['1', '2'],
}
Multiselect.parameters = {
  ...defaultParams,
}
