import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Card from './cmp'
import { CardProps } from './types'
import Button from '../Button'
import Icon from '../Icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Card',
  component: Card,
  decorators: [withDesign],
} as ComponentMeta<typeof Card>

const defaultArgs: Partial<CardProps> = {
  title: 'Title in one line',
  variant: 'block',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis, quam quis vehicula pulvinar.',
  buttonLabel: 'See the subject',
  buttonColor: 'main0',
  buttonVariant: 'secondary',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof Card> = (args) => <div style={{ width: 400 }}><Card {...args} /></div>

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

export const Custom = Template.bind({})
Custom.args = {
  ...defaultArgs,
  headerImg: 'Object2',
  buttonColor: 'main1',
  buttonVariant: 'primary'
}
Custom.parameters = {
  ...defaultParams,
}

// ---

export const Transcluded = Template.bind({})
Transcluded.args = {
  ...defaultArgs,
  header: (
    <><header className='tp-h7 m-0'>Transcluded card header</header></>
  ),
  content: (
    <><p className='m-0'>Transcluded card content</p></>
  ),
  footer: (
    <div style={{ marginLeft: '-22px' }}>
      <Button
        className='mx-0'
        variant="text-only"
        kind="neon"
        size="regular"
        color="main1"
        label={<>Button 1<Icon name='arrow-right' /></>}
        onClick={() => alert('1')}
      />
      <Button
        className='mx-0 my-xs'
        variant="text-only"
        kind="neon"
        size="regular"
        color="main2"
        label={<>Button 2<Icon name='arrow-right' /></>}
        onClick={() => alert('2')}
      />
    </div>
  )
}
Transcluded.parameters = {
  ...defaultParams,
}

// ---

export const Article = Template.bind({})
Article.args = {
  ...defaultArgs,
  variant: 'article',
  headerImg: 'https://miro.medium.com/max/640/1*pKQZNfHvJEAUBkU9zRAASw.jpeg',
  buttonColor: 'main1',
  titleInfo: 'CASE STUDY',
  title: 'A Case study on 2 lines'

}
Article.parameters = {
  ...defaultParams,
}
