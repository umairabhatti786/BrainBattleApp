import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/routes';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
// import { useFonts } from 'expo-font';
// 

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'ClashDisplay-Light': require('./assets/fonts/ClashDisplay-Light.ttf'),
//     'ClashDisplay-Regular': require('./assets/fonts/ClashDisplay-Regular.ttf'),
//     'ClashDisplay-Medium': require('./assets/fonts/ClashDisplay-Medium.ttf'),
//     'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.ttf'),
//     'ClashDisplay-Bold': require('./assets/fonts/ClashDisplay-Bold.ttf'),
//     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
//     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
//     // Add more fonts as needed
//   });
// };

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loaded, error] = useFonts({
     //   // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
       'ClashDisplay-Light': require('./assets/fonts/ClashDisplay-Light.ttf'),
    'ClashDisplay-Regular': require('./assets/fonts/ClashDisplay-Regular.ttf'),
    'ClashDisplay-Medium': require('./assets/fonts/ClashDisplay-Medium.ttf'),
    'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.ttf'),
    'ClashDisplay-Bold': require('./assets/fonts/ClashDisplay-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),

  })

  // const [loaded] = useFonts({
  //   // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  //   'ClashDisplay-Light': require('./assets/fonts/ClashDisplay-Light.ttf'),
  //   'ClashDisplay-Regular': require('./assets/fonts/ClashDisplay-Regular.ttf'),
  //   'ClashDisplay-Medium': require('./assets/fonts/ClashDisplay-Medium.ttf'),
  //   'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.ttf'),
  //   'ClashDisplay-Bold': require('./assets/fonts/ClashDisplay-Bold.ttf'),
  //   'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  //   'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  //   'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  // });

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

 
  // useEffect(() => {
  //   async function loadFonts() {
  //     await fetchFonts();
  //     setFontsLoaded(true);
  //   }
  //   loadFonts();
  // }, []);




  // const [fontsLoaded] = useFonts({
  //   'ClashDisplay-Light': require('./assets/fonts/ClashDisplay-Light.ttf'),
  //   'ClashDisplay-Regular': require('./assets/fonts/ClashDisplay-Regular.ttf'),
  //   'ClashDisplay-Medium': require('./assets/fonts/ClashDisplay-Medium.ttf'),
  //   'ClashDisplay-Semibold': require('./assets/fonts/ClashDisplay-Semibold.ttf'),
  //   'ClashDisplay-Bold': require('./assets/fonts/ClashDisplay-Bold.ttf'),
  //   'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  //   'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  //   'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),

  // });
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
