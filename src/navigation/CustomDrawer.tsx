import React from 'react'
import { View } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { useTheme } from 'native-base'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const CustomDrawer = (props) => {
  const { colors } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutrals[100] }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  )
}
