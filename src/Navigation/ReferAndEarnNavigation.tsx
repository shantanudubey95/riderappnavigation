import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReferAndEarnScreen from '../Screens/ReferAndEarnScreen';
const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReferAndEarnScreen" component={ReferAndEarnScreen} />
    </Stack.Navigator>
  );
}
