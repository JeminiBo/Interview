import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainDrawer } from './src/router';
import { COLORS } from './src/assets/colors';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import BootSplash from 'react-native-bootsplash';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: COLORS.secondary,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer
            onReady={() => {
              BootSplash.hide({ fade: true });
            }}>
            <MainDrawer />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
