/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const reactNativeLib = path.resolve(__dirname, '../..');

module.exports = {
  watchFolders: [reactNativeLib],
  resolver: {
    blacklistRE: blacklist([
      new RegExp(`${reactNativeLib}/node_modules/react-native/.*`),
      new RegExp(`${reactNativeLib}/detox\/((?!rn-0\.60).).*`),
      new RegExp(path.resolve(__dirname, 'ios/.*')),
    ]),
    extraNodeModules: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
