import React, { FC } from 'react'
import { Box, Text } from 'native-base'

type PrimaryTextProps = {
  text?: string
  children?: React.ReactNode
}

export const PrimaryText: FC<PrimaryTextProps> = (props) => {
  const { text, children } = props
  return (
    <Box>
      <Text fontSize={'md'} color={'brand.800'} fontWeight={'bold'}>
        {text} {children}
      </Text>
    </Box>
  )
}
