import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import tw from 'twrnc';

import DriverDetails from '../Components/DriverDetails';
import SuggaaButton from '../Components/SuggaaButton';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import SuggaaScreen from '../Components/SuggaaScreen';

const DestinationArrivedScreen = ({ navigation }: { navigation: any }) => {
  const payCards = (name: string, value?: string, bolder?: boolean, color?: string) => {
    return (
      <View style={tw`flex-row items-center mb-3.75`}>
        <View style={tw`flex-1`}>
          {bolder ? (
            <TextSemiBold15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>
              {name}
            </TextSemiBold15>
          ) : (
            <TextRegular15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>{name}</TextRegular15>
          )}
        </View>
        {bolder ? (
          <TextSemiBold15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>
            {value}
          </TextSemiBold15>
        ) : (
          <TextRegular15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>{value}</TextRegular15>
        )}
      </View>
    );
  };
  return (
    // <SafeAreaView style={tw`flex-1 bg-[${COLORS.WHITE}]`}>
    //   <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
    // <View style={tw`px-4 pt-10 flex-1`}>
    <SuggaaScreen header={false}>
      <TextSemiBold22 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>
        Destination Arrived
      </TextSemiBold22>
      <View style={[tw`my-2.5`, { borderWidth: 0.5, borderColor: '#00000040' }]} />
      <View style={tw`w-full h-22.75 mt-2`}>
        <DriverDetails
          driver_name="Lillie Thomas"
          car_number="JH05BM544"
          car_name="Swift Desire"
          rating={4.8}
          driver_image=""
        />
      </View>
      <View style={tw`h-10`} />
      {payCards('Payment Mode', '', true, COLORS.SPANISH_VIRIDIAN)}
      {payCards('Bill Details', '', true, COLORS.BLACK)}
      {payCards('Ride Fare', '₹ 94.5', false, COLORS.BLACK)}
      {payCards('Total Platform Charges', '₹ 29.91', false, COLORS.BLACK)}
      {payCards('Coupon Savings', '₹ 0.00', false, COLORS.BLACK)}
      {payCards('Taxes', '₹ 7.93', false, COLORS.BLACK)}
      {payCards('Total', '₹ 117.93', true, COLORS.BLACK)}
      <View style={tw`flex-1`} />
      <SuggaaButton
        onPress={() => {
          navigation.navigate('ProcessingPaymentScreen');
        }}
        text="Pay ₹ 117.93 by PhonePe"
        buttonType="FILLED"
      />
      <TextSemiBold18 style={tw`text-[${COLORS.BLUE}] text-center mt-5`}>
        Pay with cash
      </TextSemiBold18>
    </SuggaaScreen>
  );
};

export default DestinationArrivedScreen;
