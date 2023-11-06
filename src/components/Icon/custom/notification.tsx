import React, { SVGAttributes, memo } from 'react'

const NotificationIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 626 512" {...props}>
      <path d="M164.4 504.7L287.5 362.9 164.4 291.4V504.7zM2.7 164.5l142.5 82.8 16.9 9.8 1.4-.7c16.9-9 356.8-188.7 356.8-188.7L209.5 260.5l-20.1 12.4L306.6 341l12.5 7.3 12.5 7.3 22.8 13.2L625.2 7.2 2.7 164.5z" />
    </svg>
  )
}

export default memo(NotificationIcon)
