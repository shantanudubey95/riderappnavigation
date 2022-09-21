import { createDrawerNavigator } from '@react-navigation/drawer';

import AccountNavigation from './AccountNavigation';
import AuthNavigation from './AuthNavigation';
import HomeNavigator from './HomeNavigator';
import YourRidesNavigation from './YourRidesNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Onboarding" component={AuthNavigation} />
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Account" component={AccountNavigation} />
      <Drawer.Screen name="Your Rides" component={YourRidesNavigation} />
    </Drawer.Navigator>
  );
}
