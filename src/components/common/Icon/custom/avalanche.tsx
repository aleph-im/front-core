import React, { SVGAttributes, memo } from 'react'

const AvalancheIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
      <path d="M337.5 251.2c8.5-14.7 22.3-14.7 30.8 0l53.2 93.3c8.5 14.7 1.6 26.8-15.5 26.8H298.9c-16.9 0-23.9-12-15.5-26.8l54.1-93.3zM234.7 71.5c8.5-14.7 22.1-14.7 30.7 0l11.8 21.3 27.9 49.1c6.8 14 6.8 30.5 0 44.4L211.4 348.8c-8.5 13.2-22.7 21.5-38.4 22.5H95.2c-17.1 0-24.1-11.8-15.5-26.8l155-273z" />
    </svg>
  )
}

export default memo(AvalancheIcon) as typeof AvalancheIcon
