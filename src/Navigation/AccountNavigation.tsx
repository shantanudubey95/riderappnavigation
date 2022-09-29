import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';
import tw from 'twrnc';

import AccountScreen from '../Screens/AccountScreen';
import EmergencyContactScreen from '../Screens/EmergencyContactScreen';
import FavoritesLocationScreen from '../Screens/FavouriteLocationScreen';
import LocateFavouriteScreen from '../Screens/LocateFavouriteScreen';
import SelectFavouriteLocationScreen from '../Screens/SelectFavouriteLocationScreen';
import SelectLocationScreen from '../Screens/SelectLocationScreen';
import UpdateEmailScreen from '../Screens/UpdateEmailScreen';
import UpdateNameScreen from '../Screens/UpdateNameScreen';
import UpdatePhoneNumberScreen from '../Screens/UpdatePhoneNumberScreen';
import VerifyEmailScreen from '../Screens/VerifyEmailScreen';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const Stack = createNativeStackNavigator();
const TITLE_ONLY_HEADER: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: COLORS.WHITE },
  headerTitleStyle: { fontFamily: 'Poppins_600SemiBold', fontSize: 18 },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerBackVisible: false,
};
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
        name="AccountScreen"
        component={AccountScreen}
        options={{ title: 'Account', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="UpdateNameScreen"
        component={UpdateNameScreen}
        options={{ title: 'Update Name', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="UpdatePhoneNumberScreen"
        component={UpdatePhoneNumberScreen}
        options={{ title: 'Update Phone Number', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="UpdateEmailScreen"
        component={UpdateEmailScreen}
        options={{ title: 'Update Email', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="FavoritesLocationScreen"
        component={FavoritesLocationScreen}
        options={{ title: 'Favorites Location', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="SelectFavouriteLocationScreen"
        component={SelectFavouriteLocationScreen}
        options={{ title: 'Select Location', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="LocateFavouriteScreen"
        component={LocateFavouriteScreen}
        options={{ title: 'Destination', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="EmergencyContactScreen"
        component={EmergencyContactScreen}
        options={{ title: 'Setup Emergency Contact', ...HEADER(navigation) }}
      />
      <Stack.Screen name="SelectLocationScreen" component={SelectLocationScreen} />
      <Stack.Screen
        name="VerifyEmailScreen"
        component={VerifyEmailScreen}
        options={{ title: 'Verify Email', ...TITLE_ONLY_HEADER }}
      />
    </Stack.Navigator>
  );
}
