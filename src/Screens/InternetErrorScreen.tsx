import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import tw from 'twrnc';

import TextRegular12 from '../Typography/TextRegular12';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

const InternetErrorScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Image source={IMAGES.INTERNET_ERROR} />
      <View style={tw`h-6`} />
      <TextSemiBold18>Unable to proceed without internet</TextSemiBold18>
      <View style={tw`h-2.5`} />
      <TextRegular12>No internet connectivity detected. Please</TextRegular12>
      <TextRegular12>check your Network Settings and try again</TextRegular12>
      <View style={tw`flex-1`} />
    </View>
  );
};

export default InternetErrorScreen;
