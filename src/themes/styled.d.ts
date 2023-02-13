import 'styled-components';
import { CoreTheme } from './styles'

declare module 'styled-components' {
  export interface DefaultTheme extends CoreTheme {}
}