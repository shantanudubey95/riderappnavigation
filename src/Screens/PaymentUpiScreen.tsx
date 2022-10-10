import React from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';

import SuggaaScreen from '../Components/SuggaaScreen';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as IMAGES from '../config/images';

const PaymentUpiScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SuggaaScreen header>
      <View style={tw`flex-row items-center justify-between mb-3`}>
        <TextSemiBold22>Gpay</TextSemiBold22>
        <Image source={IMAGES.GPAY} />
      </View>
      <TextRegular15>
        Phonepe can be used for payments on Suggaa. You can choose between wallet, cards, and UPI
        which you have registered on Phonepe. You will get a collect request on Phonepe app if vou
        chose UPI while payment.
      </TextRegular15>
    </SuggaaScreen>
  );
};

export default PaymentUpiScreen;
