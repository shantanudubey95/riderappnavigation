import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import InviteEarnedScreen from '../Screens/InviteEarnedScreen';
import InvitePendingScreen from '../Screens/InvitePendingScreen';
import TopTabComponent from './TopTabComponent';

const Tab = createMaterialTopTabNavigator();
export default function TopTabNavigation() {
  return (
    <Tab.Navigator tabBar={(props) => <TopTabComponent {...props} />} initialRouteName="Earned">
      <Tab.Screen
        name="InviteEarnedScreen"
        component={InviteEarnedScreen}
        options={{ tabBarLabel: 'Earned' }}
      />
      <Tab.Screen
        name="InvitePendingScreen"
        component={InvitePendingScreen}
        options={{ tabBarLabel: 'Pending' }}
      />
    </Tab.Navigator>
  );
}
