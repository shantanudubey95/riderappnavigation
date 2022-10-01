import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import TextRegular20 from '../Typography/TextRegular20';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
type props = {
  title: string;
  isActive: boolean;
  onPress: (title: string) => void;
};

export default function SuggaaSelectGender({ title, isActive, onPress }: props) {
  return (
    <Pressable
      onPress={() => onPress(title)}
      style={tw`h-12 px-7.75 bg-[${
        isActive ? COLORS.SPANISH_VIRIDIAN : COLORS.WHITE
      }] border-2 items-center justify-center flex-row rounded-md border-[${
        !isActive ? COLORS.SILVER_FOIL : COLORS.SPANISH_VIRIDIAN
      }]`}>
      <TextRegular20 style={tw`text-[${isActive ? COLORS.WHITE : COLORS.LIGHT_GRAY_BORDER}]`}>
        {title}
      </TextRegular20>
      <Image style={tw`absolute top-1.5 right-2`} source={IMAGES.TICK} />
    </Pressable>
  );
}
