import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingScreen from '../Screens/SettingScreen';
const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
}
