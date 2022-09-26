import React from 'react';
import { View, Pressable } from 'react-native';
import tw from 'twrnc';

import * as COLORS from '../config/colors';

type props = {
  title?: string;
  isActive: boolean;
  onPress?: (title: string) => void;
};

export default function SuggaaCheckBox({ title, isActive, onPress }: props) {
  return (
    <Pressable
      onPress={() => {}}
      style={tw`border border-[${COLORS.BLACK}] h-5 w-5 items-center justify-center rounded-full`}>
      {isActive && (
        <View
          style={tw`h-3.5 w-3.5 rounded-full bg-[${
            isActive ? COLORS.SPANISH_VIRIDIAN : COLORS.WHITE
          }]`}
        />
      )}
    </Pressable>
  );
}
