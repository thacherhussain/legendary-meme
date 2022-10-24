import React, { FC } from 'react'
import { useColorScheme } from 'react-native'
import { Box, Text } from 'native-base'

import { DefaultColors } from '@src/style/colors'

type BodyTextProps = {
  text?: string
  children?: React.ReactNode
}

export const BodyText: FC<BodyTextProps> = (props) => {
  const { text, children } = props
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Box>
      <Text
        fontSize={'md'}
        color={
          isDarkMode ? DefaultColors.darkModeText : DefaultColors.primaryText
        }
      >
        {text} {children}
      </Text>
    </Box>
  )
}
