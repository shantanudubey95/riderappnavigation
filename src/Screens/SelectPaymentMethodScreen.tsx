import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaCheckBox from '../Components/SuggaaCheckBox';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const SelectPaymentMethodScreen = ({ navigation }: { navigation: any }) => {
  const insets = useSafeAreaInsets();
  return (
    <SuggaaScreen header>
      <TextSemiBold22>UPI</TextSemiBold22>
      <Pressable style={tw`w-full mt-4 items-center h-8 flex-row`}>
        <SuggaaCheckBox isActive />
        <Image style={tw`ml-4 h-8 w-8 mr-2.25`} source={IMAGES.GPAY} />
        <TextRegular15>GPay</TextRegular15>
      </Pressable>
      <View
        style={{
          width: '80%',
          borderWidth: 0.5,
          marginLeft: '12%',
          marginVertical: '4%',
          borderColor: COLORS.LIGHT_GRAY_BORDER,
        }}
      />
      <Pressable style={tw`w-full items-center h-8 flex-row`}>
        <SuggaaCheckBox isActive={false} />
        <Image style={tw`ml-4 h-8 w-8 mr-2.25`} source={IMAGES.PHONEPAY} />
        <TextRegular15>Phonepe</TextRegular15>
      </Pressable>
      <TextSemiBold22 style={tw`mt-10`}>Cash</TextSemiBold22>
      <Pressable style={tw`w-full mt-4 items-center h-8 flex-row`}>
        <SuggaaCheckBox isActive={false} />
        <Image style={tw`ml-4 h-8 w-8 mr-2.25`} source={IMAGES.CASH} />
        <TextRegular15>Cash</TextRegular15>
      </Pressable>
      <TextSemiBold22 style={tw`mt-10`}>Card</TextSemiBold22>
      <Pressable style={tw`w-full mt-4 items-center h-8 flex-row`}>
        <SuggaaCheckBox isActive={false} />
        <Image style={tw`ml-4 h-8 w-8 mr-2.25`} source={IMAGES.WALLET} />
        <TextRegular15>Add a Credit/Debit Card</TextRegular15>
      </Pressable>
      <View style={tw`flex-1`} />
      <SuggaaButton
        style={{ paddingBottom: insets.bottom || 20 }}
        buttonType="FILLED"
        onPress={() => {
          navigation.navigate('SelectRideScreen');
        }}
        text="Confirm Payment Method"
      />
    </SuggaaScreen>
  );
};

export default SelectPaymentMethodScreen;
