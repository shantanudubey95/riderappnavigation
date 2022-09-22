import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Image, Pressable } from 'react-native';
import tw from 'twrnc';

import EnterNameAndEmailScreen from '../Screens/EnterNameAndEmailScreen';
import EnterOTPScreen from '../Screens/EnterOtpScreen';
import EnterPhoneNumberScreen from '../Screens/EnterPhoneNumberScreen';
import PrivacyAndTermsScreen from '../Screens/PrivacyAndTermsScreen';
import ProfileCreatedSplashScreen from '../Screens/ProfileCreatedSplashScreen';
import SelectGenderScreen from '../Screens/SelectGenderScreen';
import SplashScreen from '../Screens/SplashScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const Stack = createNativeStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TITLE_ONLY_HEADER: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: COLORS.WHITE },
  headerTitleStyle: { fontFamily: 'Poppins_600SemiBold', fontSize: 18 },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerBackVisible: false,
};
function HEADER(navigation: any): NativeStackNavigationOptions {
  return {
    headerStyle: { backgroundColor: COLORS.WHITE },
    headerTitleStyle: { fontFamily: 'Poppins_600SemiBold', fontSize: 18 },
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerLeft: () => (
      <Pressable style={tw`ml-1.5`} onPress={() => navigation.dispatch(CommonActions.goBack())}>
        <Image source={IMAGES.HEADER_BACK_ARROW} />
      </Pressable>
    ),
  };
}

export default function AuthNavigation({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="EnterPhoneNumberScreen"
        component={EnterPhoneNumberScreen}
        options={{ title: 'Enter Phone Number', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EnterOTPScreen"
        component={EnterOTPScreen}
        options={{ title: 'Enter OTP', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="EnterNameAndEmailScreen"
        component={EnterNameAndEmailScreen}
        options={{ title: 'We need some details', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="SelectGenderScreen"
        component={SelectGenderScreen}
        options={{ title: 'Final step', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="ProfileCreatedSplashScreen"
        component={ProfileCreatedSplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PrivacyAndTermsScreen" component={PrivacyAndTermsScreen} />
    </Stack.Navigator>
  );
}
