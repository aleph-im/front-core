import React from 'react'
import { RowProps, ColProps } from './types'
import { StyledRow, StyledCol } from './styles'

export const Row = ({
  count = 12,
  gap = '1rem',
  children,
  ...rest
}: RowProps) => {
  return (
    <StyledRow {...{ count, gap, ...rest }}>{children && children}</StyledRow>
  )
}

export const Col = ({
  span = 1,
  offset = 0,
  children,
  ...rest
}: ColProps) => {
  return (
    <StyledCol {...{ span, offset, ...rest }}>{children && children}</StyledCol>
  )
}
