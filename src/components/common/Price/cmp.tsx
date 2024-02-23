import React, { memo } from 'react'
import { StyledPrice } from './styles'
import { PriceProps } from './types'
import Logo from '../Logo'
import { formatCurrency, humanReadableCurrency } from '../../../utils'

export const Price = ({ value, humanReadable = true, ...rest }: PriceProps) => {
  return (
    <StyledPrice {...rest}>
      {humanReadable ? humanReadableCurrency(value) : formatCurrency(value)}
      <Logo color="currentColor" size="1em" img="aleph" />
    </StyledPrice>
  )
}
Price.displayName = 'Price'

export default memo(Price) as typeof Price
