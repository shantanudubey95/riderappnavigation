import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import DrawerNavigation from "./src/Navigation/DrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
