import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';
import tw from 'twrnc';

import ApplyCouponScreen from '../Screens/ApplyCouponScreen';
import EnterDestinationScreen from '../Screens/EnterDestinationScreen';
import HomeScreen from '../Screens/HomeScreen';
import InternetErrorScreen from '../Screens/InternetErrorScreen';
import LocationErrorScreen from '../Screens/LocationErrorScreen';
import OTPLimitScreen from '../Screens/OTPLimitScreen';
import PaymentDoneScreen from '../Screens/PaymentDoneScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import ProcessingPaymentScreen from '../Screens/ProcessingPaymentScreen';
import ServiceNotAvailableScreen from '../Screens/ServiceNotAvailableScreen';
import VerifyEmailScreen from '../Screens/VerifyEmailScreen';
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

export default function HomeNavigation({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="EnterDestinationScreen"
        component={EnterDestinationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LocationErrorScreen" component={LocationErrorScreen} />
      <Stack.Screen name="InternetErrorScreen" component={InternetErrorScreen} />
      <Stack.Screen name="ServiceNotAvailableScreen" component={ServiceNotAvailableScreen} />
      <Stack.Screen
        name="VerifyEmailScreen"
        component={VerifyEmailScreen}
        options={{ title: 'Verify Email', ...HEADER }}
      />
      <Stack.Screen name="OTPLimitScreen" component={OTPLimitScreen} />
      <Stack.Screen name="ApplyCouponScreen" component={ApplyCouponScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="ProcessingPaymentScreen" component={ProcessingPaymentScreen} />
      <Stack.Screen name="PaymentDoneScreen" component={PaymentDoneScreen} />
    </Stack.Navigator>
  );
}
