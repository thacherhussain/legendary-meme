import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type MainStackParamList = {
  Home: undefined
  Profile: undefined
}

export type DrawerStackParamList = {
  Home: undefined
  Tutorial: undefined
}

// MAIN STACK
export type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>
export type ProfileProps = NativeStackScreenProps<MainStackParamList, 'Profile'>

// DRAWER STACK
export type TutorialProps = NativeStackScreenProps<
  DrawerStackParamList,
  'Tutorial'
>
