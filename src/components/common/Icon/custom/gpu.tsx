import React, { SVGAttributes, memo } from 'react'

const Gpu = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_6965_38911)">
        <path d="M43.9771 21.8696L8.94179 41.7434V47.4802L7.66327 48.219V25.6587L44.0001 4.37524L43.9771 21.8696Z" />
        <path d="M7.33111 24.9089L3.13666 22.4219L39.7371 1L43.9315 3.49277L7.33111 24.9089Z" />
        <path d="M7.00003 48.3752L3.00003 45.9436V22.8882L7.00003 25.3753V48.3752Z" />
      </g>
      <defs>
        <clipPath id="clip0_6965_38911">
          <rect width="48" height="48" transform="translate(0 0.769287)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(Gpu) as typeof Gpu
