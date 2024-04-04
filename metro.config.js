// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');
const { mergeConfig } = require('metro-config');
const defaultConfig = getDefaultConfig(__dirname);
module.exports = mergeConfig(defaultConfig, {
  resolver: {
    sourceExts: [...(defaultConfig.resolver.sourceExts ?? []), 'cjs'],
  },
});
