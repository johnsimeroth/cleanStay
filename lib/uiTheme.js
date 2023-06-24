import { extendTheme } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

// enables light/dark mode persistence between reloads
export const colorModeManager = {
  get: async () => {
    try {
      const mode = await AsyncStorage.getItem('@color-mode');
      return mode === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async (mode) => {
    try {
      await AsyncStorage.setItem('@color-mode', mode);
    } catch (e) {
      console.error(e);
    }
  },
};

export const nbTheme = extendTheme({
  colors: {
    primary: {
      50: '#d9ffff',
      100: '#acefff',
      200: '#7bdeff',
      300: '#49caff',
      400: '#1ab3ff',
      500: '#0092e6',
      600: '#007db4',
      700: '#006382',
      800: '#004251',
      900: '#001a21',
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
});

export const navThemeDark = {
  dark: false,
  colors: {
    primary: '#1ab3ff',
    background: '#18181b',
    card: '#3f3f46',
    text: '#fafafa',
    border: '#27272a',
    notification: '#f9a8d4',
  },
};

export const navThemeLight = {
  dark: true,
  colors: {
    primary: '#1ab3ff',
    background: '#fafaf9',
    card: '#f5f5f4',
    text: '#292524',
    border: '#d6d3d1',
    notification: '#f9a8d4',
  },
};
