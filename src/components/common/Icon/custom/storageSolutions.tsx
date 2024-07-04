import React, { SVGAttributes, memo } from 'react'

const StorageSolutions = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg viewBox="0 0 48 49" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M29.14 4.09937L3.85001 18.7894V38.9294L6.85001 37.1894V20.3894C6.85001 20.0294 7.04001 19.6994 7.35001 19.5294L29.14 6.85937V4.09937Z" />
      <path d="M30.14 11.3593L31.14 10.7793L34.14 9.0393V6.2793L31.14 8.0193L30.14 8.5993L29.14 9.1793L8.85001 20.9693V41.1093L11.85 39.3693V22.5693C11.85 22.2093 12.04 21.8793 12.35 21.7093L29.14 11.9593L30.14 11.3793V11.3593Z" />
      <path d="M30.14 16.4295L31.14 15.8495L34.14 14.1095L35.14 13.5295L36.14 12.9495L39.14 11.2095V8.44946L36.14 10.1895L35.14 10.7695L34.14 11.3495L31.14 13.0895L30.14 13.6695L29.14 14.2495L13.85 23.1295V43.2695L16.85 41.5295V24.7295C16.85 24.3695 17.04 24.0395 17.35 23.8695L29.14 17.0195L30.14 16.4395V16.4295Z" />
      <path d="M41.15 12.3594L40.15 12.9394L39.15 13.5194L36.15 15.2594L35.15 15.8394L34.15 16.4194L31.15 18.1594L30.15 18.7394L29.15 19.3194L18.86 25.2994V45.4394L44.16 30.7494V10.6094L41.16 12.3494L41.15 12.3594ZM27.56 27.4594C27.22 27.4594 26.88 27.2794 26.69 26.9594C26.67 26.9194 26.67 26.8794 26.65 26.8394C26.46 26.3794 26.61 25.8494 27.05 25.5894L30.14 23.7994L31.14 23.2194L34.14 21.4794L34.94 21.0194C35 20.9794 35.07 20.9694 35.14 20.9494C35.5 20.8294 35.88 20.9294 36.14 21.1994C36.2 21.2594 36.26 21.3094 36.3 21.3894C36.53 21.7894 36.44 22.2694 36.14 22.5794C36.08 22.6394 36.02 22.7094 35.94 22.7594L35.14 23.2294L34.14 23.8094L28.06 27.3394C27.91 27.4294 27.75 27.4694 27.59 27.4694C27.58 27.4694 27.57 27.4694 27.56 27.4694V27.4594Z" />
    </svg>
  )
}

export default memo(StorageSolutions) as typeof StorageSolutions
