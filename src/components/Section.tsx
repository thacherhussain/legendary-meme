import React, { type PropsWithChildren } from 'react'
import { useColorScheme, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Text } from 'native-base'

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
        color={isDarkMode ? Colors.white : Colors.black}
      >
        {title}
      </Text>
      <Text
        marginTop={2}
        fontSize={16}
        fontWeight={400}
        color={isDarkMode ? Colors.light : Colors.dark}
      >
        {children}
      </Text>
    </View>
  )
}
