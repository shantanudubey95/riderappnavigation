import React from 'react';
import { View, Image, Pressable } from 'react-native';
import tw from 'twrnc';

import TextRegular15 from '../Typography/TextRegular15';
import * as IMAGES from '../config/images';

type props = {
  payment: string;
  image: number;
  onPress?: () => void;
};

export default function InviteCard({ payment, image, onPress }: props) {
  return (
    <Pressable
      onPress={onPress}
      style={tw`h-12.5 rounded-1.25 shadow-md bg-white mb-4 px-3.75 items-center flex-row`}>
      <Image style={tw`h-8 w-8 mr-3 `} source={image} />
      <TextRegular15>{payment}</TextRegular15>
      <View style={tw`flex-1`} />
      <Image source={IMAGES.ARROW_RIGHT_GREEN} style={tw`h-7 w-7`} />
    </Pressable>
  );
}
