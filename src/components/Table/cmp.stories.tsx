import React from 'react'
import { StoryFn } from '@storybook/react'
import Table from './cmp'
import Icon from '../Icon'
import { TableProps } from './types'
import { data, Pets } from './fixture/data'

export default {
  title: 'Components/UI/Table',
  component: Table,
  argTypes: {
    borderType: {
      control: {
        type: 'select',
        options: ['none', 'dashed', 'solid'],
      },
    },
  },
}

const defaultArgs: Partial<TableProps> = {
  borderType: 'dashed',
  oddRowNoise: true,
}

const dataArgs: Partial<TableProps> = {
  data,
  columns: [
    {
      label: 'Name',
      selector: (row: any) => row.name,
      sortable: true,
      cell: (row: any) => (
        <div>
          <strong>{row.name}</strong>
          {row.gender !== 'undisclosed' && (
            <>
              &nbsp;
              <Icon
                name={row.gender === 'female' ? 'venus' : 'mars'}
                color="red"
              />
            </>
          )}
        </div>
      ),
    },
    {
      label: 'Age',
      selector: (row: any) => row.age,
      sortable: true,
    },
    {
      label: 'Job',
      selector: (row: any) => row.job,
      sortable: false,
    },
    {
      label: 'Number of pets',
      selector: (row: any): number =>
        Object.values(row.pets as Pets).reduce(
          (acc: number, curr: number): number => acc + curr,
          0,
        ),
      sortable: true,
    },
  ],
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof Table> = (args) => (
  <Table {...args} {...dataArgs} />
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
