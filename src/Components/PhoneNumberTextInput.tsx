// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import type { TextInputProps } from 'react-native';

// import tw from "twrnc";
import * as IMAGES from '../config/images';
type props = TextInputProps & {
  COUNTRY_CODE: string;
};
export default function PhoneNumberTextInput(props: props) {
  return (
    <View style={props.style}>
      <Image source={require('../../assets/Flag.png')} style={{ height: 20, width: 33 }} />
      <Text style={{ fontSize: 20, marginLeft: 11 }}>{props.COUNTRY_CODE}</Text>
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
          height: '100%',
          marginLeft: 17,
          fontSize: 20,
          flex: 1,
        }}
      />
      <Pressable
        onPress={() => {
          props.onChangeText?.('');
        }}>
        {props.value && <Image source={IMAGES.CLEAR_INPUT} style={{ height: 26, width: 33 }} />}
      </Pressable>
    </View>
  );
}
