import React from 'react';
import { StatusBar, View } from 'react-native';
import tw from 'twrnc';

import NavigateIconButton from '../Components/NavigateIconButton';
import SuggaaSwitch from '../Components/SuggaaSwitch';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const EditEmergencyContactScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: '4%' }}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <TextSemiBold18>Mummy</TextSemiBold18>
      <View style={tw`h-2`} />
      <TextRegular15>+91 9570919010</TextRegular15>
      <View style={tw`h-5`} />
      <View style={tw`flex-row w-full`}>
        <View>
          <TextRegular15 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>
            Always sharing details
          </TextRegular15>
          <TextRegular12 style={tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            Share ride tracking link and driver details
          </TextRegular12>
        </View>
        <View style={tw`flex-1`} />
        <SuggaaSwitch />
      </View>
      <View style={tw`h-8`} />
      <NavigateIconButton
        onPress={() => {
          navigation.navigate('AccountScreen');
        }}
        isRed
        title="Delete"
        icon={IMAGES.DELETE_RED}
      />
    </View>
  );
};

export default EditEmergencyContactScreen;
