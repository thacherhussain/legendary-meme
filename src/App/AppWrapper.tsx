import React from 'react'
import { useRecoilValue } from 'recoil'

import { RootStack } from '../navigation/RootStack'
import StorybookUIRoot from '../../storybook'
import { storybookState, StorybookStates } from '../recoil/atoms/storybookState'

const AppWrapper = () => {
  const loadStorybook = useRecoilValue(storybookState)

  if (loadStorybook === StorybookStates.STORYBOOK) {
    return <StorybookUIRoot />
  }
  return <RootStack />
}

export default AppWrapper
