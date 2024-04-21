import { polyfillWebCrypto } from 'expo-standard-web-crypto';

polyfillWebCrypto();
import * as storage from 'expo-secure-store';

export const localStoragePolyfill = {
  getItem: (key: string) => storage.getItem(key),
  setItem: (key: string, value: string) => storage.setItem(key, value),
  removeItem: (key: string) => {
    storage.setItem(key, '');
    storage.deleteItemAsync(key);
  },
};
