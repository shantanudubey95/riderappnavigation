import { createDrawerNavigator } from '@react-navigation/drawer';
import ReferAndEarnScreen from '../Screens/ReferAndEarnScreen';
import AboutNavigation from './AboutNavigation';

import AccountNavigation from './AccountNavigation';
import AuthNavigation from './AuthNavigation';
import HomeNavigator from './HomeNavigator';
import InsuranceNavigation from './InsuranceNavigation';
import PaymentNavigation from './PaymentNavigation';
import ReferAndEarnNavigation from './ReferAndEarnNavigation';
import SettingNavigation from './SettingNavigation';
import SupportNavigation from './SupportNavigation';
import YourRidesNavigation from './YourRidesNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Onboarding" component={AuthNavigation} />
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Account" component={AccountNavigation} />
      <Drawer.Screen name="Your Rides" component={YourRidesNavigation} />
      <Drawer.Screen name="Payments" component={PaymentNavigation} />
      <Drawer.Screen name="Insurance" component={InsuranceNavigation} />
      <Drawer.Screen name="Refer and Earn" component={ReferAndEarnNavigation} />
      <Drawer.Screen name="Support" component={SupportNavigation} />
      <Drawer.Screen name="Settings" component={SettingNavigation} />
      <Drawer.Screen name="About" component={AboutNavigation} />
    </Drawer.Navigator>
  );
}
