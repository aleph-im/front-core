import React, { FunctionComponent, memo } from 'react'
import { useTheme } from 'styled-components'
import { StyledObjectImgContainer, StyledShape } from './styles'
import { ObjectImgProps, StyledObjectImgSvgProps } from './types'
import * as objs from './img/index'

export const ObjectImg = ({
  id,
  size = 100,
  color = 'base0',
  color2,
  shape,
  ...rest
}: ObjectImgProps) => {
  const theme = useTheme()

  const mainColor = theme.color[color] || color
  const bgColor = color2 || theme.color.background

  const Obj = (
    objs as Record<string, FunctionComponent<StyledObjectImgSvgProps>>
  )[id]

  const obj = <Obj color={mainColor} color2={bgColor} />

  return (
    <StyledObjectImgContainer {...{ size, ...rest }}>
      {shape ? <StyledShape>{obj}</StyledShape> : obj}
    </StyledObjectImgContainer>
  )
}
ObjectImg.displayName = 'ObjectImg'

export default memo(ObjectImg) as typeof ObjectImg
