import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from 'storybook-addon-designs'
import { StoryBookHeader, StoryBookSubheader } from "./utils";

export default {
  title: "Design/Atoms/Typography",
  decorators: [withDesign],
} as ComponentMeta<any>;

const defaultArgs: Partial<any> = {
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A276&t=OG6V4eRdvQIurCbK-0',
  },
}

// --- 

const TypographyTemplate: ComponentStory<any> = (args) => {
  return (
    <>
      <StoryBookHeader>Typography</StoryBookHeader>
      <div>
        <StoryBookSubheader>Headers</StoryBookSubheader>
        <h1>H1 - Rubik - headers</h1>
        <h2>H2 - Rubik - headers</h2>
        <h3>H3 - Rubik - headers</h3>
        <h4>H4 - Rubik - headers</h4>
        <h5>H5 - Rubik - headers</h5>
        <h6>H6 - Rubik - headers</h6>
        <span className="typ-h7">H7 - Rubik - headers</span>
      </div>
    </>
  )
};

export const Typography = TypographyTemplate.bind({})
Typography.args = {
  ...defaultArgs
};
Typography.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true }
}