import React from 'react'
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { IconProps } from './types'
import { StyledIcon } from './styles'

// @todo: Think about it as we are including all the icons on the final bundle
library.add(far, fas, fab)

export const Icon = ({
  name,
  prefix = 'fas',
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
