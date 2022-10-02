import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import RoutePoints from '../Components/RoutePoints';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextRegular12 from '../Typography/TextRegular12';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const RideIssueScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SuggaaScreen header>
      <View style={tw`h-42 shadow-md overflow-hidden w-full bg-[${COLORS.WHITE}] rounded-1.25`}>
        <MapView
          region={{
            latitude: 12.91659,
            longitude: 77.52076,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          provider={PROVIDER_GOOGLE}
          style={tw`w-full h-full absolute`}>
          <SuggaaMarker
            noTransForm
            image={IMAGES.PICKUP_MARKER}
            coordinate={{ latitude: 12.91659, longitude: 77.52076 }}
          />
          <SuggaaMarker
            noTransForm
            image={IMAGES.DROP_MARKER}
            coordinate={{ latitude: 12.9145, longitude: 77.52 }}
          />
        </MapView>
        <TextRegular12 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}] absolute left-5 bottom-2.5`}>
          Completed
        </TextRegular12>
      </View>
      <View style={tw`h-7.5`} />
      <RoutePoints
        route={[
          { address: 'Birsa Munda Airport, Ranchi, Hurlung, ...', type: 'pickup' },
          { address: 'Birsa Munda Airport, Ranchi, Hurlung, ...', type: 'drop' },
        ]}
      />
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-5`} />
      <View style={tw`flex-row justify-between`}>
        <TextSemiBold15>Tues, Aug 02, 12:15 AM</TextSemiBold15>
        <TextSemiBold15>₹ 117</TextSemiBold15>
      </View>
      <View style={tw`flex-1`} />
      <View style={tw`flex-row`}>
        <View style={tw`flex-1`}>
          <SuggaaButton text="Support" buttonType="BORDER" onPress={() => {}} />
        </View>
        <View style={tw`w-5`} />
        <View style={tw`flex-1`}>
          <SuggaaButton text="Support" buttonType="BORDER" onPress={() => {}} />
        </View>
      </View>
    </SuggaaScreen>
  );
};

export default RideIssueScreen;
