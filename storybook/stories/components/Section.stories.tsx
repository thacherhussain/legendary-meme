import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import { paddingAddon } from '@sb/addons/paddingAddon'
import { Section } from '@src/components'

const bodyCopy = `Doggo ipsum bork long doggo maximum borkdrive boof pupper blep smol,
much ruin diet yapper floofs shibe snoot. Blop blep corgo smol borking
doggo with a long snoot for pats ruff big ol pupper`

storiesOf('Section', module)
  .addDecorator(paddingAddon)
  .add('default', () => (
    <Section title={text('title', 'henlo fren')}>
      {text('text', bodyCopy)}
    </Section>
  ))
