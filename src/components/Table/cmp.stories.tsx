import React from 'react'
import { StoryFn } from '@storybook/react'
import Table from './cmp'
import Icon from '../Icon'
import { BorderType, TableProps } from './types'
import { data, MockDataRow, Pets } from './fixture/data'

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

const dataArgs = {
  data,
  columns: [
    {
      label: 'Name',
      selector: (row: MockDataRow) => row.name,
      sortable: true,
      cell: (row: MockDataRow) => (
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
      selector: (row: MockDataRow) => row.age,
      sortable: true,
    },
    {
      label: 'Job',
      selector: (row: MockDataRow) => row.job,
      sortable: false,
    },
    {
      label: 'Number of pets',
      selector: (row: MockDataRow) =>
        Object.values(row.pets as Pets).reduce(
          (acc: number, curr: number): number => acc + curr,
          0,
        ),
      sortable: true,
    },
  ],
}

const defaultArgs: TableProps<any> = {
  borderType: 'dashed' as BorderType,
  oddRowNoise: true,
  ...dataArgs,
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
