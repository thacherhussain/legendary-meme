import React from 'react'
import { addons } from '@storybook/addons'
import { View } from 'react-native'
import { Button, useTheme } from 'native-base'
import { useRecoilState } from 'recoil'

import {
  storybookState,
  StorybookStates,
} from '../../src/recoil/atoms/storybookState'

export const ExitPanel = () => {
  const { colors } = useTheme()

  const [, setStorybook] = useRecoilState<StorybookStates>(storybookState)

  return (
    <View>
      <Button
        bgColor={colors.brand[900]}
        onPress={() => setStorybook(StorybookStates.NO_STORYBOOK)}
        size={'sm'}
        mx={1}
        my={2}
      >
        Exit
      </Button>
    </View>
  )
}

addons.register('storybook/exitStorybook', () => {
  addons.addPanel('storybook/exitStorybook/panel', {
    title: 'Exit Storybook',
    render: () => <ExitPanel />,
  })
})
