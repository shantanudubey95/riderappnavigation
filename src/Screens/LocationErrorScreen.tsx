import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import TextRegular12 from '../Typography/TextRegular12';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const LocationErrorScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Image source={IMAGES.LOCATION_ERROR} />
      <View style={tw`h-6`} />
      <TextSemiBold18>Location Permission not enabled</TextSemiBold18>
      <View style={tw`h-2.5`} />
      <TextRegular12>Sharing location permission helps us</TextRegular12>
      <TextRegular12>improve ride booking and pickup</TextRegular12>
      <TextRegular12>experience</TextRegular12>
      <View style={tw`flex-1`} />
      <View style={tw`w-9/10`}>
        <SuggaaButton
          text="Share Location"
          buttonType="FILLED"
          onPress={() => {
            navigation.navigate('ServiceNotAvailableScreen');
          }}
        />
      </View>
      <View style={tw`h-3`} />
    </View>
  );
};

export default LocationErrorScreen;
