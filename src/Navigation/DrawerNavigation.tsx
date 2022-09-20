import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../Screens/ProfileScreen";
import AuthNavigation from "./AuthNavigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="HomeScreen" component={AuthNavigation} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
