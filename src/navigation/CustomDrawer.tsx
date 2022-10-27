import React from 'react'
import { View } from 'react-native'
import { useRecoilState } from 'recoil'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { Button, useTheme } from 'native-base'

import {
  storybookState,
  StorybookStates,
} from '@src/recoil/atoms/storybookState'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const CustomDrawer = (props) => {
  const { colors } = useTheme()
  const [, setStorybook] = useRecoilState<StorybookStates>(storybookState)

  return (
    <View style={{ flex: 1, backgroundColor: colors.neutrals[100] }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>

        <Button
          mx={2}
          bgColor={colors.brand[900]}
          onPress={() => setStorybook(StorybookStates.STORYBOOK)}
        >
          Go To Storybook
        </Button>
      </DrawerContentScrollView>
    </View>
  )
}
