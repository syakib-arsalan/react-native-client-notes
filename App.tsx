/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import BootSplash from 'react-native-bootsplash';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './src/navigation/TabNavigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      console.log('cek authentikasi');
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <TabNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
