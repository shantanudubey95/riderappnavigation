import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import tw from 'twrnc';

import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold12 from '../Typography/TextSemiBold12';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const VerifyEmailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Image source={IMAGES.VERIFY_EMAIL} />
      <TextRegular15
        suppressHighlighting
        style={tw`text-[${COLORS.BLUE}]`}
        onPress={() => {
          navigation.navigate('AccountScreen');
        }}>
        Verify Email
      </TextRegular15>
      <View style={tw`h-6`} />
      <TextSemiBold18>Check your email</TextSemiBold18>
      <View style={tw`h-2.5`} />
      <TextRegular12>Check your email</TextRegular12>
      <TextSemiBold12>anuraggautamsharma@gmail.com</TextSemiBold12>
      <TextRegular12>click on the link to verify your email ID. Post</TextRegular12>
      <TextRegular12>verification it will be added to your account</TextRegular12>
      <View style={tw`flex-1`} />
    </View>
  );
};

export default VerifyEmailScreen;
