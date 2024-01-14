import React from 'react'
import { StoryFn } from '@storybook/react'

import Button from './cmp'
import { ButtonKind, ButtonProps, ButtonSize, ButtonVariant } from './types'
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
  size: 'regular',
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
        padding: '5px',
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

  const colors: string[] = Object.keys(theme.color).filter(
    (c) => c.indexOf('main') !== -1,
  )

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
