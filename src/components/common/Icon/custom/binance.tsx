import React, { SVGAttributes, memo } from 'react'

const BinanceIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 461 512" {...props}>
      <path d="M58.7 205.9L8.6 256l50.1 50.1L108.8 256 58.7 205.9zm171.8-71.6l85.9 85.9 50.1-50.1-136-136-136 136 50.1 50.1 85.9-85.9zm171.8 71.6L352.2 256l50.1 50.1L452.4 256l-50.1-50.1zM230.5 377.7l-85.9-85.9L94.5 341.9l136 136 136-136-50.1-50.1-85.9 85.9zm0-171.8L180.4 256l50.1 50.1L280.6 256l-50.1-50.1z" />
    </svg>
  )
}

export default memo(BinanceIcon) as typeof BinanceIcon
