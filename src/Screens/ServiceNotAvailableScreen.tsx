import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import TextRegular12 from '../Typography/TextRegular12';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const ServiceNotAvailableScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Image source={IMAGES.SERVICE_NOT_AVAILABLE} />
      <View style={tw`h-6`} />
      <TextSemiBold18>Sorry, we don’t serve this location yet</TextSemiBold18>
      <View style={tw`h-2.5`} />
      <TextRegular12>Our services are not available in this city.</TextRegular12>
      <TextRegular12>We will notify you as soon as we launch.</TextRegular12>
      <View style={tw`flex-1`} />
      <View style={tw`w-9/10`}>
        <SuggaaButton
          text="Change Location"
          buttonType="FILLED"
          onPress={() => {
            navigation.navigate('VerifyEmailScreen');
          }}
        />
      </View>
      <View style={tw`h-3`} />
    </View>
  );
};

export default ServiceNotAvailableScreen;
