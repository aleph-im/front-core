import React from 'react'
import { StoryFn } from '@storybook/react'
import Table from './cmp'
import Icon from '../Icon'
import { BorderType, Column, TableProps } from './types'
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
      sortable: true,
      width: '50%',
      sortBy: (row: MockDataRow) => row.name,
      render: (row: MockDataRow) => (
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
      render: (row: MockDataRow) => row.age,
      sortable: true,
      align: 'right',
    },
    {
      label: 'Job',
      render: (row: MockDataRow) => row.job,
      sortable: false,
      align: 'center',
    },
    {
      label: 'Number of pets',
      render: (row: MockDataRow) =>
        Object.values(row.pets as Pets).reduce(
          (acc: number, curr: number): number => acc + curr,
          0,
        ),
      sortable: true,
      align: 'right',
    },
  ] as Column<any>[],
}

const defaultArgs: TableProps<any> = {
  borderType: 'dashed' as BorderType,
  oddRowNoise: true,
  ...dataArgs,
  rowProps: (row, i) => ({
    onClick: () => {
      alert(`row click ${i}`)
    },
  }),
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
