import React, { FC } from 'react'
import { Box, Text } from 'native-base'

type PrimaryTextProps = {
  text: string
}

export const PrimaryText: FC<PrimaryTextProps> = (props) => {
  const { text } = props
  return (
    <Box>
      <Text fontSize={'md'} color={'blue.500'} fontWeight={'bold'}>
        {text}
      </Text>
    </Box>
  )
}
