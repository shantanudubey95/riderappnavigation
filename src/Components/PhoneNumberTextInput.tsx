import * as React from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import type { TextInputProps } from 'react-native';
import tw from 'twrnc';

import * as IMAGES from '../config/images';
import { fontPixel } from '../utils/Normalize';
type props = TextInputProps & {
  COUNTRY_CODE: string;
};
export default function PhoneNumberTextInput(props: props) {
  return (
    <View style={tw`w-full flex-row border-2 border-[#04825C] rounded-1.25 items-center h-12 px-4`}>
      <Image source={require('../../assets/Flag.png')} style={tw`h-5 w-8.25`} />
      <View style={{ marginTop: 3, marginLeft: 10 }}>
        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
            fontSize: fontPixel(20),
          }}>
          {props.COUNTRY_CODE}
        </Text>
      </View>
      <View style={tw`flex-1 mt-0.75 ml-2.5`}>
        <TextInput
          value={props.value}
          {...props}
          autoComplete="tel"
          textContentType="telephoneNumber"
          keyboardType="number-pad"
          maxLength={10}
          hitSlop={{
            left: 50,
            top: 15,
            bottom: 15,
            right: 50,
          }}
          style={{
            fontFamily: 'Poppins_400Regular',
            fontSize: fontPixel(20),
            flex: 1,
          }}
        />
      </View>
      <Pressable
        onPress={() => {
          props.onChangeText?.('');
        }}>
        {props.value && <Image source={IMAGES.CLEAR_INPUT} />}
      </Pressable>
    </View>
  );
}
