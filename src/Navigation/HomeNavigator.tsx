import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';
import tw from 'twrnc';

import ApplyCouponScreen from '../Screens/ApplyCouponScreen';
import CancelRideScreen from '../Screens/CancelRideScreen';
import ConnectingToDriverScreen from '../Screens/ConnectingToDriverScreen';
import DestinationArrivedScreen from '../Screens/DestinationArrivedScreen';
import EnterDestinationScreen from '../Screens/EnterDestinationScreen';
import HomeScreen from '../Screens/HomeScreen';
import InternetErrorScreen from '../Screens/InternetErrorScreen';
import LocateOnMapScreen from '../Screens/LocateOnMapScreen';
import LocationErrorScreen from '../Screens/LocationErrorScreen';
import OTPLimitScreen from '../Screens/OTPLimitScreen';
import PaymentDoneScreen from '../Screens/PaymentDoneScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import ProcessingPaymentScreen from '../Screens/ProcessingPaymentScreen';
import RideDetailScreen from '../Screens/RideDetailScreen';
import SelectPaymentMethodScreen from '../Screens/SelectPaymentMethodScreen';
import SelectRideScreen from '../Screens/SelectRideScreen';
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
    <Stack.Navigator initialRouteName="RideDetailScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="EnterDestinationScreen"
        component={EnterDestinationScreen}
        options={{ title: 'Destination', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="LocateOnMapScreen"
        component={LocateOnMapScreen}
        options={{ title: 'Destination', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="SelectRideScreen"
        component={SelectRideScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationErrorScreen"
        component={LocationErrorScreen}
        options={{ title: 'Location Error', ...TITLE_ONLY_HEADER }}
      />
      <Stack.Screen
        name="InternetErrorScreen"
        component={InternetErrorScreen}
        options={{ title: 'Internet Error', ...TITLE_ONLY_HEADER }}
      />
      <Stack.Screen
        name="ServiceNotAvailableScreen"
        component={ServiceNotAvailableScreen}
        options={{ title: 'Service Not Available', ...TITLE_ONLY_HEADER }}
      />
      <Stack.Screen
        name="VerifyEmailScreen"
        component={VerifyEmailScreen}
        options={{ title: 'Verify Email', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="OTPLimitScreen"
        component={OTPLimitScreen}
        options={{ title: 'OTP Limit', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="ApplyCouponScreen"
        component={ApplyCouponScreen}
        options={{ title: 'Apply Coupon', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="SelectPaymentMethodScreen"
        component={SelectPaymentMethodScreen}
        options={{ title: 'Select Payment Mode', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="ConnectingToDriverScreen"
        component={ConnectingToDriverScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RideDetailScreen"
        component={RideDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CancelRideScreen"
        component={CancelRideScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DestinationArrivedScreen"
        component={DestinationArrivedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProcessingPaymentScreen"
        component={ProcessingPaymentScreen}
        options={{ title: 'Processing Payment', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="PaymentDoneScreen"
        component={PaymentDoneScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
