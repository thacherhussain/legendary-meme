import React, { FC } from 'react'
import { View } from 'react-native'
import { Text, Checkbox, ICheckboxGroupProps } from 'native-base'
import {
  useController,
  useFormContext,
  UseControllerProps,
} from 'react-hook-form'

import { OptionsInput } from './types'

type CheckboxInputProps = UseControllerProps &
  ICheckboxGroupProps & {
    name: string
    label: string
    options: OptionsInput[]
    setFormError?: any
  }

export const CheckboxInput: FC<CheckboxInputProps> = (props) => {
  const formContext = useFormContext()
  const { formState } = formContext
  const { name, label, options, rules, ...inputProps } = props
  const { field } = useController({ name, rules })
  const hasError = Boolean(formState?.errors[name])

  return (
    <View>
      {label && (
        <Text
          fontSize={'sm'}
          fontWeight={500}
          color={'gray.500'}
          paddingBottom={'1'}
        >
          {label}
        </Text>
      )}
      <Checkbox.Group
        onChange={field.onChange}
        flexDirection={'column'}
        colorScheme={'brand'}
        {...inputProps}
      >
        {options.map((option, i) => (
          <Checkbox key={i} value={option.value} size={'md'}>
            {option.label}
          </Checkbox>
        ))}
      </Checkbox.Group>

      {/*// @ts-ignore */}
      {hasError && <Text>{formState.errors[name].message}</Text>}
    </View>
  )
}
