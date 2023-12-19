import React, { SVGAttributes, memo } from 'react'

const ConsoleIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 512" {...props}>
      <path d="M246.9 60.3a194.5 194.5 0 1 0 0 388.9 194.5 194.5 0 1 0 0-388.9zM158.5 303.5c-3 3-7.1 4.6-11.1 4.6s-8-1.6-11.1-4.6c-6.2-6.2-6.2-16.1 0-22.2l11.1-11.1 19-19-19-19-11.1-11.1c-6.2-6.2-6.2-16.1 0-22.2c6.1-6.2 16.1-6.2 22.2 0l41.2 41.2c2.9 2.9 4.6 6.9 4.6 11.1s-1.7 8.2-4.6 11.1l-41.2 41.2zm187.8 11.6H218c-8.7 0-15.7-7-15.7-15.7s7-15.7 15.7-15.7H346.3c8.7 0 15.7 7 15.7 15.7s-7 15.7-15.7 15.7z" />
    </svg>
  )
}

export default memo(ConsoleIcon) as typeof ConsoleIcon
