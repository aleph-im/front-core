import React from 'react'
import Button from '../../../Button'
import { StyledInfoBox } from './styles'
import { InfoBoxProps } from './types'

export const InfoBox = ({
  title,
  children,
}: InfoBoxProps) => {
  return (
    <StyledInfoBox className='my-xxl px-sm py-md fx-glass-base0 fx-glass-base1'>
      <h3 className='tp-h7 mb-xxs'>{title}</h3>
      <p className='m-0'>{children}</p>
    </StyledInfoBox>
  )
}

export default InfoBox
