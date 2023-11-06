import React, { SVGAttributes, memo } from 'react'

const ProfileIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 512" {...props}>
      <path d="M110.8 280.2s-.8-.5-1.2-.8c-6-4.1-11.2-9-15.4-14.9L82.4 253C60.3 278.1 43.7 308 38.4 335.8L10.4 479l24.3 24.3L59.3 377.3c6.4-33.2 25.6-68.1 51.7-97c0 0 0 0-.1 0v-.1zM75.5 209.4s.7 .5 1 .9l4.7 4.6c1-62 49-137.6 110.1-173.1c17-9.9 33.7-15.7 49.3-17.4L233.4 17s-.7-.8-1-1.2c-6.7-8.4-16.7-12.6-29-12.6c-13.2 0-28.8 4.8-45.4 14.5c-53.6 31.1-97.2 99.7-97.2 152.6c0 14.3 3.3 26 9.7 34c1.3 1.7 3 3.3 5.2 5.1l-.1-.1zm235.3 27.6c-2-7.6-5.5-13.3-10.3-17.4c-1.6-1.3-3.4-2.4-5.2-3.4c-.1 0-.4-.3-.5-.3c-.4-.1-.7-.4-1-.7c-1.4-.7-3.1-1-4.8-1.4c-.4 0-.8-.3-1-.3c-2.1-.5-4.3-.7-6.5-.8c-.4 0-.8 0-1.3 0s-1-.1-1.7-.1c-1.3 0-2.7 .3-4.2 .4c-1.3 0-2.5 .1-3.8 .4c-.3 0-.7 0-.9 0c-15.2 19.7-33.3 37.5-53.2 51.1c-3.8 2.6-7.6 5-11.4 7.2c-20.5 11.9-40.7 17.9-58.7 17.9c-2.4 0-4.6-.1-6.8-.4c-26.9 26.8-47.6 61.3-53.9 93L61.5 504 337.8 343.5 311 236.9h-.3zM109.5 194.7c-1.2 5.9-1.8 11.8-2.1 17.4c0 1.6-.3 3.3-.3 4.8c0 3.7 .3 7.6 .8 11.5c1 6.9 3.1 14 7.2 20c1.6 2.5 3.7 4.7 5.9 6.7c.1 0 .3 .3 .4 .4c1.3 1.2 2.7 2.4 4.3 3.3c.7 .4 1.6 .7 2.2 1c.1 0 .4 .1 .5 .3c.7 .3 1.3 .7 2 .9c1.7 .7 3.5 1.2 5.4 1.6c.3 0 .7 .1 .9 .3c3 .5 6.1 .8 9.4 .7c.7 0 1.2 .1 1.7 0c2.5 0 5-.4 7.6-.8c.7 0 1.4-.3 2.1-.4c2.6-.5 5.2-1.2 7.8-2c1.2-.4 2.4-.8 3.5-1.2c2.5-.8 5-1.8 7.5-2.9c1.2-.5 2.4-.9 3.5-1.6c3.7-1.7 7.3-3.5 11.1-5.8c3.4-2 6.7-4.1 9.9-6.3c13.6-9.3 26.3-20.8 37.5-33.6c5.4-6.1 10.5-12.6 15.2-19.2c0 0 0 0 0-.1c2.2-3.1 4.4-6.4 6.4-9.7c2.5-3.8 4.7-7.7 6.8-11.6c2.2-4.1 4.3-8.2 6.1-12.3c9.4-20.3 14.9-40.8 14.9-59.5c0-3.5-.3-7.5-.8-11.2c0-.1 0-.4 0-.5c-1.4-9.5-4.8-19.5-12.6-26.3c-1.6-1.4-3.3-2.6-5.2-3.8c-5.6-3.3-12.4-4.8-20-4.8c-13.2 0-28.9 5-45.4 14.5c-46.3 26.9-85.1 81.7-94.8 130.4l.4-.1z" />
    </svg>
  )
}

export default memo(ProfileIcon)
