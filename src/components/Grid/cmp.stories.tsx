import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Row, Col } from './cmp'
import { defaultCount, RowProps } from './types'

export default {
  title: 'Components/UI/Grid',
  component: Row,
  subcomponents: { Col },
  decorators: [withDesign],
  argTypes: {
    count: { control: { type: 'range', min: 1, max: 16, step: 1 } },
  },
} as ComponentMeta<typeof Row>

const defaultArgs: Partial<RowProps> = {
  count: defaultCount,
  gap: '1rem',
}

// ---

const colStyle = {
  backgroundColor: 'red',
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
}

const Template: ComponentStory<typeof Row> = (args) => (
  <>
    <h1>Regular span blocks (size=3)</h1>
    <Row {...args}>
      {Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
        <Col span={3} key={i}>
          <div style={colStyle}>{i}</div>
        </Col>
      ))}
    </Row>

    <h1>Regular span blocks (size=1)</h1>
    <Row {...args}>
      {Array.from({ length: args.count || defaultCount }, (_, i) => i + 1).map(
        (i) => (
          <Col span={1} key={i}>
            <div style={colStyle}>{i}</div>
          </Col>
        ),
      )}
    </Row>

    <h1>Custom offset blocks</h1>
    <Row {...args}>
      <Col span={2} offset={3}>
        <div style={colStyle}>1</div>
      </Col>
      <Col span={4} offset={7}>
        <div style={colStyle}>2</div>
      </Col>
    </Row>

    <h1>Irregular span blocks</h1>
    <Row {...args}>
      <Col span={4}>
        <div style={colStyle}>1</div>
      </Col>
      <Col span={8}>
        <div style={colStyle}>2</div>
      </Col>
    </Row>
  </>
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
