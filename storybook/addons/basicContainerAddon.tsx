import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { theme } from '../../src/utils/theme'

export const basicContainerAddon = (storyFn) => (
  <NativeBaseProvider theme={theme}>{storyFn()}</NativeBaseProvider>
)
