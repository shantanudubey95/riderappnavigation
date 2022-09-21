import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InsuranceScreen from '../Screens/InsuranceScreen';
const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InsuranceScreen" component={InsuranceScreen} />
    </Stack.Navigator>
  );
}
