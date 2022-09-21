import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from '../Screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function AboutNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
}
