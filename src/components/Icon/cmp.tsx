import React from 'react'
import {
  library,
  findIconDefinition,
  IconDefinition,
  IconName as FAIconName,
} from '@fortawesome/fontawesome-svg-core'
import { fass } from '@fortawesome/sharp-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { IconName, IconProps, IconPrefix } from './types'
import { StyledCustomIconCss, StyledIcon } from './styles'

import * as customIcons from './custom/index'
import styled from 'styled-components'

// @todo: Think about it as we are including all the icons on the final bundle
library.add(far, fab, fass)

const iconPrefixes: IconPrefix[] = ['fass', 'fab', 'far', 'custom']

export const Icon = ({
  name,
  prefix = 'fass',
  size = 'md',
  color,
  ...rest
}: IconProps) => {
  for (const p of [prefix, ...iconPrefixes.filter((p) => p !== prefix)]) {
    if (p === 'custom') {
      const CustomIcon = (customIcons as Record<IconName, any>)[name]
      if (!CustomIcon) continue

      const StyledCustomIcon = styled(CustomIcon)`
        ${StyledCustomIconCss};
      `

      return (
        <StyledCustomIcon
          {...{
            $iconSize: size,
            $color: color,
            ...rest,
          }}
        />
      )
    } else {
      const iconName = name as FAIconName
      const icon: IconDefinition | undefined = findIconDefinition({
        iconName,
        prefix: p,
      })

      if (!icon) continue

      return (
        <StyledIcon
          {...{
            icon,
            size: '1x',
            $iconSize: size,
            color,
            ...rest,
          }}
        />
      )
    }
  }

  return <></>
}

export default Icon
