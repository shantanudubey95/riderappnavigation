import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ApplyCouponScreen from '../Screens/ApplyCouponScreen';
import HomeScreen from '../Screens/HomeScreen';
import InternetErrorScreen from '../Screens/InternetErrorScreen';
import LocationErrorScreen from '../Screens/LocationErrorScreen';
import OTPLimitScreen from '../Screens/OTPLimitScreen';
import PaymentDoneScreen from '../Screens/PaymentDoneScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import ProcessingPaymentScreen from '../Screens/ProcessingPaymentScreen';
import ServiceNotAvailableScreen from '../Screens/ServiceNotAvailableScreen';
import VerifyEmailScreen from '../Screens/VerifyEmailScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LocationErrorScreen" component={LocationErrorScreen} />
      <Stack.Screen name="InternetErrorScreen" component={InternetErrorScreen} />
      <Stack.Screen name="ServiceNotAvailableScreen" component={ServiceNotAvailableScreen} />
      <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
      <Stack.Screen name="OTPLimitScreen" component={OTPLimitScreen} />
      <Stack.Screen name="ApplyCouponScreen" component={ApplyCouponScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="ProcessingPaymentScreen" component={ProcessingPaymentScreen} />
      <Stack.Screen name="PaymentDoneScreen" component={PaymentDoneScreen} />
    </Stack.Navigator>
  );
}
