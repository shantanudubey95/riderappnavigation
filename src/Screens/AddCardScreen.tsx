import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';

const AddCardScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SuggaaScreen header>
      <TextSemiBold22 style={tw`mb-3`}>Enter card details</TextSemiBold22>
      <TextRegular15>
        We accept Credit and Debit Cards from Visa, Mastercard, Sodexo, American Express, Maestro,
        Rupay & Discover.
      </TextRegular15>
      <View style={tw`h-3`} />
      <SuggaaTextInput label="Name on card" />
      <View style={tw`h-3`} />
      <SuggaaTextInput label="Card number" />
      <View style={tw`h-3`} />
      <SuggaaTextInput label="Expiry date (MM/YY)" />
      <View style={tw`h-3`} />
      <SuggaaTextInput label="Nickname for card" />
      <View style={tw`h-3`} />
      <View style={tw`flex-1`} />
      <TextRegular12>
        I agree to save my card details with card network (e.g. Visa, Mastercard, Rupay, etc.) for
        future payments
      </TextRegular12>
      <View style={tw`h-7`} />
      <SuggaaButton
        text="Add & Secure Card"
        buttonType="FILLED"
        onPress={() => {
          navigation.navigate('Payments');
        }}
      />
    </SuggaaScreen>
  );
};

export default AddCardScreen;
