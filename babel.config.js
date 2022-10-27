module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@sb': './storybook',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
