import { ThemeProvider } from 'styled-components'
import { Layout } from './components/Layout'
import { UserProvider } from './contexts/UserContext'
import { darkTheme, GlobalStyles } from './theme/theme'

export default () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <UserProvider>
        <Layout />
      </UserProvider>
    </ThemeProvider>
  )
}