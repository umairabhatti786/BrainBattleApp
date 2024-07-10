import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/routes';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'ClashDisplay-Light': require('./assets/fonts/ClashDisplay-Light.ttf'),
    'ClashDisplay-Regular': require('./assets/fonts/ClashDisplay-Regular.ttf'),
    'ClashDisplay-Medium': require('./assets/fonts/ClashDisplay-Medium.ttf'),
    'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.ttf'),
    'ClashDisplay-Bold': require('./assets/fonts/ClashDisplay-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),

  });
  return (
   <RootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
