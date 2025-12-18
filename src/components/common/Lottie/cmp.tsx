import React, { memo, useEffect, useState } from 'react'
import { type LottieComponentProps } from 'lottie-react'

export function Lottie({ animationData, ...props }: LottieComponentProps) {
  const [LottieComponent, setLottieComponent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Dynamic import of lottie-react to handle Next.js + Node > 20 compatibility
    const loadLottie = async () => {
      try {
        const LottieImport = await import('lottie-react')
        const Component = (LottieImport as any)?.default || LottieImport
        setLottieComponent(() => Component)
      } catch (error) {
        console.error('Failed to load lottie-react:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadLottie()
  }, [])

  if (!animationData || isLoading || !LottieComponent) {
    return <span style={{ height: props.height, width: props.width }} />
  }

  return <LottieComponent animationData={animationData} {...props} />
}
Lottie.displayName = 'Lottie'

export default memo(Lottie) as typeof Lottie
