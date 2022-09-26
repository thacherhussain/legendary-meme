import React from 'react'
import { useTheme, Button, Box } from 'native-base'

import { Page, Section, PrimaryText } from '@components'
import { HomeProps } from 'src/navigation/types'

export const Home = ({ navigation }: HomeProps) => {
  const { colors } = useTheme()

  return (
    <Page>
      <Section title={'Home'}>
        <PrimaryText
          text={
            'Doggo ipsum bork long doggo maximum borkdrive boof pupper blep smol, much ruin diet yapper floofs shibe snoot'
          }
        />
      </Section>
      <Section title='Step One'>
        Doggo ipsum bork long doggo maximum borkdrive boof pupper blep smol,
        much ruin diet yapper floofs shibe snoot. Blop blep corgo smol borking
        doggo with a long snoot for pats ruff big ol pupper
      </Section>

      <Box marginY={'8'}>
        <Button
          bgColor={colors.brand[900]}
          onPress={() => navigation.navigate('Tutorials')}
        >
          Tutorials
        </Button>
      </Box>
    </Page>
  )
}
