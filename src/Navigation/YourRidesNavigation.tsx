import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';
import tw from 'twrnc';

import RideSupportScreen from '../Screens/RideSupportScreen';
import YourRideDetailScreen from '../Screens/YourRideDetailScreen';
import YourRideScreen from '../Screens/YourRideScreen';
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

export default function YourRidesNavigation({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="YourRideScreen"
        component={YourRideScreen}
        options={{ title: 'Destination', ...HEADER(navigation) }}
      />
      <Stack.Screen name="YourRideDetailScreen" component={YourRideDetailScreen} />
      <Stack.Screen name="RideSupportScreen" component={RideSupportScreen} />
    </Stack.Navigator>
  );
}
