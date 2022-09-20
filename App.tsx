import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import MyDrawer from "./src/Navigation/DrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
