import React from 'react';
import { View, Image, Pressable } from 'react-native';
import tw from 'twrnc';

import TextMedium15 from '../Typography/TextMedium15';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type props = {
  name: string;
  image: number;
  amount: number;
  onPress?: () => void;
  status: 'Earned' | 'Pending';
};

export default function InviteCard({ name, image, status, amount, onPress }: props) {
  return (
    <View style={tw`h-33.5 rounded-1.25 shadow-md bg-white mb-4`}>
      <View style={tw`flex-2 px-3.75 items-center flex-row`}>
        <Image style={tw`h-12 w-12`} source={image} />
        <View style={tw`ml-3.75 flex-1`}>
          <TextRegular12>On sending referal to :</TextRegular12>
          <TextMedium15>{name}</TextMedium15>
        </View>
        <View style={tw` items-center`}>
          <TextSemiBold18>₹ {amount}</TextSemiBold18>
          <TextRegular15>{status}</TextRegular15>
        </View>
      </View>
      {status === 'Pending' ? (
        <View
          style={tw`flex-1 px-3.75 py-1.75 border-t border-t-[${COLORS.LIGHT_GRAY_BORDER}] justify-center`}>
          <TextRegular12 style={tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            earning will get valid when Rajat will take his first trip with Suggaa.
          </TextRegular12>
        </View>
      ) : (
        <Pressable
          onPress={onPress}
          style={tw`flex-1 px-3.75 py-1.75 border-t border-t-[${COLORS.LIGHT_GRAY_BORDER}] justify-between items-center flex-row`}>
          <TextRegular15 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>
            Use referral earning
          </TextRegular15>
          <Image style={tw`h-6 w-6`} source={IMAGES.ARROW_RIGHT_GREEN} />
        </Pressable>
      )}
    </View>
  );
}
