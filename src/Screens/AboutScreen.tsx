import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import SettingsButton from '../Components/SettingsButton';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type Props = any;

export default function AboutScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={tw`flex-1 items-center px-5 pt-5 bg-[${COLORS.WHITE}]`}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />

      <SettingsButton
        title="Terms & Conditions"
        onPress={() => {
          navigation.navigate('TermsConditionScreen');
        }}
      />
      <View style={tw`h-2.5`} />
      <SettingsButton title="Privacy Policy" onPress={() => {}} />

      <View style={tw`flex-1 items-center justify-center`}>
        <View style={tw`items-center justify-center`}>
          <Image source={IMAGES.SPLASH_SCREEN_LOGO} resizeMode="contain" />
        </View>
      </View>
      <SettingsButton title="Rate us on Play Store" onPress={() => {}} />
      <View style={tw`h-10`} />
      <View style={[{ paddingBottom: insets.bottom || 20 }]}>
        <TextRegular15>
          Version <TextSemiBold15>1.0</TextSemiBold15>
        </TextRegular15>
      </View>
    </View>
  );
}
