import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

import AnimatedText from '../Components/AnimatedText';
import OTPInputs from '../Components/OTPInputs';
import SuggaaButton from '../Components/SuggaaButton';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
type Props = any;
export default function EnterOTPScreen({ route, navigation }: Props) {
  const { phoneNumber } = route.params;
  const [OTP, setOTP] = React.useState('');
  return (
    <View style={tw`p-5 items-center flex-1 bg-[${COLORS.WHITE}]`}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>An OTP was sent to</TextRegular15>
      <View style={tw`h-0.75`} />
      <TextSemiBold15 style={tw`text-[${COLORS.BLACK}]`}>+91 {phoneNumber}</TextSemiBold15>
      <View style={tw`h-1.75`} />
      <TextRegular15
        onPress={() => {
          navigation.navigate('EnterPhoneNumberScreen');
        }}
        suppressHighlighting
        style={tw`text-[${COLORS.BLUE}]`}>
        Edit phone number
      </TextRegular15>
      <View style={tw`h-4.25`} />
      <OTPInputs numberOfInputs={4} setOTP={setOTP} />
      <View style={tw`flex-1`} />
      <View style={tw`flex-row items-center justify-center`}>
        <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>Resend OTP in</TextRegular15>
        <View style={tw`mr-1`} />
        <AnimatedText size={15} />
      </View>
      <View style={tw`h-5`} />
      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // Fix this keyboard issue
        keyboardVerticalOffset={110}>
        <SuggaaButton
          text="Next"
          buttonType={OTP ? 'FILLED' : 'DISABLED'}
          onPress={() => navigation.navigate('EnterNameAndEmailScreen')}
        />
      </KeyboardAvoidingView>
      <View style={tw`h-5`} />
    </View>
  );
}
