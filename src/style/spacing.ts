export const tinySpace = 4
export const littleSpace = 8
export const smallSpace = 16
export const mediumSpace = 24
export const largeSpace = 32
export const enormousSpace = 40

export const sizeVariantsValues = [
  'tiny',
  'little',
  'small',
  'medium',
  'large',
  'enormous',
] as const

export type SizeVariants = typeof sizeVariantsValues[number]

export const spaceSizeMap: { [key in SizeVariants]: number } = {
  tiny: tinySpace,
  little: littleSpace,
  small: smallSpace,
  medium: mediumSpace,
  large: largeSpace,
  enormous: enormousSpace,
}
