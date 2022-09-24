import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

const ProfileCreatedSplashScreen = ({ navigation }: { navigation: any }) => {
  const ANIMATION = require('../../assets/tick.json');
  const [, setAnimationFinished] = React.useState(false);
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] w-full p-5 pt-6 items-center `}>
      <TextSemiBold22
        style={tw`mt-25`}
        onPress={() => {
          navigation.navigate('PrivacyAndTermsScreen');
        }}>
        Welcome
      </TextSemiBold22>
      <View style={tw`h-14`} />
      <Image source={IMAGES.SUGGAA_LOGO} />
      <TextSemiBold22 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}] mt-6.25`}>
        #NoFrustratedDrivers
      </TextSemiBold22>
      <View style={tw`mt-11.5 h-37.5 w-37.5`}>
        <LottieView
          onAnimationFinish={() => setAnimationFinished(true)}
          autoPlay
          source={ANIMATION}
          loop={false}
          style={tw`flex-1`}
        />
      </View>
      <TextSemiBold22>Profile created</TextSemiBold22>
    </View>
  );
};

export default ProfileCreatedSplashScreen;
