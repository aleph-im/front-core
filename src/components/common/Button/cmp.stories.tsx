import React from 'react'
import { StoryFn } from '@storybook/react'

import Button from './cmp'
import { ButtonProps, ButtonSize } from './types'
import { useTheme } from 'styled-components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/Button',
  component: Button,
  // argTypes: {
  //   iconPosition: { control: { type: 'inline-radio' } }
  // },
}

const defaultArgs: Partial<ButtonProps> = {
  as: 'button',
  children: 'Text',
  color: 'main0',
  variant: 'primary',
  kind: 'flat',
  size: 'md',
}

const defaultParams = {}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

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

export const Forwarded = Template.bind({})
Forwarded.args = {
  ...defaultArgs,
  hover: false,
  active: false,
  focus: false,
  disabled: false,
  as: 'a',
}
Forwarded.parameters = {
  ...defaultParams,
}

// ---

function Cell({ children, gc, gr, bg = false }: any) {
  return (
    <div
      style={{
        gridColumn: gc,
        gridRow: gr,
        padding: '0.5rem 2rem',
        background: bg ? 'rgba(128,128,128,0.5)' : undefined,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  )
}

const CatalogTemplate: StoryFn<typeof Button> = (args) => {
  args = {
    ...defaultArgs,
    ...args,
  } as ButtonProps

  const theme = useTheme()

  const sizes: ButtonSize[] = ['lg', 'md', 'sm']
  const kinds = Object.keys(theme.component.button).filter(
    (k) => k !== 'default',
  )

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto 1fr 1fr 1fr 1fr 1fr',
        gap: '0.25rem',
      }}
    >
      <Cell bg gc={`span 3`}></Cell>
      <Cell bg>Default</Cell>
      <Cell bg>Focus</Cell>
      <Cell bg>Active</Cell>
      <Cell bg>Hover</Cell>
      <Cell bg>Disabled</Cell>

      <>
        {kinds.map((kind) => {
          const kindSchema = theme.component.button[kind]
          const variants = Object.keys(kindSchema)
          const col1 = variants.length * sizes.length

          return (
            <>
              <Cell bg gr={`span ${col1}`}>
                {kind}
              </Cell>
              {sizes.map((size) => {
                const col2 = variants.length

                return (
                  <>
                    <Cell bg gr={`span ${col2}`}>
                      {size}
                    </Cell>
                    {variants.map((variant) => {
                      const extraArgs = {
                        ...args,
                        kind,
                        size,
                        variant,
                        color: args.color,
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
    </div>
  )
}

export const Catalog = CatalogTemplate.bind({})
Catalog.args = {
  ...defaultArgs,
}
Catalog.parameters = {
  ...defaultParams,
  controls: { include: ['color'], hideNoControlsWarning: true },
}
