import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';

type Props = any;

export default function UpdateEmailScreen({ navigation }: Props) {
  const [email, setEmail] = React.useState('');

  return (
    <SuggaaScreen header>
      <SuggaaTextInput
        style={{
          alignContent: 'center',
          width: '100%',
          borderWidth: 2,
          borderColor: COLORS.SPANISH_VIRIDIAN,
          borderRadius: 5,
          fontSize: 20,
          fontWeight: '400',
          paddingHorizontal: 13,
          paddingVertical: 10,
        }}
        label="Email"
        selectionColor={COLORS.SPANISH_VIRIDIAN}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={tw`h-6`} />
      <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}] text-center`}>
        We will send verification{'\n'}email.
      </TextRegular15>
      <View style={tw`flex-1`} />
      <SuggaaButton
        text="Update"
        buttonType={email ? 'FILLED' : 'DISABLED'}
        onPress={() => navigation.navigate('VerifyEmailScreen', { email })}
      />
    </SuggaaScreen>
  );
}
