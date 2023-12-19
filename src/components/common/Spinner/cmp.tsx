import React, { memo, useMemo } from 'react'
import { SpinnerProps } from './types'
import { spinnerData } from './data'
import { useTheme } from 'styled-components'
import { colorNameToHex } from '../../../utils/color'
import { StyledLottie } from './styles'

export const Spinner = ({
  size: $size = '6rem',
  color = 'white',
  ...rest
}: SpinnerProps) => {
  const theme = useTheme()
  const logoColor = theme.color[color] || colorNameToHex(color) || color
  const animationData = useMemo(() => spinnerData(logoColor), [logoColor])

  return (
    <StyledLottie
      {...{
        animationData,
        $size,
        ...rest,
      }}
    />
  )
}
Spinner.displayName = 'Spinner'

export default memo(Spinner) as typeof Spinner
