import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';

const AddUpiScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SuggaaScreen header>
      <TextSemiBold22 style={tw`mb-3`}>Add UPI ID</TextSemiBold22>
      <TextRegular15>
        This virtual payment address will be used only for your payments.
      </TextRegular15>
      <View style={tw`h-3`} />
      <SuggaaTextInput label="Enter UPI handle" />
      <View style={tw`h-3`} />
      <TextRegular15>Your UPI ID will be encrypted and 100% safe with us.</TextRegular15>
      <View style={tw`flex-1`} />
      <SuggaaButton
        text="Authenticate"
        buttonType="FILLED"
        onPress={() => {
          navigation.navigate('Payments');
        }}
      />
    </SuggaaScreen>
  );
};

export default AddUpiScreen;
