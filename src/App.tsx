import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/globalStyle'
import theme from 'styles/theme'

import Routes from './routes'

export type ThemeType = typeof theme

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
