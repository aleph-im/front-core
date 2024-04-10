import React, { SVGAttributes, memo } from 'react'

const WalletConnectIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M124.687 249.375C193.551 249.375 249.375 193.551 249.375 124.687C249.375 55.8245 193.551 0 124.687 0C55.8245 0 0 55.8245 0 124.687C0 193.551 55.8245 249.375 124.687 249.375Z" />
      <g transform="translate(42.5, 74.5)">
        <path
          d="M34.2619 19.7907C61.0063 -6.28994 104.369 -6.28994 131.113 19.7907L134.332 22.9295C135.669 24.2332 135.669 26.3476 134.332 27.6513L123.321 38.3889C122.653 39.0407 121.569 39.0407 120.9 38.3889L116.471 34.0695C97.8126 15.8751 67.5625 15.8751 48.9044 34.0695L44.1606 38.6951C43.4919 39.347 42.4081 39.347 41.7394 38.6951L30.7287 27.9576C29.3912 26.6538 29.3912 24.5395 30.7287 23.2357L34.2619 19.7907ZM153.885 41.9964L163.685 51.5526C165.022 52.8564 165.022 54.9707 163.685 56.2745L119.497 99.3645C118.16 100.669 115.992 100.669 114.654 99.3645L83.2932 68.7826C82.9588 68.4564 82.4169 68.4564 82.0825 68.7826L50.7213 99.3645C49.3844 100.669 47.2162 100.669 45.8787 99.3645L1.69026 56.2739C0.353004 54.9701 0.353004 52.8557 1.69026 51.552L11.49 41.9957C12.8272 40.6914 14.9953 40.6914 16.3325 41.9957L47.6944 72.5783C48.0287 72.9045 48.5706 72.9045 48.905 72.5783L80.2657 41.9957C81.6025 40.6914 83.7707 40.6914 85.1082 41.9957L116.47 72.5783C116.804 72.9045 117.346 72.9045 117.681 72.5783L149.043 41.9964C150.379 40.692 152.548 40.692 153.885 41.9964Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

export default memo(WalletConnectIcon) as typeof WalletConnectIcon
