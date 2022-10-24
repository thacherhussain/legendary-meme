import React, { FC } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native'

import { DefaultColors } from '@src/style/colors'

type PageProps = {
  children: React.ReactNode
  smallMarginTop?: boolean
  noScroll?: boolean
}

export const Page: FC<PageProps> = (props) => {
  const { children, smallMarginTop, noScroll } = props
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? DefaultColors.dark : DefaultColors.light,
    flex: 1,
    marginTop: smallMarginTop ? 10 : 45,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {noScroll ? (
        <View
          style={{
            backgroundColor: isDarkMode
              ? DefaultColors.dark
              : DefaultColors.light,
            marginHorizontal: 20,
          }}
        >
          {children}
        </View>
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={backgroundStyle}
        >
          <View
            style={{
              backgroundColor: isDarkMode
                ? DefaultColors.dark
                : DefaultColors.light,
              marginHorizontal: 20,
            }}
          >
            {children}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}
