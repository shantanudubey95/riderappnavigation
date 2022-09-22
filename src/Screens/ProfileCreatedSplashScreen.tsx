import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

const ProfileCreatedSplashScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] w-full p-5 pt-6 items-center justify-around`}>
      <TextSemiBold22>Welcome to</TextSemiBold22>
      <Image source={IMAGES.SUGGAA_LOGO} />
      <TextSemiBold22 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>
        #NoFrustratedDrivers
      </TextSemiBold22>
      <Image source={IMAGES.BIG_TICK} />
    </View>
  );
};

export default ProfileCreatedSplashScreen;
