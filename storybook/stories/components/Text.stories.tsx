import React from 'react'
import { Text } from 'react-native'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import CenterView from '../CenterView'

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Text>{text('text', 'henlo fren')}</Text>)
