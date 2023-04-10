import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import ObjectImg from './cmp'
import { ObjectId, ObjectImgProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/ObjectImg',
  component: ObjectImg,
  decorators: [withDesign],
  argTypes: {
    size: { control: 'text' },
    id: { control: 'select' }
  }
} as ComponentMeta<typeof ObjectImg>

const defaultArgs: Partial<ObjectImgProps> = {
  id: 'Object1',
  size: '100px'
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1226&t=XeMPIFw7c4dnGQr1-0',
  },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof ObjectImg> = (args) => <ObjectImg {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

const Template2: ComponentStory<typeof ObjectImg> = (args) => {
  const all = Array.from({ length: 19 })

  return (
    <>
      {all.map((_, i) => {
        const id = `Object${i + 1}` as ObjectId
        return (
          <div key={id} className="d-flex items-center my-xl" >
            <span className='mx-lg'>{id}:</span>
            <ObjectImg {...args} id={id} />
          </div>
        )
      }
      )}
    </>
  )
}

export const Catalog = Template2.bind({})
Catalog.args = {
  ...defaultArgs,
}
Catalog.parameters = {
  ...defaultParams,
}
