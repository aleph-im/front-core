import React, { useCallback, useMemo, useState } from 'react'
import { StoryFn } from '@storybook/react'
import Table from './cmp'
import { TableBorderType, TableColumn, TableProps } from './types'
import { data, MockDataRow, Pets } from './fixture/data'
import Icon from '../../common/Icon'

export default {
  title: 'Components/UI/layout/Table',
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
      label: 'Age',
      render: (row: MockDataRow) => row.age,
      sortable: true,
      align: 'right',
    },
    {
      label: 'Age',
      render: (row: MockDataRow) => row.age,
      sortable: true,
      align: 'right',
    },
    {
      label: 'Age',
      render: (row: MockDataRow) => row.age,
      sortable: true,
      align: 'right',
    },
    {
      label: 'Age',
      render: (row: MockDataRow) => row.age,
      sortable: true,
      align: 'right',
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
  ] as TableColumn<any>[],
}

const stickyDataArgs = {
  data,
  columns: [
    {
      label: 'Name',
      sticky: 'start',
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
      sticky: 'end',
    },
  ] as TableColumn<any>[],
}

const defaultArgs: TableProps<any> = {
  borderType: 'dashed' as TableBorderType,
  rowNoise: true,
  stickyHeader: false,
  ...dataArgs,
  rowProps: (row, i) => ({
    onClick: () => {
      alert(`row click ${i}`)
    },
  }),
}

const stickyTableArgs: TableProps<any> = {
  stickyHeader: true,
  borderType: 'dashed' as TableBorderType,
  rowNoise: true,
  ...stickyDataArgs,
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

export const EmptyPlaceholder = Template.bind({})
EmptyPlaceholder.args = {
  ...defaultArgs,
  emptyPlaceholder: <div>No data</div>,
  data: [],
}
EmptyPlaceholder.parameters = {
  ...defaultParams,
}

// ---

export const StickyTable = Template.bind({})
StickyTable.args = {
  ...stickyTableArgs,
}

// ---

const Template2: StoryFn<typeof Table> = (args) => {
  const [data, setData] = useState(args.data || [])
  const infiniteScroll = useMemo(() => data.length <= 100, [data])

  const onLoadMore = useCallback(async () => {
    console.log('LOADING...')
    await new Promise((resolve) => {
      setTimeout(resolve, 1000 * 1)
    })

    setData([...data, ...(args.data || [])])
  }, [data, args.data])

  return (
    <Table
      {...{
        ...args,
        data,
        infiniteScroll,
        onLoadMore,
      }}
    />
  )
}

export const InfiniteScroll = Template2.bind({})
InfiniteScroll.args = {
  ...defaultArgs,
}
InfiniteScroll.parameters = {
  ...defaultParams,
}
