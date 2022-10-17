import React from 'react'
import { Text, Alert } from 'react-native'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import Button from './index'
import CenterView from '../CenterView'

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={() => Alert.alert('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={() => Alert.alert('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ))
