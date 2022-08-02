import React from 'react'
import {
  useTheme,
  Text,
  Box,
  Center,
  VStack,
  FormControl,
  Input,
  Select,
  Checkbox,
  Radio,
  Button,
  CheckIcon,
} from 'native-base'
import { useForm, Controller } from 'react-hook-form'

import { Page } from '@components'

type FormData = {
  name: string
  day: string
  languages: string[]
  typeOfBird: string
}

export const Profile = () => {
  const { colors } = useTheme()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Page>
      <Center>
        <VStack width='90%' space={4}>
          <FormControl isRequired isInvalid={'name' in errors}>
            <FormControl.Label>First Name</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  size={'xl'}
                  _focus={{
                    backgroundColor: 'neutrals.100',
                    borderColor: 'brand.600',
                  }}
                />
              )}
              name='name'
              rules={{ required: 'Field is required', minLength: 3 }}
            />
            <FormControl.ErrorMessage>
              {errors.name?.message}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl>
            <FormControl.Label>Favorite Day of the Week</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder='Pick a day'
                  selectedValue={value}
                  onValueChange={(itemValue: string) => {
                    onChange(itemValue)
                  }}
                  _selectedItem={{
                    endIcon: <CheckIcon size='5' />,
                  }}
                  size={'xl'}
                >
                  <Select.Item label='Monday' value='mon' />
                  <Select.Item label='Tuesday' value='tues' />
                  <Select.Item label='Wednesday' value='wed' />
                  <Select.Item label='Thursday' value='thurs' />
                  <Select.Item label='Friday' value='fri' />
                  <Select.Item label='Saturday' value='sat' />
                  <Select.Item label='Sunday' value='sun' />
                </Select>
              )}
              name='day'
              defaultValue=''
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Preferred Languages</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange } }) => (
                <Checkbox.Group
                  onChange={(values) => {
                    onChange(values)
                  }}
                  flexDirection='column'
                  colorScheme={'brand'}
                >
                  <VStack space={2}>
                    <Checkbox value='js' size={'md'}>
                      JavaScript
                    </Checkbox>
                    <Checkbox value='ts' size={'md'}>
                      TypeScript
                    </Checkbox>
                    <Checkbox value='swift' size={'md'}>
                      Swift
                    </Checkbox>
                    <Checkbox value='objc' size={'md'}>
                      Objective-C
                    </Checkbox>
                  </VStack>
                </Checkbox.Group>
              )}
              name='languages'
            />
          </FormControl>
          <FormControl>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              color={'gray.500'}
              paddingBottom={'2'}
            >
              Night Owl or Early Bird?
            </Text>
            <Controller
              control={control}
              render={({ field: { onChange } }) => (
                <Radio.Group
                  name='typeOfBird'
                  flexDirection='row'
                  onChange={(val) => onChange(val)}
                  colorScheme={'brand'}
                >
                  <Radio value='nightOwl' size={'lg'}>
                    <Text fontSize={'lg'} ml={1} mr={3}>
                      Night Owl
                    </Text>
                  </Radio>
                  <Radio value='earlyBird' size={'lg'}>
                    <Text fontSize={'lg'} ml={1} mr={3}>
                      Early Bird
                    </Text>
                  </Radio>
                </Radio.Group>
              )}
              name='typeOfBird'
            />
          </FormControl>
          <Box paddingTop={6}>
            <Button
              onPress={handleSubmit(onSubmit)}
              bgColor={colors.brand[600]}
              size={'lg'}
            >
              Submit
            </Button>
          </Box>
        </VStack>
      </Center>
    </Page>
  )
}
