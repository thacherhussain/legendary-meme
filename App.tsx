import 'react-native-gesture-handler'
import React from 'react'
import { NativeBaseProvider } from 'native-base'

import { theme } from './src/utils/theme'
import { Navigation } from './src/navigation/Navigation'

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  )
}

export default App
