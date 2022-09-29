import React from 'react';
import { View, Image, Text, Pressable, Share, ImageBackground, StatusBar } from 'react-native';
import tw from 'twrnc';

import ReferCode from '../Components/ReferCode';
import SuggaaButton from '../Components/SuggaaButton';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import { ROOT_VIEW_STYLE } from '../config/utils';

export default function ReferAndEarnScreen({ navigation }: { navigation: any }) {
  const referCode = 'SUGGAA OFF25';

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: referCode,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      // catch error
    }
  };

  return (
    <View style={ROOT_VIEW_STYLE}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <ImageBackground
        resizeMode="contain"
        source={IMAGES.REFER_EARN_BANNER}
        style={tw`flex-1 w-full mb-7.5`}
      />
      <View style={tw`w-full`}>
        <TextSemiBold18 style={tw`text-center`}>
          Invite your friends and get {'\n'} ₹20 each{' '}
        </TextSemiBold18>

        <View style={tw`mt-6.75 mb-8.25 w-full shadow-md bg-[${COLORS.WHITE}] rounded-1.25`}>
          <View
            style={tw`flex-row border-0.25 rounded-t-1.25 border-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            <View
              style={tw`py-5 flex-1 items-center border-r-0.25 border-[${COLORS.LIGHT_GRAY_BORDER}]`}>
              <TextSemiBold18>₹0</TextSemiBold18>
              <Text style={tw`text-3.75 text-[${COLORS.BLACK}]`}>Earned</Text>
            </View>

            <View style={tw`py-5 flex-1 items-center`}>
              <TextSemiBold18>₹0</TextSemiBold18>
              <TextRegular15>Pending</TextRegular15>
            </View>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate('InvitedScreen');
            }}
            style={tw`px-3.5 pt-4 pb-3.25 flex-row items-center`}>
            <TextRegular15 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>See all</TextRegular15>
            <View style={tw`flex-1`} />
            <Image source={IMAGES.ARROW_RIGHT_GREEN} />
          </Pressable>
        </View>
        <ReferCode code={referCode} />
      </View>
      <View style={tw`h-7.5`} />
      <SuggaaButton buttonType="FILLED" text="Share Code" onPress={onShare} />
    </View>
  );
}
