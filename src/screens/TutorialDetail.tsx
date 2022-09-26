import React from 'react'
import {
  Text,
  Box,
  FlatList,
  VStack,
  HStack,
  ChevronRightIcon,
  Button,
  useTheme,
} from 'native-base'

import { Page } from '@components'
import { TutorialDetailProps } from 'src/navigation/types'

export const TutorialDetail = ({ route }: TutorialDetailProps) => {
  return (
    <Page smallMarginTop>
      <Text>{route.params.description}</Text>
    </Page>
  )
}
