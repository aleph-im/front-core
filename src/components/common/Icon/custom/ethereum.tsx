import React, { SVGAttributes, memo } from 'react'

const EthereumIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 512" {...props}>
      <path d="M216.7 366.1V368 472.4v4.9L350 285.6 216.7 366.1zm-4.5 111.2V366L77.9 285.6 212.3 477.3zm5.3-443.1V44.2 195.6L348 256.6M217.6 337.3v2.9l130.2-79L217.6 200.6V337.3zM211.5 34.1V44.2 195.6L81 256.6m130.4 80.7v2.9l-130.2-79 130.2-60.6V337.3z" />
    </svg>
  )
}

export default memo(EthereumIcon) as typeof EthereumIcon
