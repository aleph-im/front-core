import React, { useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'

import Dropdown from './cmp'
import { DropdownProps } from './types'
import DropdownOption from '../DropdownOption'
import Icon, { IconName } from '../../common/Icon'

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
  const icons: IconName[] = [
    'user',
    'house',
    'twitter',
    'image',
    'phone',
  ] as any[]
  const options: [string, string, IconName][] = Array.from(
    { length: icons.length },
    (_, i) => [`${i}`, `Option ${i}`, icons[i]],
  )

  const [selectedIds, setSelectedIds] = useState<string | string[] | undefined>(
    args.value,
  )

  const handleChange = useCallback(
    (value: string | string[]) => {
      setSelectedIds(value)
    },
    [setSelectedIds],
  )

  const selectedOptions = useMemo(() => {
    if (!selectedIds) return

    const optsMap = new Map(Object.values(options).map((v) => [v[0], v]))

    if (typeof selectedIds === 'string') {
      return optsMap.get(selectedIds)
    } else {
      return selectedIds.map((s) => optsMap.get(s))
    }
  }, [options, selectedIds])

  return (
    <>
      <Dropdown {...args} value={selectedIds} onChange={handleChange} tw="mb-5">
        {options.map(([id, label, icon]) => (
          <DropdownOption key={id} value={id}>
            <Icon name={icon} tw="mr-2" /> {label}
          </DropdownOption>
        ))}
      </Dropdown>
      <br />
      <button onClick={() => handleChange('')}>Reset value</button>
      <br />
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

// ---

export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true,
}
Disabled.parameters = {
  ...defaultParams,
}

// -------------------

const ScrollTemplate: StoryFn<typeof Dropdown> = (args) => {
  return (
    <div tw="overflow-auto h-80 bg-black px-6 py-20">
      <p tw="my-6">Scrollable container...</p>
      <Template {...args} />
    </div>
  )
}

// ---

export const Scroll = ScrollTemplate.bind({})
Scroll.args = {
  ...defaultArgs,
}
Scroll.parameters = {
  ...defaultParams,
}
