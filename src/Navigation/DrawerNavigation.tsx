import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';
import tw from 'twrnc';

import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import AboutNavigation from './AboutNavigation';
import AccountNavigation from './AccountNavigation';
import AuthNavigation from './AuthNavigation';
import DrawerComponent from './DrawerComponent';
import HomeNavigator from './HomeNavigator';
import InsuranceNavigation from './InsuranceNavigation';
import PaymentNavigation from './PaymentNavigation';
import ReferAndEarnNavigation from './ReferAndEarnNavigation';
import SupportNavigation from './SupportNavigation';
import YourRidesNavigation from './YourRidesNavigation';
type iconProps = {
  image: number;
};
const Drawer = createDrawerNavigator();
const Icon = ({ image }: iconProps) => {
  return <Image resizeMode="contain" source={image} />;
};
const LABEL_STYLE = [tw`ml--6 text-4 text-[${COLORS.BLACK}]`, { fontFamily: 'Poppins_400Regular' }];
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.CHINESE_WHITE,
      }}
      drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          drawerIcon: () => <Icon image={IMAGES.RIDES} />,
          drawerLabelStyle: LABEL_STYLE,
        }}
      />
      <Drawer.Screen name="Onboarding" component={AuthNavigation} />
      <Drawer.Screen name="Account" component={AccountNavigation} />
      <Drawer.Screen
        name="Your Rides"
        component={YourRidesNavigation}
        options={{
          drawerIcon: () => <Icon image={IMAGES.RIDES} />,
          drawerLabelStyle: LABEL_STYLE,
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={PaymentNavigation}
        options={{
          drawerIcon: () => <Icon image={IMAGES.PAYMENT} />,
          drawerLabelStyle: LABEL_STYLE,
        }}
      />
      <Drawer.Screen
        name="Insurance"
        component={InsuranceNavigation}
        options={{
          drawerIcon: () => <Icon image={IMAGES.HEART} />,
          drawerLabelStyle: LABEL_STYLE,
        }}
      />
      <Drawer.Screen
        name="Refer and Earn"
        component={ReferAndEarnNavigation}
        options={{
          drawerIcon: () => <Icon image={IMAGES.REFER_AND_EARN} />,
          drawerLabelStyle: LABEL_STYLE,
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportNavigation}
        options={{
          drawerIcon: () => <Icon image={IMAGES.SUPPORT} />,
          drawerLabelStyle: LABEL_STYLE,
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutNavigation}
        options={{
          drawerIcon: () => <Icon image={IMAGES.ABOUT} />,
          drawerLabelStyle: LABEL_STYLE,
        }}
      />
    </Drawer.Navigator>
  );
}
