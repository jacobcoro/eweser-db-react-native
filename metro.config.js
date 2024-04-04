// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    sourceExts: ['js', 'json', 'ts', 'tsx', 'cjs'],
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === 'crypto') {
        // when importing crypto, resolve to react-native-quick-crypto
        return context.resolveRequest(
          context,
          'react-native-quick-crypto',
          platform
        );
      }
      // otherwise chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = config;
