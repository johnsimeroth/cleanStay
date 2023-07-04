import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider, useColorMode } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import {
  colorModeManager,
  nbTheme,
  navThemeDark,
  navThemeLight,
} from './lib/uiTheme';
import TopLevelNav from './components/TopLevelNav';
import store from './lib/redux/store';

function NavWrapper() {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'light' ? navThemeLight : navThemeDark;
  return (
    <NavigationContainer theme={theme}>
      <TopLevelNav />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={nbTheme} colorModeManager={colorModeManager}>
        <NavWrapper />
      </NativeBaseProvider>
    </Provider>
  );
}
