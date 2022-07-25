import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Details: undefined
}

export type DrawerStackParamList = {
  Home: undefined
  Tutorial: undefined
}

// MAIN STACK
export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>
export type DetailsProps = NativeStackScreenProps<MainStackParamList, 'Details'>

// DRAWER STACK
export type TutorialProps = NativeStackScreenProps<
  DrawerStackParamList,
  'Tutorial'
>
