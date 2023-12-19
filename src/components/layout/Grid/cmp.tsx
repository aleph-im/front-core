import React, { memo } from 'react'
import { RowProps, ColProps } from './types'
import { StyledRow, StyledCol } from './styles'

export const Row = ({ children, ...rest }: RowProps) => {
  return <StyledRow {...rest}>{children}</StyledRow>
}

export const Col = ({ children, ...rest }: ColProps) => {
  return <StyledCol {...rest}>{children}</StyledCol>
}

export const RowMemo = memo(Row) as typeof Row
export const ColMemo = memo(Col) as typeof Col
