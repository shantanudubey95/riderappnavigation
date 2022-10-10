import { CommonActions } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Pressable, Image } from 'react-native';
import tw from 'twrnc';

import PaymentUpiScreen from '../Screens/PaymentUpiScreen';
import Payments from '../Screens/Payments';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import AddUpiScreen from '../Screens/AddUpiScreen';
import AddCardScreen from '../Screens/AddCardScreen';
import AddCashScreen from '../Screens/AddCashScreen';
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
export default function PaymentNavigation({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Payments"
        component={Payments}
        options={{ title: 'Payments', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="PaymentUpiScreen"
        component={PaymentUpiScreen}
        options={{ title: '', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="AddUpiScreen"
        component={AddUpiScreen}
        options={{ title: '', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={{ title: '', ...HEADER(navigation) }}
      />
      <Stack.Screen
        name="AddCashScreen"
        component={AddCashScreen}
        options={{ title: '', ...HEADER(navigation) }}
      />
    </Stack.Navigator>
  );
}
