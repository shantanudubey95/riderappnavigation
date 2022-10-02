import React from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';
import tw from 'twrnc';

import NavigateIconButton from '../Components/NavigateIconButton';
import ProfilePicture from '../Components/ProfilePicture';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular20 from '../Typography/TextRegular20';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type Props = any;

export default function AccountScreen({ navigation }: Props) {
  const PressableView = (
    title: string,
    value: string,
    onPress: () => void,
    isVerified?: boolean
  ) => {
    return (
      <Pressable
        style={tw`w-full pb-7.75 items-center flex-row pr-1 bg-[${COLORS.WHITE}]`}
        onPress={onPress}>
        <View style={tw`flex-1 mr-6`}>
          <TextSemiBold15 numberOfLines={1} style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>
            {title}
          </TextSemiBold15>
          <View style={tw`h-1.25`} />
          <TextRegular20 numberOfLines={1}>{value}</TextRegular20>
        </View>
        {isVerified && (
          <TextRegular12 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>Verified</TextRegular12>
        )}
        <View style={tw`w-4`} />
        <Image source={IMAGES.ARROW_RIGHT_GREEN} resizeMode="contain" />
      </Pressable>
    );
  };
  return (
    <SuggaaScreen header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`w-full items-center p-0.5`}>
        <View style={tw`h-3`} />
        <ProfilePicture defaultImage={require('../../assets/icon.png')} setPickedImage={() => {}} />
        <View style={tw`h-15`} />
        {PressableView('Full Name', 'Anurag Gautam', () => navigation.navigate('UpdateNameScreen'))}
        {PressableView('Phone Number', '+91 9570919010', () =>
          navigation.navigate('UpdatePhoneNumberScreen')
        )}
        {PressableView(
          'Email',
          'anuraggautamsharma@suggaa.com',
          () => navigation.navigate('UpdateEmailScreen'),
          true
        )}
        <View style={tw`h-5.25`} />
        <NavigateIconButton
          onPress={() => {
            navigation.navigate('FavoritesLocationScreen');
          }}
          isRed={false}
          title="Favourite Location"
          icon={IMAGES.HEART}
        />
        <View style={tw`h-5.25`} />
        <NavigateIconButton
          onPress={() => {
            navigation.navigate('EmergencyContactScreen');
          }}
          isRed
          title="Emergency Contacts"
          icon={IMAGES.EMERGENCY}
        />
      </ScrollView>
    </SuggaaScreen>
  );
}
