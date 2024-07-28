import React, { SVGAttributes, memo } from 'react'

const ComputeSolutions = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25 43.1492L45.33 31.3692V26.6992L25 38.4792V43.1492Z" />
      <path d="M2.66 31.3494L23 43.1494V38.4794L2.66 26.6694V31.3494Z" />
      <path d="M24 5.81934L3.64001 17.9193L9.58001 21.3693L24 29.7493L38.42 21.3693L44.36 17.9193L24 5.81934ZM36.08 19.3293L26.68 24.7893C26.12 25.1193 25.36 25.1193 24.8 24.7893L17.28 20.4193C16.72 20.0893 16.72 19.6593 17.28 19.3293L18.41 18.6793L15.59 17.0393C13.62 15.8893 13.62 14.0393 15.59 12.8893C17.56 11.7393 20.76 11.7393 22.73 12.8893L25.55 14.5293L26.68 13.8693C27.24 13.5393 28 13.5393 28.56 13.8693L36.08 18.2393C36.64 18.5693 36.64 18.9993 36.08 19.3293Z" />
      <path d="M17.1 13.7592C15.97 14.4192 15.97 15.5092 17.1 16.1592L19.92 17.7992L24.05 15.3992L21.23 13.7592C20.1 13.1092 18.22 13.1092 17.1 13.7592Z" />
      <path d="M40.39 22.5494L25 31.4894V36.1594L45.33 24.3794V19.6694L40.39 22.5494Z" />
      <path d="M2.66 19.6694V24.3594L23 36.1594V31.4894L7.61 22.5494L2.66 19.6694Z" />
    </svg>
  )
}

export default memo(ComputeSolutions) as typeof ComputeSolutions