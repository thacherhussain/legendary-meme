import React, { FC } from 'react'
import { Box, Text } from 'native-base'
import { DefaultColors } from '@src/style/colors'

type PrimaryTextProps = {
  text?: string
  children?: React.ReactNode
}

export const PrimaryText: FC<PrimaryTextProps> = (props) => {
  const { text, children } = props
  return (
    <Box>
      <Text
        fontSize={'md'}
        color={DefaultColors.primaryText}
        fontWeight={'bold'}
      >
        {text} {children}
      </Text>
    </Box>
  )
}
