import React, { useState } from 'react'
import { useTheme, Box, Center, VStack, Button } from 'native-base'
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form'

import {
  Page,
  TextInput,
  SelectInput,
  RadioInput,
  CheckboxInput,
} from '@components'
import { dayOptions, birdOptions, languageOptions } from '@utils'

type FormData = {
  name: string
  day: string
  languages: string[]
  typeOfBird: string
}

export const Profile = () => {
  const { colors } = useTheme()
  const { ...methods } = useForm({ mode: 'onChange' })

  const [, setError] = useState<boolean>(false)

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    return console.log({ errors })
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log({ data })
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
              <CheckboxInput
                name={'langauges'}
                label='Favorite Languages?'
                options={languageOptions}
                rules={{ required: 'required' }}
              />
            </VStack>
          </FormProvider>
          <Box paddingTop={6}>
            <Button
              // @ts-ignore
              onPress={methods.handleSubmit(onSubmit, onError)}
              bgColor={colors.brand[500]}
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
