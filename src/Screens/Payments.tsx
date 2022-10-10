import React from 'react';
import tw from 'twrnc';

import PaymentCard from '../Components/PaymentCard';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as IMAGES from '../config/images';

const Payments = ({ navigation }: { navigation: any }) => {
  return (
    <SuggaaScreen header>
      <TextSemiBold22 style={tw`mb-3`}>UPI</TextSemiBold22>
      <PaymentCard
        image={IMAGES.GPAY}
        payment="Gpay"
        onPress={() => {
          navigation.navigate('PaymentUpiScreen');
        }}
      />
      <PaymentCard
        image={IMAGES.PHONEPAY}
        payment="PhonePe"
        onPress={() => {
          navigation.navigate('PaymentUpiScreen');
        }}
      />
      <PaymentCard
        image={IMAGES.UPI}
        payment="Add UPI ID"
        onPress={() => {
          navigation.navigate('AddUpiScreen');
        }}
      />
      <TextSemiBold22 style={tw`my-3`}>Card</TextSemiBold22>
      <PaymentCard
        image={IMAGES.WALLET}
        payment="Add a Credit/Debit Card"
        onPress={() => {
          navigation.navigate('AddCardScreen');
        }}
      />
      <TextSemiBold22 style={tw`my-3`}>Cash</TextSemiBold22>
      <PaymentCard
        image={IMAGES.CASH}
        payment="Cash"
        onPress={() => {
          navigation.navigate('AddCashScreen');
        }}
      />
    </SuggaaScreen>
  );
};

export default Payments;
