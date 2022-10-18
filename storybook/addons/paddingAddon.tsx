import React from 'react'
import { View } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { theme } from '../../src/utils/theme'

export const paddingAddon = (storyFn) => (
  <NativeBaseProvider theme={theme}>
    <View style={{ flex: 1, width: '100%', padding: 40 }}>{storyFn()}</View>
  </NativeBaseProvider>
)