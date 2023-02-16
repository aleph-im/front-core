import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Button from './cmp'
import { ButtonKind, ButtonProps, ButtonSize, ButtonVariant } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Button',
  component: Button,
  decorators: [withDesign],
  // argTypes: {
  //   iconPosition: { control: { type: 'inline-radio' } }
  // },
} as ComponentMeta<typeof Button>

const defaultArgs: Partial<ButtonProps> = {
  label: 'Text',
  color: 'main2',
  variant: 'primary',
  kind: 'flat',
  size: 'regular',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A741&t=jFufZWoGIyZ8Gzf5-0',
  },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
  hover: false,
  active: false,
  focus: false,
  disabled: false,
}
Default.parameters = {
  ...defaultParams,
}

// ---

const CatalogTemplate: ComponentStory<typeof Button> = (args) => {
  args = {
    ...defaultArgs,
    ...args,
  } as ButtonProps

  const colors: string[] = ['main0', 'main1', 'main2']
  const kinds: ButtonKind[] = ['neon', 'flat']
  const sizes: ButtonSize[] = ['big', 'regular']
  const variants: ButtonVariant[] = [
    'primary',
    'secondary',
    'tertiary',
    'text-only',
  ]

  const col1 = kinds.length * sizes.length * variants.length - sizes.length
  const col2 = sizes.length * variants.length
  const col3 = variants.length

  function Cell({ children, gc, gr, bg = false }: any) {
    return (
      <div
        style={{
          gridColumn: gc,
          gridRow: gr,
          padding: '5px',
          background: bg ? 'rgba(255,255,255,0.2)' : undefined,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto 1fr 1fr 1fr 1fr 1fr',
        gap: '4px',
      }}
    >
      <Cell bg gc={`span 4`}></Cell>
      <Cell bg>Default</Cell>
      <Cell bg>Focus</Cell>
      <Cell bg>Active</Cell>
      <Cell bg>Hover</Cell>
      <Cell bg>Disable</Cell>

      {colors.map((color) => {
        return (
          <>
            <Cell bg gr={`span ${col1}`}>
              {color}
            </Cell>
            {kinds.map((kind) => {
              const isFlat = kind === 'flat'
              const removeCols = isFlat ? sizes.length : 0

              return (
                <>
                  <Cell bg gr={`span ${col2 - removeCols}`}>
                    {kind}
                  </Cell>
                  {sizes.map((size) => {
                    const removeCols = isFlat ? 1 : 0

                    return (
                      <>
                        <Cell bg gr={`span ${col3 - removeCols}`}>
                          {size}
                        </Cell>
                        {variants.map((variant) => {
                          if (variant === 'tertiary' && isFlat) return null
                          const extraArgs = {
                            ...args,
                            kind,
                            size,
                            variant,
                            color,
                          }
                          return (
                            <>
                              <Cell bg>{variant}</Cell>
                              <Cell>
                                <Button {...extraArgs} />
                              </Cell>
                              <Cell>
                                <Button {...extraArgs} focus />
                              </Cell>
                              <Cell>
                                <Button {...extraArgs} active />
                              </Cell>
                              <Cell>
                                <Button {...extraArgs} hover />
                              </Cell>
                              <Cell>
                                <Button {...extraArgs} disabled />
                              </Cell>
                            </>
                          )
                        })}
                      </>
                    )
                  })}
                </>
              )
            })}
          </>
        )
      })}
    </div>
  )
}

export const Catalog = CatalogTemplate.bind({})
Catalog.args = {
  ...defaultArgs,
}
Catalog.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true },
}
