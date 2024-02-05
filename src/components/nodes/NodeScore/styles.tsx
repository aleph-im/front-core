import styled from 'styled-components'
import ColorDot from '../ColorDot'

export type StyledScoreIconProps = { $score: number }

export const StyledScoreIcon = styled(ColorDot).attrs<StyledScoreIconProps>(
  ({ theme, $score, ...rest }) => {
    const $color =
      $score >= 0.8
        ? theme.color.success
        : $score >= 0.5
        ? theme.color.info
        : theme.color.error

    return {
      $color,
      ...rest,
    }
  },
)<StyledScoreIconProps>``
