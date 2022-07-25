import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const darkTheme = {
  ...DarkTheme,
  colors: {
    background: 'rgb(34, 34, 34)',
    text: 'rgb(243, 243, 243)',
  },
}

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    background: 'rgb(243, 243, 243)',
    text: 'rgb(34, 34, 34)',
  },
}
