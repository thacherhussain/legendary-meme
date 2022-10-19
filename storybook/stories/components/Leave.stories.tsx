import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { useRecoilState } from 'recoil'
import { Button, useTheme } from 'native-base'

import { paddingAddon } from '../../addons/paddingAddon'
import {
  storybookState,
  StorybookStates,
} from '../../../src/recoil/atoms/storybookState'

export const Leave = () => {
  const { colors } = useTheme()

  const [, setStorybook] = useRecoilState<StorybookStates>(storybookState)
  return (
    <Button
      bgColor={colors.brand[900]}
      onPress={() => setStorybook(StorybookStates.NO_STORYBOOK)}
    >
      Leave
    </Button>
  )
}

storiesOf('Leave', module)
  .addDecorator(paddingAddon)
  .add('default', () => <Leave />)
