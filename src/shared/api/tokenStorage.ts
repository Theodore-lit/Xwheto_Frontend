import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import type { StateStorage } from 'zustand/middleware';

export const secureStorage: StateStorage = {
  getItem: async (name) =>
    Platform.OS === 'web'
      ? localStorage.getItem(name)
      : SecureStore.getItemAsync(name),
  setItem: async (name, value) =>
    Platform.OS === 'web'
      ? localStorage.setItem(name, value)
      : SecureStore.setItemAsync(name, value),
  removeItem: async (name) =>
    Platform.OS === 'web'
      ? localStorage.removeItem(name)
      : SecureStore.deleteItemAsync(name),
};