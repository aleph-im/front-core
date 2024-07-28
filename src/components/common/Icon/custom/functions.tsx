import React, { SVGAttributes, memo } from 'react'

const Dashboard = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M41.67 26.0193L42.35 25.2093L43.03 24.3893L44.18 23.0193L39.35 14.9693L25.2 10.9893L10.29 14.0093L3.82001 21.7693L5.24001 24.1293L5.78001 25.0393L6.33001 25.9493L8.65001 29.8193L22.8 33.7893L24.19 33.5093L37.71 30.7793L40.57 27.3393L41.67 26.0193Z" />
      <path d="M4.43001 26.6693L3.88001 25.7593L3.60001 25.2893V26.0893V27.6593V28.5793L7.00001 34.2393V30.9493L4.97001 27.5693L4.43001 26.6693Z" />
      <path d="M23.77 35.6392V40.7792L26.28 40.2692L37.26 38.0492V32.9092L25.79 35.2292L23.77 35.6392Z" />
      <path d="M44.12 26.2092L43.44 27.0292L42.76 27.8391L42.32 28.3792L39.26 32.0492V36.1091L40.81 34.2392L44.4 29.9291V28.6192V26.6791V25.8792L44.12 26.2092Z" />
      <path d="M9 31.9893V37.0993L21.77 40.6793V35.5793L9 31.9893Z" />
    </svg>
  )
}

export default memo(Dashboard) as typeof Dashboard