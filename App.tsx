import React from 'react';
import { View, Text } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'

import { SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';

import { ThemeProvider } from 'styled-components';
import { Signin } from './src/screens/Signin';

import theme from './src/styles/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    SpaceGrotesk_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101114'
      }} >
        <Text>Carregando...</Text>
      </View>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <Signin />
    </ThemeProvider>
  );
}
