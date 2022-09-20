import { createDrawerNavigator } from "@react-navigation/drawer";

import AuthNavigation from "./AuthNavigation";
import HomeNavigator from "./HomeNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Onboarding" component={AuthNavigation} />
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
