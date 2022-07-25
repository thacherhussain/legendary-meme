import React from 'react'
import { NativeBaseProvider } from 'native-base'

import { Tutorial } from '@screens'

const App = () => {
  return (
    <NativeBaseProvider>
      <Tutorial />
    </NativeBaseProvider>
  )
}

export default App
