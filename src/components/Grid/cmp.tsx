import React from 'react'
import { RowProps, ColProps } from './types'
import { StyledRow, StyledCol } from './styles'

export const Row = ({
  children,
  ...rest
}: RowProps) => {
  return (
    <StyledRow {...rest}>{children}</StyledRow>
  )
}

export const Col = ({
  children,
  ...rest
}: ColProps) => {
  return (
    <StyledCol {...rest}>{children}</StyledCol>
  )
}
