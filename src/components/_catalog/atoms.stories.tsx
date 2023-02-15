import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from 'storybook-addon-designs'
import styled from "styled-components";

export default {
  title: "Design/Atoms/Colors",
  decorators: [withDesign],
} as ComponentMeta<any>;

const defaultArgs: Partial<any> = {
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A741&t=jFufZWoGIyZ8Gzf5-0',
  },
}

// --- 

const Circle = styled.div`
  width: 192px;
  height: 192px;
  border-radius: 50%;
  margin: 10px 24px;
  display: inline-block;
`

const CatalogTemplate: ComponentStory<any> = (args) => {

  return (
    <>
      <h1>Colors</h1>
      <div>
        <h3>Base</h3>
        <Circle className="bg-base0"></Circle>
        <Circle className="bg-base1" style={{ border: '1px solid #FFFFFF' }}></Circle>
        <Circle className="bg-base2"></Circle>
      </div>
      <div>
        <h3>Flat-main</h3>
        <Circle className="bg-main0"></Circle>
        <Circle className="bg-main1"></Circle>
        <Circle className="bg-main2"></Circle>
      </div>
      <div>
        <h3>Gradient-main</h3>
        <Circle className="bgg-main0"></Circle>
        <Circle className="bgg-main1"></Circle>
        <Circle className="bgg-main2"></Circle>
      </div>
      <div>
        <h3>Gradient-extra</h3>
        <Circle className="bgg-extra0"></Circle>
        <Circle className="bgg-extra1"></Circle>
      </div>
      <h1>Effects</h1>
      <div>
        <h3>Glow-MAX</h3>
        <Circle className="bgg-main0 glow-max-main0"></Circle>
        <Circle className="bgg-main1 glow-max-main1"></Circle>
        <Circle className="bgg-main2 glow-max-main2"></Circle>
      </div>
      <div>
        <h3>Glow-MAX-extras</h3>
        <Circle className="bgg-extra0 glow-max-extra0"></Circle>
        <Circle className="bgg-extra1 glow-max-extra1"></Circle>
      </div>
      <div>
        <h3>Glow-MIN</h3>
        <Circle className="bgg-main0 glow-min-main0"></Circle>
        <Circle className="bgg-main1 glow-min-main1"></Circle>
        <Circle className="bgg-main2 glow-min-main2"></Circle>
      </div>
      <div>
        <h3>Glow-hover</h3>
        <Circle className="bgg-main0 glow-hover-main0"></Circle>
        <Circle className="bgg-main1 glow-hover-main1"></Circle>
        <Circle className="bgg-main2 glow-hover-main2"></Circle>
      </div>
    </>
  )
};

export const Catalog = CatalogTemplate.bind({})
Catalog.args = {
  ...defaultArgs
};
Catalog.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true }
}