import React from 'react';
import { View, Image, Text, Pressable, Share, ImageBackground, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import ReferCode from '../Components/ReferCode';
import SuggaaButton from '../Components/SuggaaButton';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import { ROOT_VIEW_STYLE } from '../config/utils';

export default function InvitedScreen() {
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
  const insets = useSafeAreaInsets();
  return (
    <View style={tw`flex-1 px-5 pt-5 bg-[${COLORS.WHITE}]`}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <TextSemiBold22>No Invites yet</TextSemiBold22>
      <TextRegular15>
        Once someone uses your code to sign up. You will be able to see them here!
      </TextRegular15>
      <View style={tw`flex-1`} />
      <ReferCode code={referCode} />
      <View style={tw`h-6.25`} />
      <SuggaaButton buttonType="FILLED" text="Share Code" onPress={onShare} />
      <View style={[tw`h-1`, { paddingBottom: insets.bottom + 20 }]} />
    </View>
  );
}
