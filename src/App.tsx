import { ThemeProvider } from 'styled-components'
import { Layout } from './components/Layout'
import { darkTheme, GlobalStyles } from './theme/theme'

export default () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}