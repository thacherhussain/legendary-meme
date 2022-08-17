import React, { useState } from 'react'
import { useTheme, Box, Center, VStack, Checkbox, Button } from 'native-base'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form'

import { Page, TextInput, SelectInput, RadioInput } from '@components'

type FormData = {
  name: string
  day: string
  // languages: string[]
  typeOfBird: string
}

const dayOptions = [
  {
    label: 'Monday',
    value: 'mon',
  },
  {
    label: 'Tuesday',
    value: 'tues',
  },
  {
    label: 'Wednesday',
    value: 'wed',
  },
  {
    label: 'Thursday',
    value: 'thurs',
  },
  {
    label: 'Friday',
    value: 'fri',
  },
  {
    label: 'Saturday',
    value: 'sat',
  },
  {
    label: 'Sunday',
    value: 'sun',
  },
]

const birdOptions = [
  {
    label: 'Early Bird',
    value: 'am',
  },
  {
    label: 'Night Owl',
    value: 'pm',
  },
]

export const Profile = () => {
  const { colors } = useTheme()
  const { ...methods } = useForm({ mode: 'onChange' })

  const onSubmit: SubmitHandler<FormData> = (data) => console.log({ data })

  const [, setError] = useState<boolean>(false)

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    return console.log({ errors })
  }

  return (
    <Page>
      <Center>
        <VStack width='90%' space={4}>
          <FormProvider {...methods}>
            <VStack space={4}>
              <TextInput
                name={'name'}
                label={'Name'}
                setFormError={setError}
                rules={{ required: 'Name is required' }}
              />
              <SelectInput
                name={'day'}
                label={'Favorite day of the week'}
                options={dayOptions}
              />
              <RadioInput
                name={'bird'}
                label={'What kind of bird are you?'}
                options={birdOptions}
              />
            </VStack>
          </FormProvider>
          <Box paddingTop={6}>
            <Button
              // @ts-ignore
              onPress={methods.handleSubmit(onSubmit, onError)}
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

{
  /* 
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
 */
}
