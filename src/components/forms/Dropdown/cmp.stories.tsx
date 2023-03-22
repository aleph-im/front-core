import React, { useCallback, useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Dropdown from './cmp'
import { DropdownProps } from './types'
import DropdownOption from '../DropdownOption'
import Icon from '../../Icon'
import { IconName } from '@fortawesome/fontawesome-svg-core'

export default {
  title: 'Components/UI/forms/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownOption },
  decorators: [withDesign],
} as ComponentMeta<typeof Dropdown>

const defaultArgs: Partial<DropdownProps> = {
  label: 'Dropdown an option',
  value: '2',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1-2798&t=Qt8UENnYwvwhgsQQ-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const icons: IconName[] = ['user', 'house', 'twitter', 'image', 'phone']
  const options: [string, string, IconName][] = Array.from({ length: icons.length }, (_, i) => [`${i}`, `Option ${i}`, icons[i]])

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(args.value as string | string[]))

  const handleChange = useCallback((value: string | string[]) => {
    setSelectedIds(new Set(value))
  }, [setSelectedIds])

  const selectedOptions = useMemo(() => options.filter(([k]) => selectedIds.has(k)), [options, selectedIds])

  return (
    <>
      <Dropdown
        {...args}
        onChange={handleChange}
        className="mb-md"
      >
        {options.map(([id, label, icon]) => (
          <DropdownOption
            key={id}
            value={id}
          >
            <Icon name={icon} className="mr-xxs" /> {label}
          </DropdownOption>
        ))}
      </Dropdown>
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
  label: 'Dropdown multiple options',
  multiple: true,
  value: ['1', '2'],
}
Multiselect.parameters = {
  ...defaultParams,
}
