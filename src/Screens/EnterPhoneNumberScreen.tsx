import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import PhoneNumberTextInput from '../Components/PhoneNumberTextInput';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';
type Props = any;
const COUNTRY_CODE = '+91';
export default function EnterPhoneNumberScreen({ navigation }: Props) {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  return (
    <SuggaaScreen header>
      <View style={tw`h-2`} />
      <PhoneNumberTextInput
        COUNTRY_CODE={COUNTRY_CODE}
        selectionColor={COLORS.SPANISH_VIRIDIAN}
        value={phoneNumber}
        autoFocus
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <View style={tw`h-6`} />
      <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}] text-center`}>
        We will send an OTP to{'\n'}verify your number
      </TextRegular15>
      <View style={tw`flex-1`} />
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
      {/* <View style={tw`h-4`} /> */}
    </SuggaaScreen>
  );
}
