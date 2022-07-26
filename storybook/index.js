import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator, addParameters } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'

import {name as appName} from '../app.json';
import {loadStories} from './storyLoader'

import './rn-addons';

addDecorator(withKnobs);
addDecorator(withBackgrounds);

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'grey', value: '#eeeeee' },
  ],
})

configure(() => {
  loadStories()
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === 'android' ? '10.0.2.2' : '0.0.0.0',
  asyncStorage: require('@react-native-async-storage/async-storage').default,
  tabOpen: -1
});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
