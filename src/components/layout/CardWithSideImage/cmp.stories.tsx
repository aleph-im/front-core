import React from 'react'
import { StoryFn } from '@storybook/react'

import CardWithSideImage from './cmp'
import { CardWithSideImageProps } from './types'
import TextGradient from '../../common/TextGradient'
import BulletList from '../../common/BulletList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/layout/CardWithSideImage',
  component: CardWithSideImage,
}

const defaultArgs: Partial<CardWithSideImageProps> = {
  children: (
    <>
      <span className="tp-info text-main0">
        SOLANA - ETHEREUM - BNB SMART CHAIN
      </span>
      <TextGradient className="xs:tp-h4 md:tp-h3">
        Developer friendly <br /> Web3 cloud tooling
      </TextGradient>
      <BulletList
        size="big"
        items={[
          {
            kind: 'info',
            title: 'Indexing',
            text: 'Open-source, multi-chain indexing blockchain data.',
          },
          {
            kind: 'info',
            title: 'VRF',
            text: 'Verifiable Random Function for games and on-chain applications.',
          },
          {
            kind: 'info',
            title: 'Custom domains',
            text: 'Host your website with IPFS or on our serveless architecture.',
          },
          {
            kind: 'info',
            title: 'SSH access',
            text: 'Secure way to access and manage servers over an encrypted connection.',
          },
        ]}
      />
    </>
  ),
  imageSrc: 'https://miro.medium.com/max/640/1*pKQZNfHvJEAUBkU9zRAASw.jpeg',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof CardWithSideImage> = (args) => (
  <div>
    <CardWithSideImage {...args} />
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

export const ImageOnRight = Template.bind({})
ImageOnRight.args = {
  ...defaultArgs,
  imagePosition: 'right',
}
ImageOnRight.parameters = {
  ...defaultParams,
}
// ---

export const BiggerImageThanCard = Template.bind({})
BiggerImageThanCard.args = {
  ...defaultArgs,
  cardBackgroundColor: 'bg-base1',
  children: (
    <>
      <span className="tp-info text-main0">
        SOLANA - ETHEREUM - BNB SMART CHAIN
      </span>
      <TextGradient className="xs:tp-h7">
        Developer friendly <br /> Web3 cloud tooling
      </TextGradient>
    </>
  ),
}
BiggerImageThanCard.parameters = {
  ...defaultParams,
}
