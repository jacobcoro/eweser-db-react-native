import { polyfillWebCrypto } from 'expo-standard-web-crypto';

polyfillWebCrypto();

import SyncStorage from 'sync-storage';

export const localStoragePolyfill: Storage = {
  getItem: (key: string) => SyncStorage.get(key),
  setItem: (key: string, value: string) => SyncStorage.set(key, value),
  removeItem: (key: string) => SyncStorage.remove(key),
  length: SyncStorage.getAllKeys().length,
  clear: () =>
    SyncStorage.getAllKeys().forEach((key) => SyncStorage.remove(key)),
  key: (index: number) => SyncStorage.getAllKeys()[index],
};
