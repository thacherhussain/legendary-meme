import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import { paddingAddon } from '../../addons/paddingAddon'
import { PrimaryText } from '../../../src/components'
import { BodyText } from '../../../src/components'

const bodyCopy = `Doggo ipsum bork long doggo maximum borkdrive boof pupper blep smol,
much ruin diet yapper floofs shibe snoot. Blop blep corgo smol borking
doggo with a long snoot for pats ruff big ol pupper`

storiesOf('Text', module)
  .addDecorator(paddingAddon)
  .add('primary text', () => (
    <PrimaryText>{text('text', 'henlo fren')}</PrimaryText>
  ))
  .add('body text', () => <BodyText>{text('text', bodyCopy)}</BodyText>)
