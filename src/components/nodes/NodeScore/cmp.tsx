import React, { memo } from 'react'
import { StyledScoreIcon } from './styles'

export type NodeScoreProps = {
  score: number
  showPercentage?: boolean
}

export const NodeScore = ({ score, showPercentage = true }: NodeScoreProps) => {
  const num = Number(score * 100).toFixed(2)

  return (
    <div tw="inline-flex gap-3 items-center">
      <StyledScoreIcon $score={score} />
      {showPercentage && <>{num}%</>}
    </div>
  )
}
NodeScore.displayName = 'NodeScore'

export default memo(NodeScore) as typeof NodeScore
