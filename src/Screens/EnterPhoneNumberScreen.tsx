import React from 'react';
import { View, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import tw from 'twrnc';

import PhoneNumberTextInput from '../Components/PhoneNumberTextInput';
import SuggaaButton from '../Components/SuggaaButton';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';
type Props = any;
const COUNTRY_CODE = '+91';
export default function EnterPhoneNumberScreen({ navigation }: Props) {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  return (
    <View style={tw`p-5 items-center flex-1 bg-[${COLORS.WHITE}]`}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <View style={tw`h-4`} />
      <PhoneNumberTextInput
        COUNTRY_CODE={COUNTRY_CODE}
        selectionColor={COLORS.SPANISH_VIRIDIAN}
        value={phoneNumber}
        autoFocus
        onChangeText={(text) => setPhoneNumber(text)}
        // style={tw`w-full items-center flex-row border-2 border-[#04825C] rounded-md h-12 px-4`}
      />
      <View style={tw`h-6`} />
      <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}] text-center`}>
        We will send an OTP to{'\n'}verify your number
      </TextRegular15>
      <View style={tw`flex-1`} />
      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // Fix this keyboard
        keyboardVerticalOffset={110}>
        {phoneNumber.length > 9 ? (
          <SuggaaButton
            text="Next"
            buttonType="FILLED"
            onPress={() =>
              navigation.navigate('EnterOTPScreen', {
                phoneNumber,
              })
            }
          />
        ) : (
          <SuggaaButton text="Next" buttonType="DISABLED" onPress={() => {}} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
