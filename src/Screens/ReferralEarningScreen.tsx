import React from 'react';
import { ScrollView, Image, Button, View } from 'react-native';
import tw from 'twrnc';

import CouponCard from '../Components/CouponCard';
import TextMedium15 from '../Typography/TextMedium15';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const ReferralEarningScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView contentContainerStyle={tw`p-5`} style={tw`bg-[${COLORS.WHITE}]`}>
      <View style={tw`flex-2 px-3.75 items-center flex-row`}>
        <Image style={tw`h-12 w-12`} source={IMAGES.PIC26} />
        <View style={tw`ml-3.75 flex-1`}>
          <TextRegular12>On sending referral to :</TextRegular12>
          <TextMedium15>Rajat Kumar</TextMedium15>
        </View>
        <View style={tw` items-center`}>
          <TextSemiBold18>₹ 25</TextSemiBold18>
          <TextRegular15>Earned</TextRegular15>
        </View>
      </View>
      <View style={tw`h-7`} />
      <CouponCard
        title="Suggaa"
        description="Get 30% OFF up to ₹25"
        validity="Valid of trips worth ₹100 or more."
        applyAction={() => alert('add here')}
      />
    </ScrollView>
  );
};

export default ReferralEarningScreen;
