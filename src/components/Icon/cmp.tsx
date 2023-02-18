import React from 'react'
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fass } from '@fortawesome/sharp-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { IconProps } from './types'
import { StyledIcon } from './styles'

// @todo: Think about it as we are including all the icons on the final bundle
library.add(far, fab, fass)

export const Icon = ({
  name,
  prefix = 'fass',
  size = 'md',
  ...rest
}: IconProps) => {
  let icon = findIconDefinition({ iconName: name, prefix })
  icon =
    !icon && prefix !== 'fab'
      ? findIconDefinition({ iconName: name, prefix: 'fab' })
      : icon

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
