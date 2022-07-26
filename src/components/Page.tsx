import React, { FC } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native'
import { useTheme } from 'native-base'

type PageProps = {
  children: React.ReactNode
  smallMarginTop?: boolean
}

export const Page: FC<PageProps> = (props) => {
  const { children, smallMarginTop } = props
  const { colors } = useTheme()
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.neutrals[900] : colors.neutrals[100],
    flex: 1,
    marginTop: smallMarginTop ? 10 : 45,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode
              ? colors.neutrals[900]
              : colors.neutrals[100],
            marginHorizontal: 20,
          }}
        >
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
