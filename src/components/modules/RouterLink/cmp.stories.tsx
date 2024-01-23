import React, { useMemo } from 'react'
import { StoryFn } from '@storybook/react'
import RouterLink from './cmp'
import { RouterLinkProps } from './types'
import { useTheme } from 'styled-components'

export default {
  title: 'Components/UI/modules/RouterLink',
  component: RouterLink,
}

const defaultArgs: Partial<RouterLinkProps> = {
  isActive: false,
  route: {
    name: 'Item',
    href: '/item',
    icon: 'earn',
  },
  Link: (props) => <a {...props} />,
}

// ---

function withFlagArgs(args: RouterLinkProps) {
  return { ...args, route: { ...args.route, flag: 1 } }
}

function withoutTextArgs(args: RouterLinkProps) {
  return { ...args, route: { ...args.route, name: undefined } }
}

function withoutIconArgs(args: RouterLinkProps) {
  return { ...args, route: { ...args.route, icon: undefined } }
}

const RouterLinkVariantGroup = (args: RouterLinkProps) => {
  return (
    <>
      <div>
        <RouterLink {...args} />
      </div>
      <div>
        <RouterLink {...withFlagArgs(args)} />
      </div>
      <div>
        <RouterLink {...args} disabled />
      </div>
      <div>
        <RouterLink {...args} isActive={true} />
      </div>
      <div>
        <RouterLink {...args} isActive={true} disabled />
      </div>
    </>
  )
}

const RouterLinkGroup = ({
  defaultArgs,
  noIconArgs,
  noTextArgs,
  variant,
}: {
  defaultArgs: RouterLinkProps
  noIconArgs: RouterLinkProps
  noTextArgs: RouterLinkProps
  variant: RouterLinkProps['variant']
}) => {
  return (
    <div>
      <h6 tw="mb-4">Variant {variant}</h6>
      <div tw="flex gap-10">
        <div>
          <div tw="mb-4">Default</div>
          <RouterLinkVariantGroup {...defaultArgs} variant={variant} />
        </div>
        <div>
          <div tw="mb-4">Icon only</div>
          <RouterLinkVariantGroup {...noTextArgs} variant={variant} />
        </div>
        <div>
          <div tw="mb-4">Text only</div>
          <RouterLinkVariantGroup {...noIconArgs} variant={variant} />
        </div>
      </div>
    </div>
  )
}

const Template: StoryFn<typeof RouterLink> = (args) => {
  const noTextArgs = useMemo(() => withoutTextArgs(args), [args])
  const noIconArgs = useMemo(() => withoutIconArgs(args), [args])
  const theme = useTheme()
  const variants = Object.keys(theme.component.routerLink.variant)

  return (
    <div tw="flex flex-col gap-10">
      {variants.map((variant) => (
        <RouterLinkGroup
          key={variant}
          {...{
            defaultArgs: args,
            noIconArgs,
            noTextArgs,
            variant,
          }}
        />
      ))}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  controls: { exclude: ['color', 'size'] },
}
