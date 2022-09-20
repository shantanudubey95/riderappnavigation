import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EnterNameAndEmailScreen from "../Screens/EnterNameAndEmailScreen";
import EnterOTPScreen from "../Screens/EnterOtpScreen";
import EnterPhoneNumberScreen from "../Screens/EnterPhoneNumberScreen";
import PrivacyAndTermsScreen from "../Screens/PrivacyAndTermsScreen";
import ProfileCreatedSplashScreen from "../Screens/ProfileCreatedSplashScreen";
import SelectGenderScreen from "../Screens/SelectGenderScreen";
import SplashScreen from "../Screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="EnterPhoneNumberScreen"
        component={EnterPhoneNumberScreen}
      />
      <Stack.Screen name="EnterOTPScreen" component={EnterOTPScreen} />
      <Stack.Screen
        name="EnterNameAndEmailScreen"
        component={EnterNameAndEmailScreen}
      />
      <Stack.Screen name="SelectGenderScreen" component={SelectGenderScreen} />
      <Stack.Screen
        name="ProfileCreatedSplashScreen"
        component={ProfileCreatedSplashScreen}
      />
      <Stack.Screen
        name="PrivacyAndTermsScreen"
        component={PrivacyAndTermsScreen}
      />
    </Stack.Navigator>
  );
}
