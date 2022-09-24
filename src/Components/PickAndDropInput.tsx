import React from 'react';
import { View, TextInput, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import TextRegular12 from '../Typography/TextRegular12';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type props = {
  inputTitle: 'Pickup' | 'Drop';
  inputText: string;
  onValueChange: (address: string) => void;
  clearInput: () => void;
  autoFocus?: boolean;
};

export default function PickAndDropInput({
  clearInput,
  onValueChange,
  inputText,
  inputTitle,
  autoFocus,
}: props) {
  return (
    <View style={tw`h-12 p-1.75 shadow-md bg-[${COLORS.WHITE}] rounded-1.25 flex-1 justify-center`}>
      <View style={tw`pl-3.75`}>
        <TextRegular12
          style={tw`text-[${inputTitle === 'Pickup' ? COLORS.SPANISH_VIRIDIAN : COLORS.LUST_RED}]`}>
          {inputTitle}
        </TextRegular12>
      </View>
      <View style={tw`flex-row items-center`}>
        <View
          style={tw`h-1.5 w-1.5 rounded-full bg-[${
            inputTitle === 'Pickup' ? COLORS.SPANISH_VIRIDIAN : COLORS.LUST_RED
          }]`}
        />
        <TextInput
          autoFocus={autoFocus}
          value={inputText}
          selectionColor={COLORS.SPANISH_VIRIDIAN}
          onChangeText={onValueChange}
          style={tw`text-[${COLORS.BLACK}] text-3.75 pl-2 flex-1`}
        />
      </View>
      {inputText && (
        <Pressable onPress={clearInput} style={tw`absolute right-1.5`}>
          <Image source={IMAGES.CLEAR_INPUT} />
        </Pressable>
      )}
    </View>
  );
}
