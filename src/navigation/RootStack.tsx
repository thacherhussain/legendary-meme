import React from 'react'
import { useColorScheme } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme, HamburgerIcon } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { lightTheme, darkTheme } from '@utils'
import { Home, Tutorials, Profile, TutorialDetail } from '@screens'
import { CustomDrawer } from './CustomDrawer'

const MainStack = createNativeStackNavigator()
const DrawerStack = createDrawerNavigator()

export const RootStack = () => {
  const scheme = useColorScheme()
  const { colors } = useTheme()

  const DrawerNav = () => {
    return (
      <DrawerStack.Navigator
        initialRouteName={'Home'}
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          drawerActiveTintColor: colors.brand[600],
          drawerInactiveTintColor: colors.brand[700],
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <HamburgerIcon ml='6' size={'lg'} color={colors.brand[500]} />
            </TouchableOpacity>
          ),
        })}
      >
        <DrawerStack.Screen name='Home' component={Home} />
        <DrawerStack.Screen name='Profile' component={Profile} />
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
        }}
      >
        <MainStack.Screen
          name='DrawerHome'
          component={DrawerNav}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen name='Tutorials' component={Tutorials} />
        <MainStack.Screen
          name='TutorialDetail'
          component={TutorialDetail}
          // @ts-ignore
          options={({ route }) => ({ title: route.params.subject })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
