import React from 'react';
import { View, Image, Pressable } from 'react-native';
import tw from 'twrnc';

import TextMedium15 from '../Typography/TextMedium15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type props = {
  vehicleType: 'Sedan' | 'Mini' | 'Auto' | 'Scooter' | 'Bike' | 'Book any';
  duration: string;
  fare: number;
  onPress: () => void;
};

export default function VehicleWithFareCard({ vehicleType, duration, fare, onPress }: props) {
  function getVehicleType() {
    switch (vehicleType) {
      case 'Sedan':
        return IMAGES.SEDAN;
      case 'Mini':
        return IMAGES.HATCH_BACK;
      case 'Auto':
        return IMAGES.RICKSHAW;
      case 'Scooter':
        return IMAGES.SCOOTER;
      case 'Bike':
        return IMAGES.BIKE;
      case 'Book any':
        return IMAGES.SEDAN;
    }
  }

  return (
    <Pressable
      style={tw`bg-[${COLORS.WHITE}] flex-row items-center justify-center px-5`}
      onPress={onPress}>
      <Image resizeMode="contain" source={getVehicleType()} style={tw`h-15 w-15`} />
      <View style={tw`flex-row flex-1 mt-2 ml-3.75`}>
        <View style={tw``}>
          <TextMedium15>{vehicleType}</TextMedium15>
        </View>
        {/* <Text numberOfLines={1} style={tw`text-[${COLORS.BLACK}] text-3.37 text-[${COLORS.LIGHT_GRAY_BORDER}]`}>{duration} min</Text> */}
        <View style={tw`flex-1`} />
        <TextMedium15>₹{fare}</TextMedium15>
        <Pressable style={tw`ml-2.75 bottom-1`}>
          <Image source={IMAGES.INFO_GREY} />
        </Pressable>
      </View>
    </Pressable>
  );
}
