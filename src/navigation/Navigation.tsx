import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { lightTheme, darkTheme } from '../utils/navTheme'
import { Home, Tutorial } from '@screens'

const DrawerStack = createDrawerNavigator()

export const Navigation = () => {
  const scheme = useColorScheme()

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <DrawerStack.Navigator initialRouteName={'Home'}>
        <DrawerStack.Screen name='Home' component={Home} />
        <DrawerStack.Screen name='Tutorial' component={Tutorial} />
      </DrawerStack.Navigator>
    </NavigationContainer>
  )
}
