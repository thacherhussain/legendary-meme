import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useTheme } from 'native-base'

import { lightTheme, darkTheme } from '../utils/navTheme'
import { Home, Tutorial, Profile } from '@screens'
import { CustomDrawer } from './CustomDrawer'

const MainStack = createNativeStackNavigator()
const DrawerStack = createDrawerNavigator()

export const Navigation = () => {
  const scheme = useColorScheme()
  const { colors } = useTheme()

  const DrawerNav = () => {
    return (
      <DrawerStack.Navigator
        initialRouteName={'Home'}
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: colors.brand[800],
          drawerInactiveTintColor: colors.brand[700],
          headerTransparent: true,
          headerTintColor: colors.brand[700],
        }}
      >
        <DrawerStack.Screen name='Home' component={Home} />
        <DrawerStack.Screen name='Tutorial' component={Tutorial} />
      </DrawerStack.Navigator>
    )
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <MainStack.Navigator
        initialRouteName='DrawerHome'
        screenOptions={{
          headerTransparent: true,
          headerTintColor: colors.brand[700],
        }}
      >
        <MainStack.Screen
          name='DrawerHome'
          component={DrawerNav}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen name='Profile' component={Profile} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
