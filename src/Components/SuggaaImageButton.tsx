import React from 'react';
import { Pressable, Image } from 'react-native';
import type { PressableProps } from 'react-native';
import tw from 'twrnc';

import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
type props = PressableProps & {
  text: string;
  buttonType: 'FILLED' | 'BORDER' | 'DISABLED';
  imageId: number;
};
export default function SuggaaImageButton({ onPress, text, buttonType, imageId }: props) {
  return (
    <Pressable
      style={tw`${
        buttonType === 'FILLED'
          ? `bg-[${COLORS.SPANISH_VIRIDIAN}]`
          : buttonType === 'BORDER'
          ? ` bg-[${COLORS.WHITE}]`
          : buttonType === 'DISABLED'
          ? `bg-[${COLORS.LIGHT_GRAY_BORDER}]`
          : ''
      } shadow-md rounded-1.25 p-2.25 items-center flex-1 self-stretch flex-row justify-center`}
      onPress={onPress}>
      <Image style={tw`mr-1.75`} source={imageId} />
      <TextSemiBold15
        numberOfLines={1}
        style={tw`${
          buttonType === 'BORDER' ? `text-[${COLORS.SPANISH_VIRIDIAN}]` : `text-[${COLORS.WHITE}]`
        } top-0.5`}>
        {text}
      </TextSemiBold15>
    </Pressable>
  );
}
