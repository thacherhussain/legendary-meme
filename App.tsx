import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { NativeBaseProvider } from 'native-base'
import SplashScreen from 'react-native-splash-screen'

import { theme } from './src/utils/theme'
import { Navigation } from './src/navigation/Navigation'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  )
}

export default App
