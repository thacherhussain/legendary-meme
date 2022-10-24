export enum NamedColors {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  NEUTRAL_LIGHT = '#F3F3F3',
  NEUTRAL_DARK = '#222222',
  BLUE_800 = '#002D49',
}

export type ColorVariants =
  | 'light'
  | 'dark'
  | 'primaryText'
  | 'darkModeText'
  | 'white'
  | 'black'

const light = NamedColors.NEUTRAL_LIGHT
const dark = NamedColors.NEUTRAL_DARK
const primaryText = NamedColors.BLUE_800
const darkModeText = NamedColors.NEUTRAL_LIGHT
const white = NamedColors.WHITE
const black = NamedColors.BLACK

type MapOfColorVariants = { [key in ColorVariants]: NamedColors }

export const DefaultColors: MapOfColorVariants = {
  light,
  dark,
  primaryText,
  darkModeText,
  white,
  black,
}
