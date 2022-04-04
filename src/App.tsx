import { ThemeProvider } from 'styled-components'
import * as C from './App.styles'
import { Aside } from './components/Aside'
import { darkTheme, GlobalStyles } from './theme/theme'

export default () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Aside />
    </ThemeProvider>
  )
}