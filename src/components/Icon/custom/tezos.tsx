import React, { SVGAttributes, memo } from 'react'

const TezosIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371 512" {...props}>
      <path d="M326.7 344.1c-4.1-72.5-95.3-105.4-104-108.8c-.3-.2-.3-.5-.2-.9l94-94.4V129.9c0-1.6-1.4-3-3-3H140.2V53L76.3 66.3v9.6h3.5s15.7 0 15.7 15.7v35.1H46c-.9 0-1.8 .9-1.8 1.8v22.3H95.7V271.5c0 37.9 24.4 64.3 67.1 60.7c9.1-.7 17.4-4.3 24.6-8.9c3.2-2.1 5.2-5.5 5.2-9.5V302c-13.9 9.3-25.7 8.7-25.7 8.7c-27.1 0-26.5-34.4-26.5-34.4V150.7H265l-89.7 90.5c-.2 11.9-.3 21.2-.3 21.4c0 .3 .2 .5 .5 .5C257.8 277 280 330.2 280 345.7c0 0 8.9 75.4-66.4 80.5c0 0-49.3 2.1-58.1-17.6c-.3-.7 0-1.4 .7-1.8c8.2-3.7 13.7-11 13.7-20.8c0-14.6-8.9-26.5-27.6-26.5c-15.1 0-27.6 11.9-27.6 26.5c0 0-7.1 63.4 98.6 61.6c120.8-2.1 113.3-103.5 113.3-103.5z" />
    </svg>
  )
}

export default memo(TezosIcon)
