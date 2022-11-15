import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StyleSheet, View } from 'react-native'

import { paddingAddon } from '../addons/paddingAddon'

const getBoxStory = () => {
  return <View style={styles.shadow} />
}

storiesOf('Shadow', module)
  .addDecorator(paddingAddon)
  .add('default', () => getBoxStory())

const styles = StyleSheet.create({
  shadow: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'lightgrey',
    borderRadius: 12,
    shadowColor: '#848484',
    shadowOpacity: 0.15,
    shadowOffset: {
      height: 6,
      width: 6,
    },
  },
})
