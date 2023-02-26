import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { StoryBookHeader, StoryBookSubheader } from './utils'

export default {
  title: 'Design/Atoms/Responsive',
  decorators: [withDesign],
} as ComponentMeta<any>

const defaultArgs: Partial<any> = {}

const defaultParams = {
  design: {
    tpe: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A276&t=OG6V4eRdvQIurCbK-0',
  },
}

// ---

const ResponsiveTemplate: ComponentStory<any> = (args) => {
  return (
    <div>
      <StoryBookHeader>Responsive Styles</StoryBookHeader>
      <div>
        <StoryBookSubheader>Margins</StoryBookSubheader>
        <span className="tp-h7">margin xs</span>
        <span className="tp-h7">H7 - Rubik - headers</span>
      </div>
    </div>
  )
}

export const Responsive = ResponsiveTemplate.bind({})
Responsive.args = {
  ...defaultArgs,
}
Responsive.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true },

}
