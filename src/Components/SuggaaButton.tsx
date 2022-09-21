import React from 'react';
import { Pressable } from 'react-native';
import type { PressableProps } from 'react-native';
import tw from 'twrnc';

import TextMedium25 from '../Typography/TextMedium25';
import * as COLORS from '../config/colors';
type props = PressableProps & {
  text: string;
  buttonType: 'FILLED' | 'BORDER' | 'DISABLED';
};
export default function SuggaButton({ onPress, text, buttonType }: props) {
  return (
    <Pressable
      style={tw`${
        buttonType === 'FILLED'
          ? `bg-[${COLORS.SPANIS_VIRIDIAN}]`
          : buttonType === 'BORDER'
          ? `border-2 border-[${COLORS.SPANIS_VIRIDIAN}]`
          : buttonType === 'DISABLED'
          ? `bg-[${COLORS.LIGHT_GRAY_BORDER}]`
          : ''
      }  rounded-1.25 p-2.25 items-center  self-stretch`}
      onPress={onPress}>
      <TextMedium25
        numberOfLines={1}
        style={tw`text-5  ${
          buttonType === 'BORDER' ? `text-[${COLORS.SPANIS_VIRIDIAN}]` : `text-[${COLORS.WHITE}]`
        }`}>
        {text}
      </TextMedium25>
    </Pressable>
  );
}
