import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';
import tw from 'twrnc';

import AboutScreen from '../Screens/AboutScreen';
import TermsConditionScreen from '../Screens/TermsConditionScreen';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

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
export default function AboutNavigation({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: 'About', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
        options={{ title: 'About', ...HEADER(navigation) }}
      />
    </Stack.Navigator>
  );
}
