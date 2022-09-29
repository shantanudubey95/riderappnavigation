import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';

import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';

type item = {
  address: string;
  type: string;
};

type Props = {
  route: [item];
};

export default function RoutePoints({ route }: Props) {
  return (
    <View style={tw`w-full`}>
      {route.map((item, index) => (
        <Pressable key={index} style={tw`w-full`}>
          <View style={tw`flex-row `}>
            <View
              style={tw`w-4 h-4 bg-[${
                item.type === 'pickup'
                  ? COLORS.SPANISH_VIRIDIAN
                  : item.type === 'stop'
                  ? COLORS.LUST_RED
                  : COLORS.APPLE_GREEN
              }] rounded-full mr-2.5 self-start`}
            />
            <TextRegular15 style={tw`text-[${COLORS.BLACK}]`}>{item.address}</TextRegular15>
          </View>
          {index < route.length - 1 && (
            <View style={tw`h-4.5 w-0.25 mb-1 mx-1.75 bg-[${COLORS.LIGHT_GRAY_BORDER}]`} />
          )}
        </Pressable>
      ))}
    </View>
  );
}
