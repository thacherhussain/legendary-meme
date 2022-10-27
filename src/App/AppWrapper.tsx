import React from 'react'
import { useRecoilValue } from 'recoil'

import { RootStack } from '@src/navigation/RootStack'
import StorybookUIRoot from '@sb/index'
import {
  storybookState,
  StorybookStates,
} from '@src/recoil/atoms/storybookState'

const AppWrapper = () => {
  const loadStorybook = useRecoilValue(storybookState)

  if (loadStorybook === StorybookStates.STORYBOOK) {
    return <StorybookUIRoot />
  }
  return <RootStack />
}

export default AppWrapper
