import React, { type PropsWithChildren } from 'react'
import { useColorScheme, View } from 'react-native'
import { Text } from 'native-base'

import { DefaultColors } from '@src/style/colors'

export const Section: React.FC<
  PropsWithChildren<{
    title: string
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={{ marginHorizontal: 8, marginVertical: 16 }}>
      <Text
        fontSize={24}
        lineHeight={24}
        fontWeight={600}
        color={
          isDarkMode ? DefaultColors.darkModeText : DefaultColors.primaryText
        }
      >
        {title}
      </Text>
      <Text
        marginTop={2}
        fontSize={16}
        fontWeight={400}
        color={
          isDarkMode ? DefaultColors.darkModeText : DefaultColors.primaryText
        }
      >
        {children}
      </Text>
    </View>
  )
}
