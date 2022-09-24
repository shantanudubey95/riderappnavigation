import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Image, StatusBar, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import TextRegular12 from '../Typography/TextRegular12';
import TextRegular20 from '../Typography/TextRegular20';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const ANIMATION = require('../../assets/OnboardingAnimation.json');
  const [, setAnimationFinished] = React.useState(false);
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor={COLORS.BRIGHT_GREY} barStyle="dark-content" />
      <View style={tw`flex-1 justify-center bg-[${COLORS.BRIGHT_GREY}]`}>
        <LottieView
          onAnimationFinish={() => setAnimationFinished(true)}
          autoPlay
          source={ANIMATION}
          loop={false}
          style={tw`h-full`}
        />
      </View>
      <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center pl-5 pr-5 pt-5`}>
        {/* <View style={tw`flex-1 bg-[${COLORS.LUST_RED_LIGHT}] items-center justify-between`}> */}
        <View style={tw`w-full mt-5`}>
          <TextSemiBold22>Enter Phone Number</TextSemiBold22>
          <Pressable
            onPress={() => navigation.navigate('EnterPhoneNumberScreen')}
            style={tw`flex-row w-full border-2 border-[${COLORS.SPANISH_VIRIDIAN}] rounded-1.25 p-2.25 items-center mt-5`}>
            <Image
              source={require('../../assets/Flag.png')}
              style={{ height: 20, width: 33, marginLeft: 7 }}
            />
            <TextRegular20 style={{ marginTop: 3, marginLeft: 11 }}>+91</TextRegular20>
          </Pressable>
        </View>
        <View style={tw`flex-1`} />
        <View style={[tw`w-full`, { paddingBottom: insets.bottom || 20 }]}>
          <TextRegular12 style={tw`text-center`}>
            If you are creating a new account,
            <TextRegular12 style={tw`text-[${COLORS.BLUE}]`}>
              {' '}
              Terms & Conditions
            </TextRegular12> and{' '}
            <TextRegular12 style={tw`text-[${COLORS.BLUE}]`}>Privacy Policy</TextRegular12> will
            apply.
          </TextRegular12>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
