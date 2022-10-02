import React from 'react';
import { Image, View } from 'react-native';
import tw from 'twrnc';

import TextSemiBold18 from '../Typography/TextSemiBold18';

const InsuranceScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={tw`flex-1 items-center bg-white`}>
      <Image source={require('../../assets/NoInsurance.png')} />
      <TextSemiBold18>Coming Soon!</TextSemiBold18>
    </View>
  );
};

export default InsuranceScreen;
