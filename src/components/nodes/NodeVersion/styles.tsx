import styled from 'styled-components'
import ColorDot from '../ColorDot'

export type StyledVersionIconProps = { $status: number }

export const StyledVersionIcon = styled(ColorDot).attrs<StyledVersionIconProps>(
  ({ theme, $status, ...rest }) => {
    const $color =
      $status >= 0.8
        ? theme.color.success
        : $status >= 0.5
        ? theme.color.info
        : $status >= 0
        ? theme.color.error
        : theme.color.disabled2

    return {
      $color,
      ...rest,
    }
  },
)<StyledVersionIconProps>``
