import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import {
  Montserrat_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/montserrat';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
