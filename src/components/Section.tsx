import React, { type PropsWithChildren } from 'react'
import { useColorScheme, View } from 'react-native'
import { Text, useTheme } from 'native-base'

export const Section: React.FC<
  PropsWithChildren<{
    title: string
  }>
> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark'
  const { colors } = useTheme()

  return (
    <View style={{ marginHorizontal: 8, marginVertical: 16 }}>
      <Text
        fontSize={24}
        lineHeight={24}
        fontWeight={600}
        color={isDarkMode ? colors.white : colors.black}
      >
        {title}
      </Text>
      <Text
        marginTop={2}
        fontSize={16}
        fontWeight={400}
        color={isDarkMode ? colors.light[200] : colors.light[700]}
      >
        {children}
      </Text>
    </View>
  )
}
