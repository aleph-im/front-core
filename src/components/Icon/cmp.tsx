import React from 'react'
import {
  library,
  findIconDefinition,
  IconPrefix,
  IconDefinition,
  IconName as FAIconName,
} from '@fortawesome/fontawesome-svg-core'
import { fass } from '@fortawesome/sharp-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { IconName, IconProps } from './types'
import { StyledCustomIconCss, StyledIcon } from './styles'

import * as customIcons from './custom/index'
import styled from 'styled-components'

// @todo: Think about it as we are including all the icons on the final bundle
library.add(far, fab, fass)

const iconPrefixes: IconPrefix[] = ['fass', 'fab', 'far']

export const Icon = ({
  name,
  prefix = 'fass',
  size = 'md',
  ...rest
}: IconProps) => {
  if (prefix === 'custom') {
    const CustomIcon = (customIcons as Record<IconName, any>)[name]
    if (CustomIcon) return <></>

    const StyledCustomIcon = styled(CustomIcon)`
      ${StyledCustomIconCss};
    `

    return <StyledCustomIcon {...{ $iconSize: size, fill: rest.color }} />
  }

  const iconName = name as FAIconName
  let icon: IconDefinition | undefined = findIconDefinition({
    iconName,
    prefix,
  })

  if (!icon) {
    const prefix = iconPrefixes.find((prefix) =>
      findIconDefinition({ iconName, prefix }),
    )

    if (!prefix) return <></>

    icon = findIconDefinition({ iconName, prefix })
  }

  return (
    <StyledIcon
      {...{
        icon,
        size: '1x',
        $iconSize: size,
        ...rest,
      }}
    />
  )
}

export default Icon
