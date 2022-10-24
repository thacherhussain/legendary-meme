import React from 'react'
import { ScrollView, Text, View } from 'native-base'
import { storiesOf } from '@storybook/react-native'

import { paddingAddon } from '@sb/addons/paddingAddon'
import { DefaultColors } from '@src/style/colors'
import { spaceSizeMap, sizeVariantsValues } from '@src/style/spacing'

const getSpacingStory = () => {
  const spacingMap = Object.values(spaceSizeMap).map((s, i) => {
    return (
      <View key={i} style={{ margin: 12 }}>
        <Text color={DefaultColors.primaryText}>{sizeVariantsValues[i]}</Text>
        <View
          style={{
            height: s,
            backgroundColor: DefaultColors.light,
          }}
        />
      </View>
    )
  })
  return <ScrollView>{spacingMap}</ScrollView>
}

storiesOf('Atoms / Spacing', module)
  .addDecorator(paddingAddon)
  .add('default', () => getSpacingStory())
