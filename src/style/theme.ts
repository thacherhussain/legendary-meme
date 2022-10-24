import { extendTheme } from 'native-base'

const newColorTheme = {
  brand: {
    50: '#e6f5fe',
    100: '#99d5fb',
    200: '67c1f8',
    300: '#34acf6',
    400: '#0197f4',
    500: '#0188dc',
    600: '#016aab',
    700: '#014c7a',
    800: '#002d49',
    900: '#001e31',
  },
  neutrals: {
    100: '#f3f3f3',
    900: '#222222',
  },
}
export const theme = extendTheme({
  colors: newColorTheme,
})

type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
