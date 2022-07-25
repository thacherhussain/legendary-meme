import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { theme } from './src/utils/theme'
import { Tutorial } from './src/screens'

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Tutorial />
    </NativeBaseProvider>
  )
}

export default App
