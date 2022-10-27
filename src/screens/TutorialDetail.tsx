import React from 'react'
import { Text } from 'native-base'

import { Page } from '@src/components'
import { TutorialDetailProps } from '@src/navigation/types'

export const TutorialDetail = ({ route }: TutorialDetailProps) => {
  return (
    <Page smallMarginTop>
      <Text>{route.params.description}</Text>
    </Page>
  )
}
