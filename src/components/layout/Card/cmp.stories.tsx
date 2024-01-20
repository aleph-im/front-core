import React from 'react'
import { StoryFn } from '@storybook/react'

import Card from './cmp'
import { CardProps } from './types'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/layout/Card',
  component: Card,
}

const defaultArgs: Partial<CardProps> = {
  title: 'Title in one line',
  variant: 'block',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis, quam quis vehicula pulvinar.',
  buttonLabel: 'See the subject',
  buttonColor: 'main0',
  buttonVariant: 'secondary',
  buttonDisabled: false,
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof Card> = (args) => (
  <div style={{ width: 400 }}>
    <Card {...args} />
  </div>
)

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
  buttonVariant: 'primary',
}
Custom.parameters = {
  ...defaultParams,
}

// ---

export const Transcluded = Template.bind({})
Transcluded.args = {
  ...defaultArgs,
  header: (
    <>
      <header className="tp-h7">Transcluded card header</header>
    </>
  ),
  content: (
    <>
      <p>Transcluded card content</p>
    </>
  ),
  footer: (
    <div>
      <Button
        variant="textOnly"
        kind="neon"
        size="md"
        color="main1"
        onClick={() => alert('1')}
      >
        Button 1 <Icon name="arrow-right" />
      </Button>
      <Button
        variant="textOnly"
        kind="neon"
        size="md"
        color="main2"
        onClick={() => alert('2')}
      >
        Button 2 <Icon name="arrow-right" />
      </Button>
    </div>
  ),
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
  title: 'A Case study on 2 lines',
}
Article.parameters = {
  ...defaultParams,
}
