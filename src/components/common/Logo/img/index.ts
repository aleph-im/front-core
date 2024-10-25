import React from 'react'
import AlephLogoSvg from './aleph'
import TwentysixLogoSvg from './twentysix'
import AcceleratorLogoSvg from './accelerator'

export default {
  aleph: AlephLogoSvg,
  twentysix: TwentysixLogoSvg,
  accelerator: AcceleratorLogoSvg,
} as Record<
  string,
  React.FunctionComponentFactory<{ color: string; bgColor: string }>
>
