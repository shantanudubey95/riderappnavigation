import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc';

import DrawerNavigation from './src/Navigation/DrawerNavigation';
import * as COLORS from './src/config/colors';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      // <SafeAreaView style={tw`flex-1 bg-[${COLORS.WHITE}]`}>
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
