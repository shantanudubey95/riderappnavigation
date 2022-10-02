import React from 'react';
import { Pressable } from 'react-native';
import type { PressableProps } from 'react-native';
import tw from 'twrnc';

import TextMedium22 from '../Typography/TextMedium22';
import * as COLORS from '../config/colors';
type props = PressableProps & {
  text: string;
  buttonType: 'FILLED' | 'BORDER' | 'DISABLED';
  onPress: () => void;
};
export default function SuggaaButton({ onPress, text, buttonType }: props) {
  return (
    <Pressable
      style={tw`${
        buttonType === 'FILLED'
          ? `bg-[${COLORS.SPANISH_VIRIDIAN}]`
          : buttonType === 'BORDER'
          ? `border-2 border-[${COLORS.SPANISH_VIRIDIAN}]`
          : buttonType === 'DISABLED'
          ? `bg-[${COLORS.LIGHT_GRAY_BORDER}]`
          : ''
      }  rounded-1.25 justify-center px-3 items-center self-stretch h-15`}
      onPress={() => buttonType !== 'DISABLED' && onPress()}>
      <TextMedium22
        numberOfLines={1}
        style={tw`${
          buttonType === 'BORDER' ? `text-[${COLORS.SPANISH_VIRIDIAN}]` : `text-[${COLORS.WHITE}]`
        }`}>
        {text}
      </TextMedium22>
    </Pressable>
  );
}
