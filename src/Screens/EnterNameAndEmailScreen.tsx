import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';

const EnterNameAndEmailScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  // const [error, setError] = React.useState<string | null>(null);
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] w-full p-5 pt-6 items-center`}>
      <View style={tw`w-full mb-7`}>
        <SuggaaTextInput
          // autoFocus
          style={
            // tw`content-center w-full border-2 border-[${COLORS.SPANISH_VIRIDIAN}] rounded-1.75 text-xl font-normal px-3 py-2.5`
            {
              alignContent: 'center',
              width: '100%',
              borderWidth: 2,
              borderColor: COLORS.SPANISH_VIRIDIAN,
              borderRadius: 5,
              fontSize: 20,
              fontWeight: '400',
              paddingHorizontal: 13,
              paddingVertical: 10,
            }
          }
          value={name}
          label="Full name"
          // errorText={error}
          onChangeText={(text) => setName(text)}
          selectionColor={COLORS.SPANISH_VIRIDIAN}
          autoComplete="name"
          keyboardType="default"
          autoCapitalize="words"
        />
      </View>
      <View style={tw`w-full mb-7`}>
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
          value={email}
          label="Email"
          // errorText={error}
          onChangeText={(text) => setEmail(text)}
          selectionColor={COLORS.SPANISH_VIRIDIAN}
          autoComplete="email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
      <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>We will use these details</TextRegular15>
      <View style={tw`h-0.75`} />
      <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>for billing and support</TextRegular15>
      <View style={tw`flex-1`} />
      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // Fix this keyboard issue
        keyboardVerticalOffset={110}>
        <SuggaaButton
          text="Next"
          buttonType={name && email ? 'FILLED' : 'DISABLED'}
          onPress={() => {
            navigation.navigate('SelectGenderScreen');
          }}
        />
      </KeyboardAvoidingView>
      <View style={tw`h-5`} />
    </View>
  );
};

export default EnterNameAndEmailScreen;
