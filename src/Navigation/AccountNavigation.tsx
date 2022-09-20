import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../Screens/AccountScreen";
import EmergencyContactScreen from "../Screens/EmergencyContactScreen";
import FavoritesLocationScreen from "../Screens/FavouriteLocationScreen";
import SelectLocationScreen from "../Screens/SelectLocationScreen";
import UpdateEmailScreen from "../Screens/UpdateEmailScreen";
import UpdateNameScreen from "../Screens/UpdateNameScreen";
import UpdatePhoneNumberScreen from "../Screens/UpdatePhoneNumberScreen";
import VerifyEmailScreen from "../Screens/VerifyEmailScreen";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="UpdateNameScreen" component={UpdateNameScreen} />
      <Stack.Screen
        name="UpdatePhoneNumberScreen"
        component={UpdatePhoneNumberScreen}
      />
      <Stack.Screen name="UpdateEmailScreen" component={UpdateEmailScreen} />
      <Stack.Screen
        name="FavoritesLocationScreen"
        component={FavoritesLocationScreen}
      />
      <Stack.Screen
        name="EmergencyContactScreen"
        component={EmergencyContactScreen}
      />
      <Stack.Screen
        name="SelectLocationScreen"
        component={SelectLocationScreen}
      />
      <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
    </Stack.Navigator>
  );
}
