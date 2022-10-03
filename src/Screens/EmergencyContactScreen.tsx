import React from 'react';
import { StatusBar, View, Image, Pressable } from 'react-native';
import tw from 'twrnc';

import NavigateIconButton from '../Components/NavigateIconButton';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const EmergencyContactScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: '4%' }}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <TextRegular15>
        You can add up to 5 people. In case of emergency they will be informed
      </TextRegular15>
      <View style={tw`h-5`} />

      <Pressable
        style={tw`flex-row w-full items-center`}
        onPress={() => {
          navigation.navigate('EditEmergencyContactScreen');
        }}>
        <Image source={IMAGES.PROFILE} style={tw`h-5 w-5 mr-2.5`} />
        <View>
          <TextRegular15>Mummy</TextRegular15>
          <TextRegular12 style={tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            Not sharing details
          </TextRegular12>
        </View>
        <View style={tw`flex-1`} />
        <Image source={IMAGES.ARROW_RIGHT_GREEN} resizeMode="contain" style={tw`h-7 w-7 mr-4`} />
      </Pressable>
      <View style={tw`h-5`} />
      <NavigateIconButton
        onPress={() => {
          navigation.navigate('AccountScreen');
        }}
        isRed={false}
        title=" Add Emergency Contacts"
        icon={IMAGES.ADD}
      />
    </View>
  );
};

export default EmergencyContactScreen;
