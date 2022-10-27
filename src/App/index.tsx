import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { LogBox } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import SplashScreen from 'react-native-splash-screen'
import { RecoilRoot } from 'recoil'

import AppWrapper from '@src/App/AppWrapper'
import { RootStack } from '@src/navigation/RootStack'
import { theme } from '@src/style/theme'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <RecoilRoot>{__DEV__ ? <AppWrapper /> : <RootStack />}</RecoilRoot>
    </NativeBaseProvider>
  )
}

export default App

// // Added to stop this warning for the native base checkbox list, this is an open issue with native base
// // Warning references this github issue -- https://github.com/adobe/react-spectrum/issues/2320
// // Open github issue -- https://github.com/GeekyAnts/NativeBase/issues/5098
LogBox.ignoreLogs([
  'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
  'Require cycle: node_modules/core-js/internals/microtask.js -> node_modules/core-js/internals/microtask.js',
  `EventEmitter.removeListener('change', ...): Method has been deprecated.`,
])
