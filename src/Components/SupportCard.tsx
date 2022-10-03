import moment from 'moment';
import React from 'react';
import { Pressable, View, Image, PressableProps } from 'react-native';
import tw from 'twrnc';

import TextMedium15 from '../Typography/TextMedium15';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type props = PressableProps & {
  imageUrl: string;
  onPress: () => void;
  values: {
    date: Date;
    fare: string;
    vehicleType: 'BIKE' | 'CAR' | 'AUTO';
    location: string;
    status: 'Completed' | 'Ongoing' | 'Cancelled' | 'Scheduled';
  };
};
export default function SupportCard({ imageUrl, onPress, values }: props) {
  const getColor = (color: typeof values.status): string => {
    let textColor = COLORS.BLACK;
    switch (color) {
      case 'Completed':
        textColor = COLORS.SPANISH_VIRIDIAN;
        break;
      case 'Scheduled':
        textColor = COLORS.YELLOW_ORANGE;
        break;
      case 'Ongoing':
        textColor = COLORS.SPANISH_VIRIDIAN;
        break;
      case 'Cancelled':
        textColor = COLORS.LUST_RED;
        break;
    }
    return textColor;
  };

  return (
    <Pressable
      style={tw`bg-[${COLORS.WHITE}] pl-3 mx-0.5 py-5 rounded-1.25 shadow-md`}
      onPress={onPress}>
      <View style={tw`w-full flex-row`}>
        <Image style={tw`w-11.65 h-11.65 mt-2 rounded-full`} source={{ uri: imageUrl }} />
        <View style={tw`ml-4 flex-1`}>
          <View style={tw`flex-row items-center justify-between `}>
            <TextMedium15 style={tw`text-[${COLORS.BLACK}]`}>
              {moment(values.date).format('ddd, MMM DD, hh:mm A')}
            </TextMedium15>
            <TextRegular12 style={tw`pr-3 text-[${getColor(values.status)}]`}>
              {values.status}
            </TextRegular12>
          </View>
          <TextMedium15 style={tw`text-[${COLORS.BLACK}]`}>₹{values.fare}</TextMedium15>
          <TextRegular15 style={tw` text-[${COLORS.BLACK}]`}>{values.vehicleType}</TextRegular15>
          <TextRegular15 style={tw`text-[${COLORS.BLACK}]`}>{values.location}</TextRegular15>
          <View style={tw`w-full border-0.25 border-[${COLORS.LIGHT_GRAY_BORDER}] mt-3.5`} />
        </View>
        <View style={tw`flex-row `} />
      </View>
      <View style={tw`flex-row mt-4 px-5 w-full`}>
        <TextSemiBold15>View All Rides</TextSemiBold15>
        <View style={tw`flex-1`} />
        <Image source={IMAGES.ARROW_RIGHT_BLACK} />
      </View>
    </Pressable>
  );
}
