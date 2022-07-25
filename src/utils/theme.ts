import { extendTheme } from 'native-base'
const newColorTheme = {
  brand: {
    900: '#0171B7',
    800: '#0197F4',
    700: '#34B1FE',
  },
  neutrals: {
    100: '#f3f3f3',
    900: '#222222',
  },
}
export const theme = extendTheme({ colors: newColorTheme })

type CustomThemeType = typeof theme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
