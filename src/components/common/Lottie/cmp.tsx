import React, { memo, Suspense, lazy } from 'react'
import { type LottieComponentProps } from 'lottie-react'
// import LottieImport from 'lottie-react'

// @note: Quickfix for nextjs + Node > 20
// https://github.com/Gamote/lottie-react/issues/101#issuecomment-1886338635
const LazyLottieComponent = lazy(() => {
  const LottieImport = import('lottie-react')
  return (LottieImport as any)?.default || LottieImport
})

export function Lottie({ animationData, ...props }: LottieComponentProps) {
  if (!animationData)
    return <div style={{ height: props.height, width: props.width }} />

  return (
    <Suspense
      fallback={<div style={{ height: props.height, width: props.width }} />}
    >
      <LazyLottieComponent animationData={animationData} {...props} />
    </Suspense>
  )
}
Lottie.displayName = 'Lottie'

export default memo(Lottie) as typeof Lottie
