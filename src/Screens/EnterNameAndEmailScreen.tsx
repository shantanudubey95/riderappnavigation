import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';

const EnterNameAndEmailScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  // const [error, setError] = React.useState<string | null>(null);
  return (
    <SuggaaScreen header>
      <SuggaaTextInput
        value={name}
        label="Full name"
        // errorText={"error"}
        onChangeText={(text) => setName(text)}
        selectionColor={COLORS.SPANISH_VIRIDIAN}
        autoComplete="name"
        keyboardType="default"
        autoCapitalize="words"
      />
      <View style={tw`h-8`} />
      <SuggaaTextInput
        value={email}
        label="Email"
        // errorText={error}
        onChangeText={(text) => setEmail(text)}
        selectionColor={COLORS.SPANISH_VIRIDIAN}
        autoComplete="email"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <View style={tw`mt-6 items-center justify-center`}>
        <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>
          We will use these details
        </TextRegular15>
        <View style={tw`h-0.75`} />
        <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>for billing and support</TextRegular15>
      </View>

      <View style={tw`flex-1`} />

      <SuggaaButton
        text="Next"
        buttonType={name && email ? 'FILLED' : 'DISABLED'}
        onPress={() => {
          navigation.navigate('SelectGenderScreen');
        }}
      />

      {/* <View style={tw`h-4`} /> */}
    </SuggaaScreen>
  );
};

export default EnterNameAndEmailScreen;
