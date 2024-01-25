import React from 'react'
import AlephLogoSvg from './aleph'
import TwentysixLogoSvg from './twentysix'

export default {
  aleph: AlephLogoSvg,
  twentysix: TwentysixLogoSvg,
} as Record<
  string,
  React.FunctionComponentFactory<{ color: string; bgColor: string }>
>
