import React, { FunctionComponent } from 'react'
import { useTheme } from 'styled-components'
import { StyledObjectImgWrap } from './styles'
import { ObjectImgProps, StyledObjectImgSvgProps } from './types'
import * as objs from './img/index'

export const ObjectImg = ({
  id,
  size = 100,
  color = 'base0',
  color2
}: ObjectImgProps) => {
  const theme = useTheme()

  const mainColor = theme.color[color] || color
  const bgColor = color2 || theme.color.background

  const Obj = (objs as Record<string, FunctionComponent<StyledObjectImgSvgProps>>)[id]

  return (
    <StyledObjectImgWrap size={size}>
      <Obj color={mainColor} color2={bgColor}/>
    </StyledObjectImgWrap>
  )
}

export default ObjectImg
