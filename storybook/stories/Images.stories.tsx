import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Image, StyleSheet } from 'react-native'

import { paddingAddon } from '../addons/paddingAddon'
import { Avatar } from '@src/components/Avatar'

const getImageTileStory = () => {
  return (
    <Image
      source={require('../../src/assets/Casey.jpg')}
      style={styles.container}
    />
  )
}

const getAvatar = () => {
  return <Avatar />
}

storiesOf('Images', module)
  .addDecorator(paddingAddon)
  .add('Image Tile', () => getImageTileStory())
  .add('Avatar', () => getAvatar())

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 12,
  },
})
