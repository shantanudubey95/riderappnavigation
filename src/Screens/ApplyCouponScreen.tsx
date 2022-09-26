import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import tw from 'twrnc';

import CouponCard from '../Components/CouponCard';
import SuggaButton from '../Components/SuggaaButton';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';

export default function ApplyCouponScreen({ navigation }: { navigation: any }) {
  return (
    <View style={tw`p-5 pb-0 flex-1 bg-[${COLORS.WHITE}]`}>
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
        label="Enter Coupon Code"
        //   errorText={error}
        selectionColor={COLORS.SPANISH_VIRIDIAN}
      />
      <View style={tw`my-3.75`}>
        <TextSemiBold22>Available Coupons</TextSemiBold22>
      </View>
      <FlatList
        ItemSeparatorComponent={() => <View style={tw`h-5.5`} />}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 4]}
        renderItem={() => (
          <CouponCard
            title="Suggaa"
            description="Get 30% OFF up to ₹25"
            validity="Valid of trips worth ₹100 or more."
            applyAction={() => alert('add here')}
          />
        )}
      />
      <View style={tw`my-5`}>
        <SuggaButton
          buttonType="FILLED"
          text="Apply Coupon Code"
          onPress={() => {
            navigation.navigate('SelectRideScreen');
          }}
        />
      </View>
    </View>
  );
}
