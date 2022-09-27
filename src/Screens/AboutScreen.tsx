import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import tw from 'twrnc';

import SettingsButton from '../Components/SettingsButton';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import { ROOT_VIEW_STYLE } from '../config/utils';

type Props = any;

export default function AboutScreen({ navigation }: Props) {
  return (
    <View style={ROOT_VIEW_STYLE}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />

      <SettingsButton title="Terms & Conditions" onPress={() => {}} />
      <View style={tw`h-2.5`} />
      <SettingsButton title="Privacy Policy" onPress={() => {}} />

      <View style={tw`flex-1 items-center justify-center`}>
        <View style={tw`items-center justify-center`}>
          <Image source={IMAGES.SPLASH_SCREEN_LOGO} resizeMode="contain" />
          <View
            style={tw`bg-[${COLORS.SPANISH_VIRIDIAN}] items-center justify-center w-32.75 h-8.75 rounded-md mt-2.75 absolute self-center bottom--11.5 right-0`}>
            <TextSemiBold22 style={tw`text-[${COLORS.WHITE}]`}>Sathi</TextSemiBold22>
          </View>
        </View>
      </View>

      <View style={tw`absolute bottom-0`}>
        <TextRegular15>
          Version <TextSemiBold15>1.0</TextSemiBold15>
        </TextRegular15>
      </View>
    </View>
  );
}
