import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Payments from '../Screens/Payments';

const Stack = createNativeStackNavigator();

export default function PaymentNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Payments" component={Payments} />
    </Stack.Navigator>
  );
}
