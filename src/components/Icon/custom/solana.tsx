import React, { SVGAttributes, memo } from 'react'

const SolanaIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 421 512" {...props}>
      <path d="M24.3 214.6H344.8c4.1 0 7.9 1.6 10.7 4.5l50.8 51c9.3 9.5 2.7 25.4-10.7 25.4H75.1c-4.1 0-7.9-1.6-10.7-4.5L13.7 240c-9.5-9.5-2.7-25.4 10.7-25.4zM13.7 147L64.5 96c2.9-2.9 6.6-4.5 10.7-4.5H395.7c13.4 0 20 16.1 10.7 25.4l-50.6 51c-2.9 2.9-6.6 4.5-10.7 4.5H24.3c-13.4 0-20-16.1-10.7-25.4zM406.1 363.2l-50.8 51c-2.9 2.9-6.6 4.5-10.7 4.5H24.3c-13.4 0-20-16.1-10.7-25.4l50.8-51c2.9-2.9 6.6-4.5 10.7-4.5H395.7c13.4 0 20 16.1 10.7 25.4h-.2z" />
    </svg>
  )
}

export default memo(SolanaIcon)
