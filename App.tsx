/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import BootSplash from "react-native-bootsplash";
import { StatusBar, Text, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useEffect } from 'react';

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
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>tes</Text>
    </SafeAreaProvider>
  );
}

export default App;
