import React, { FC } from 'react'
import { View, Text } from 'react-native'

type PrimaryTextProps = {
  text: string
}

export const PrimaryText: FC<PrimaryTextProps> = (props) => {
  const { text } = props
  return (
    <View>
      <Text style={{ color: 'blue', fontSize: 18, fontWeight: 'bold' }}>
        {text}
      </Text>
    </View>
  )
}
