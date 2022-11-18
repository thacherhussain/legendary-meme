import React, { FC } from 'react'
import { Box, Text } from 'native-base'
import { DefaultColors } from '@src/style/colors'
import { Image, StyleSheet } from 'react-native'

type AvatarProps = {
  image?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { image } = props
  const url =
    'https://storage.googleapis.com/fireside-prod-public-images/image/fireside-logo-mark.png'

  return <Image source={{ uri: url }} style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderRadius: 12,
  },
})
