import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { LogBox } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import SplashScreen from 'react-native-splash-screen'
import { RecoilRoot, useRecoilValue } from 'recoil'
import AppWrapper from './AppWrapper'
import StorybookUIRoot from '../../storybook'
import { theme } from '../utils/theme'
import { RootStack } from '../navigation/RootStack'
import { storybookState, StorybookStates } from '../recoil/atoms/storybookState'

const loadStorybook = true // Update to use ENV variables

const App = () => {
  // const loadStorybook = useRecoilValue(storybookState)
  // const goodToLoadStorybook = loadStorybook === StorybookStates.STORYBOOK

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <RecoilRoot>
        <AppWrapper />
      </RecoilRoot>
    </NativeBaseProvider>
  )
}

// export default loadStorybook ? StorybookUIRoot : App
export default App

// // Added to stop this warning for the native base checkbox list, this is an open issue with native base
// // Warning references this github issue -- https://github.com/adobe/react-spectrum/issues/2320
// // Open github issue -- https://github.com/GeekyAnts/NativeBase/issues/5098
LogBox.ignoreLogs([
  'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
  'Require cycle: node_modules/core-js/internals/microtask.js -> node_modules/core-js/internals/microtask.js',
])
