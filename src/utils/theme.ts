import { extendTheme } from 'native-base'
const newColorTheme = {
  brand: {
    900: '#0171B7',
    800: '#0197F4',
    700: '#34B1FE',
  },
}
export const theme = extendTheme({ colors: newColorTheme })
