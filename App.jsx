import { Provider } from 'react-redux';
import { NativeBaseProvider, Box} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import Main from './components/Main';
import store from './lib/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Box safeArea flex={1}>
            <Main />
          </Box>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
