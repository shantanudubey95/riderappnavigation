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

export default function UpdatePhoneNumberScreen({ navigation }: Props) {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  return (
    <SuggaaScreen header>
      <PhoneNumberTextInput
        COUNTRY_CODE={COUNTRY_CODE}
        selectionColor={COLORS.SPANISH_VIRIDIAN}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={tw`w-full items-center flex-row border-2 border-[${COLORS.SPANISH_VIRIDIAN}] rounded-md h-12 px-4`}
      />
      <View style={tw`h-6`} />
      <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}] text-center`}>
        We will send an OTP to{'\n'}verify your number
      </TextRegular15>
      <View style={tw`flex-1`} />
      <SuggaaButton
        text="Update"
        buttonType={phoneNumber ? 'FILLED' : 'DISABLED'}
        onPress={() => navigation.navigate('AccountScreen', { phoneNumber })}
      />
    </SuggaaScreen>
  );
}
