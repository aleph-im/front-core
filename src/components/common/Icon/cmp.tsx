import React, { memo } from 'react'
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
import styled, { useTheme } from 'styled-components'
import { Gradient } from '../../../themes/types'

// @todo: Think about it as we are including all the icons on the final bundle
library.add(far, fab, fass)

const iconPrefixes: IconPrefix[] = ['fass', 'fab', 'far', 'custom']

const GradientDefinition = ({
  gradient,
  id,
}: {
  gradient?: Gradient
  id?: string
}) => {
  if (!gradient) return null

  return (
    <svg width="0" height="0" tw="absolute">
      <defs>
        <linearGradient id={id}>
          {gradient.colors.map((color, index) => (
            <stop
              key={index}
              offset={gradient.stops[index] + '%'}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>
    </svg>
  )
}
GradientDefinition.displayName = 'GradientDefinition'

export const Icon = ({
  name,
  prefix = 'fass',
  size: $iconSize = 'md',
  color,
  gradient,
  ...rest
}: IconProps) => {
  const theme = useTheme()
  const $color = color ? theme.color[color] || color : color
  const $gradient = gradient ? theme.gradient[gradient] : undefined
  const $gradientId = $gradient ? `svg-gradient-${gradient}` : undefined

  for (const p of [prefix, ...iconPrefixes.filter((p) => p !== prefix)]) {
    if (p === 'custom') {
      const CustomIcon = (customIcons as Record<IconName, any>)[name]
      if (!CustomIcon) continue

      const StyledCustomIcon = styled(CustomIcon)`
        ${StyledCustomIconCss};
      `

      return (
        <>
          <GradientDefinitionMemo gradient={$gradient} id={$gradientId} />
          <StyledCustomIcon
            {...{
              $iconSize,
              $color,
              $gradientId: $gradientId,
              ...rest,
            }}
          />
        </>
      )
    } else {
      const iconName = name as FAIconName
      const icon: IconDefinition | undefined = findIconDefinition({
        iconName,
        prefix: p,
      })

      if (!icon) continue

      return (
        <>
          <GradientDefinitionMemo gradient={$gradient} id={$gradientId} />
          <StyledIcon
            {...{
              icon,
              size: '1x',
              $iconSize,
              color: $color,
              $gradientId: $gradientId,
              ...rest,
            }}
          />
        </>
      )
    }
  }

  return <></>
}
Icon.displayName = 'Icon'

export const GradientDefinitionMemo = memo(
  GradientDefinition,
) as typeof GradientDefinition
export default memo(Icon) as typeof Icon
