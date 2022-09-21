import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RideDetailScreen from '../Screens/RideDetailScreen';
import RideSupportScreen from '../Screens/RideSupportScreen';
import YourRideScreen from '../Screens/YourRideScreen';

const Stack = createNativeStackNavigator();

export default function YourRidesNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="YourRideScreen" component={YourRideScreen} />
      <Stack.Screen name="RideDetailScreen" component={RideDetailScreen} />
      <Stack.Screen name="RideSupportScreen" component={RideSupportScreen} />
    </Stack.Navigator>
  );
}
