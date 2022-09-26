import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Tutorials: undefined
  TutorialDetail: {
    id: number
    subject: string
    description: string
  }
}

export type DrawerStackParamList = {
  Home: undefined
  Profile: undefined
}

// MAIN STACK
export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>
export type TutorialProps = NativeStackScreenProps<
  MainStackParamList,
  'Tutorials'
>
export type TutorialDetailProps = NativeStackScreenProps<
  MainStackParamList,
  'TutorialDetail'
>

// DRAWER STACK
export type ProfileProps = NativeStackScreenProps<
  DrawerStackParamList,
  'Profile'
>
