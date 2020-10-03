import { ThemeType } from 'App'
import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
