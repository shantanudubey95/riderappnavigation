import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import React from 'react';
import { View, Image, Pressable } from 'react-native';
import tw from 'twrnc';

import TextMedium20 from '../Typography/TextMedium20';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

export default function DrawerComponent(props: DrawerContentComponentProps) {
  return (
    <View style={tw`flex-1`}>
      {/* <StatusBar backgroundColor={COLORS.SPANISH_VIRIDIAN} /> */}
      <DrawerContentScrollView {...props} contentContainerStyle={tw`bg-[${COLORS.WHITE}] bottom-1`}>
        <Pressable
          style={tw`p-5 mb-4 bg-[${COLORS.SPANISH_VIRIDIAN}]`}
          onPress={() => {
            props.navigation.navigate('Account');
          }}>
          <Image source={IMAGES.PROFILE_ICON} />
          <View style={tw`flex-row items-center mt-2.75`}>
            <TextMedium20 style={tw`text-[${COLORS.WHITE}]`}>Anurag Gautam</TextMedium20>
            <View style={tw`flex-1`} />
            <Image source={IMAGES.RIGHT_ARROW} />
          </View>
        </Pressable>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
