import React, { SVGAttributes, memo } from 'react'

const Web3HostingBox = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg viewBox="0 0 48 53" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d_6205_45819)">
        <path d="M6.73999 14.8193L24 24.8493L41.26 14.8193L24 4.55933L6.73999 14.8193Z" />
        <path d="M25 44.4193L42.23 34.5193V16.5693L26.81 25.5293L25 26.5793V44.4193Z" />
        <path d="M26.81 25.5293L25 26.5793L26.81 25.5293Z" />
        <path d="M5.77002 16.5693V34.1393L23 44.3893V26.5793L21.45 25.6793L5.77002 16.5693Z" />
        <path d="M21.4501 25.6794L23.0001 26.5794L21.4501 25.6794Z" />
      </g>
      <defs>
        <filter
          id="filter0_d_6205_45819"
          x="-4"
          y="0.769287"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6205_45819"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6205_45819"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default memo(Web3HostingBox) as typeof Web3HostingBox
