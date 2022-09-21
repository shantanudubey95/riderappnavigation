import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SupportScreen from '../Screens/SupportScreen';
const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
    </Stack.Navigator>
  );
}
