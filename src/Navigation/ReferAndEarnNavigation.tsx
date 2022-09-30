import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';
import tw from 'twrnc';

import InvitedScreen from '../Screens/InvitedScreen';
import ReferAndEarnScreen from '../Screens/ReferAndEarnScreen';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import TopTabNavigation from './TopTabNavigation';
import ReferralEarningScreen from '../Screens/ReferralEarningScreen';
const Stack = createNativeStackNavigator();
function HEADER(navigation: any): NativeStackNavigationOptions {
  return {
    headerStyle: { backgroundColor: COLORS.WHITE },
    headerTitleStyle: { fontFamily: 'Poppins_600SemiBold', fontSize: 18 },
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',
    headerLeft: () => (
      <Pressable style={tw`ml-1.5`} onPress={() => navigation.dispatch(CommonActions.goBack())}>
        <Image source={IMAGES.HEADER_BACK_ARROW} />
      </Pressable>
    ),
  };
}

export default function AccountNavigation({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ReferAndEarnScreen"
        component={ReferAndEarnScreen}
        options={{ title: 'Refer and Earn', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="InvitedScreen"
        component={TopTabNavigation}
        options={{ title: 'Invites', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="ReferralEarningScreen"
        component={ReferralEarningScreen}
        options={{ title: 'Referral Earnings', ...HEADER(navigation) }}
      />
    </Stack.Navigator>
  );
}
