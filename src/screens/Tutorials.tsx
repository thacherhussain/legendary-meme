import React from 'react'
import {
  Text,
  Box,
  FlatList,
  VStack,
  HStack,
  ChevronRightIcon,
} from 'native-base'

import { Page } from '@components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TutorialProps } from 'src/navigation/types'
import { tutorialsData } from '@utils'

export const Tutorials = ({ navigation }: TutorialProps) => {
  return (
    <Page smallMarginTop noScroll>
      <FlatList
        data={tutorialsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TutorialDetail', {
                id: item.id,
                subject: item.subject,
                description: item.description,
              })
            }
          >
            <Box
              borderBottomWidth='1'
              borderColor='coolGray.200'
              pl='4'
              pr='5'
              py='2'
            >
              <HStack space={3} justifyContent='space-between'>
                <VStack>
                  <Text color='coolGray.800' bold>
                    {item.subject}
                  </Text>
                  <Text color='coolGray.600'>{item.description}</Text>
                </VStack>
                <ChevronRightIcon pt={10} />
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
      />
    </Page>
  )
}
