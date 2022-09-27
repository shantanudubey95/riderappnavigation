import React from 'react';
import { View, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type props = {
  title: string;
  icon: number;
  isRed: boolean;
  onPress: () => void;
};

export default function CouponCard({ title, icon, onPress, isRed }: props) {
  return (
    <Pressable
      style={tw`h-12.5 px-3.75 w-full shadow-md rounded-1.25 items-center flex-row bg-[${COLORS.WHITE}]`}
      onPress={onPress}>
      <Image style={tw`mr-3`} source={icon} resizeMode="contain" />
      {isRed ? (
        <>
          <TextSemiBold18 style={tw`text-[${COLORS.LUST_RED}]`}>{title}</TextSemiBold18>
          <View style={tw`flex-1`} />
          <Image
            style={{ tintColor: COLORS.LUST_RED }}
            source={IMAGES.ARROW_RIGHT_GREEN}
            resizeMode="contain"
          />
        </>
      ) : (
        <>
          <TextSemiBold18>{title}</TextSemiBold18>
          <View style={tw`flex-1`} />
          <Image source={IMAGES.ARROW_RIGHT_GREEN} resizeMode="contain" />
        </>
      )}
    </Pressable>
  );
}
