import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import tw from 'twrnc';

import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

const OTPLimitScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Image source={IMAGES.OTP_LIMIT} />
      <TextRegular15
        suppressHighlighting
        style={tw`text-[${COLORS.BLUE}]`}
        onPress={() => {
          navigation.navigate('InternetErrorScreen');
        }}>
        Edit phone number
      </TextRegular15>
      <View style={tw`h-6`} />
      <TextSemiBold18>Max OTP reached</TextSemiBold18>
      <View style={tw`h-2.5`} />
      <TextRegular12>Please try again later</TextRegular12>
      <View style={tw`flex-1`} />
    </View>
  );
};

export default OTPLimitScreen;
