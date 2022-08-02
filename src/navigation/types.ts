import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Tutorial: undefined
}

export type DrawerStackParamList = {
  Home: undefined
  Profile: undefined
}

// MAIN STACK
export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>
export type ProfileProps = NativeStackScreenProps<
  MainStackParamList,
  'Tutorial'
>

// DRAWER STACK
export type TutorialProps = NativeStackScreenProps<
  DrawerStackParamList,
  'Profile'
>
