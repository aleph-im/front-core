import React, { SVGAttributes, memo } from 'react'

const SettingsIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456 512" {...props}>
      <path d="M291.5 231.4c-1.8-.6-4-.9-6.4-.9c-6.9 0-16.3 2.7-27.2 10c-8.6 17.5-21.7 34.4-37.9 47.1c-.8 .6-1.6 1-2.3 1.6c-6 13.8-8.8 27.3-6.1 37.8c1.6 6.4 4.8 10.4 9.8 12.1c7.6 2.6 22.3 .3 40-13.8c2.6-2 5.1-4.4 7.5-6.8c6.3-7.1 12.3-14.3 18-21.8c11.8-18.4 18-38.8 14.4-53.1c-1.6-6.4-4.8-10.4-9.8-12.1h-.1zM151.8 205.5c6-9.2 13.2-18 21.3-25.8c4.6-5 9.2-9.9 13.9-14.7l-39.4-39.4c-13.4 13.3-25.8 27.9-37.1 43.3l39.1 39.1c.7-.9 1.4-1.8 2-2.7l.1 .1zM85.7 360.2H66.6l18.3 20.5c0-6.6 .1-13.4 .8-20.5zM321 79V89.8c3.3-.5 6.6-.7 9.9-.9L321 79zM43.9 369.1L7.6 411.2l39.3 39.4 34.4-39.8L43.9 369.1zM19.4 304.8l10.1 10.1 11.3 11.4 2.8 2.7 9.2-21.2 9.7-22.3 24.7-57.1L75.2 216.4 49.1 190.3 9.4 282l-3.9 8.9 2.5 2.5 11.4 11.4zm86-90.3h12.3 5.9L90.9 181.7H82.3 72.7l32.8 32.8zm86.2-102.5L159.1 79.3V105l32.7 32.7V111.9zm74.9-54.7L287.5 45l3.5-2-9.6-9.7L265.6 17.5 254.2 6.1l-1.9-1.9L209.7 29 166.2 54.3 205 93.1l61.6-35.8zm118 2.2l8.8-10.1 3.2-3.6L357.1 6.4 344.1 21.5 321.6 47.4l39.3 39.4 23.7-27.4zm53.3 153.9l-10.2-10.2c-.2 3.4-.5 6.8-.8 10.4h11.2l-.1-.1zM191.7 500.6V480.7c-6.5 .8-12.9 1.1-19 .9l19 19zm222-264.4c-1.6 0-3.2-.3-4.6-1c-.5-.2-.9-.6-1.4-.9c-1-.6-2-1.3-2.8-2.2c-2.2-2.6-3.1-6-2.5-9.3c.5-2.7 .8-5.5 1.1-8.1c.1-1.1 .3-2.4 .5-3.5c.5-3.9 .7-7.5 .8-11.3c.3-6.5 .3-12.9-.2-18.9c0-.1 0-.3 0-.5c-.3-3.9-.9-7.6-1.6-11.4c0-.5 0-.8-.2-1.3c-.7-3.4 .2-7.1 2.5-9.7l.5-.5 44.4-51.4L413.3 64 412 62.5l-41.9 48.5c-.9 1-2 1.8-3.3 2.5c-.3 .2-.7 .3-1.1 .5c-1 .5-2.2 .7-3.3 .8c-.5 0-.9 0-1.4 0c-.7 0-1.4-.1-2-.2c-.2 0-.5 0-.7 0c-3.5-1-7.2-1.7-11-2.3c-10.7-1.4-22.5-.7-35.3 2.3c-3.4 .8-6.9 0-9.7-2.2s-4.3-5.5-4.3-8.9V65.3l-71.8 41.6-11.9 6.9v51.3s-.2 1-.3 1.5c-.1 .9-.2 1.8-.6 2.6c-.1 .3-.3 .7-.5 1c-.5 1-1.1 1.9-1.9 2.7c-.1 .1-.2 .3-.3 .6c-7.7 7.2-15.1 14.9-22.2 22.9c-5.8 6.5-11.5 13.1-16.8 20c-4 5.1-7.7 10.4-11.5 15.7c0 .1-.2 .2-.3 .5c-.2 .3-.5 .6-.7 .8c-.5 .5-.9 .9-1.5 1.4c-.3 .2-.6 .5-.9 .6c-.6 .3-1.3 .7-1.9 .9c-.3 .1-.6 .2-.9 .3c-1 .2-2 .5-3.1 .5h-2.4H136.3 107.9L64.5 337.6H98.3v-.1c3.3 0 6.5 1.5 8.6 4s3.1 5.9 2.6 9.2c-3.1 19.2-3 36.8 .1 52.2c.1 .7 .2 1.4 .3 1.9c.6 2.5 0 5-1.1 7.3c-.3 .7-.6 1.4-1 1.9c-.1 .2-.2 .5-.3 .7L62.2 467.2l.2 .2 1.3 1.4 35.8 41.3 .9 1 35.6-41.2 8.4-9.7c.9-1 1.9-1.7 3-2.4c2.5-1.5 5.6-1.9 8.4-1.1c.9 .2 1.9 .3 3 .6c4 .9 8.3 1.4 12.6 1.6c2.3 0 4.7 .2 7.1 .1c4.7-.1 9.6-.7 14.6-1.6c1.6-.2 3.3-.6 4.9-.9c.8-.1 1.6-.2 2.4-.5c3.4-.8 6.9 0 9.7 2.2c1 .8 1.7 1.9 2.4 3c.2 .5 .7 .8 .9 1.3c.7 1.5 1 3 1 4.7v41.2l83.7-48.6V405.3c0-3.2 1.4-6.1 3.6-8.3c17.9-16.7 34.2-35.4 48.4-55.6c2.2-3.1 5.6-4.8 9.2-4.9h44.9L447.6 236h-34l-.2 .1 .3 .1zM282 337.6c-2.2 1.9-4.3 3.8-6.5 5.6c-7.1 5.6-14.2 9.9-21.3 13.1c-3.9 1.8-7.6 3.2-11.4 4.2c-5.1 1.4-10.2 2.4-15 2.4s-9.4-.7-13.9-2.3c-12.4-4.2-21-14.2-24.5-28.1c-2-8.5-2-18.1-.2-28.1c.8-4.3 1.9-8.9 3.4-13.3c1.8-5.5 4.1-11 6.8-16.5c8.6-17.5 21.8-34.4 37.9-47.2c.8-.6 1.6-1.1 2.4-1.7c5.1-3.9 10.4-7.2 15.5-9.8c4.3-2.3 8.8-4 13-5.3c11-3.4 21.5-3.8 30.7-.6c12.4 4.2 21 14.2 24.5 28.1c3.1 12.6 1.5 27.6-3.8 42.9c-1.3 3.8-2.7 7.6-4.6 11.4c-2.5 5.3-5.5 10.7-8.6 15.9c-6.7 10.6-14.9 20.6-24.5 29.2v.1z" />
    </svg>
  )
}

export default memo(SettingsIcon) as typeof SettingsIcon