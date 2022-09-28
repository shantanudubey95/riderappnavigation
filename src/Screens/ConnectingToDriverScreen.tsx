import React from 'react';
import { View, Image, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import AnimatedBottomSheet from '../Components/AnimatedBottomSheet';
import SuggaaMarker from '../Components/SuggaaMarker';
import TextMedium25 from '../Typography/TextMedium25';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import BottomSheet from '../Components/BottomSheet';
type location = {
  latitude: number;
  longitude: number;
};
const ConnectingToDriverScreen = ({
  navigation,
  pickUp,
  drop,
}: {
  pickUp?: location;
  drop?: location;
  navigation: any;
}) => {
  const map = React.useRef(null);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView
        // followsUserLocation
        zoomEnabled
        provider={PROVIDER_GOOGLE}
        // onMapReady={goToInitialLocation}
        // initialRegion={myLocation && { ...myLocation, latitudeDelta: 5, longitudeDelta: 5 }}
        // showsMyLocationButton
        ref={map}
        style={tw`h-full w-full`}>
        {pickUp && <SuggaaMarker noTransForm image={IMAGES.PICKUP_MARKER} coordinate={pickUp} />}
        {drop && <SuggaaMarker noTransForm image={IMAGES.DROP_MARKER} coordinate={drop} />}
      </MapView>
      <BottomSheet navigation={navigation} scrollable={false}>

        <TextSemiBold22 style={tw`mt-8 ml-5`}>Connecting you to a driver</TextSemiBold22>
        <TextRegular15 style={tw`mt-2 ml-5`}>We usually find ride in less than 2min</TextRegular15>
        <View style={tw`justify-center items-center`}>
          <Image source={IMAGES.CONNECT_RIDE} style={tw`mt-5`} />
        </View>
        <View style={tw`px-4 mt-5`}>
          <Pressable
            onPress={() => {
              navigation.navigate('RideDetailScreen');
            }}
            style={tw`w-full h-12 justify-center items-center border-2 border-[${COLORS.LUST_RED}] rounded-md`}>
            <TextMedium25 style={tw` text-[${COLORS.LUST_RED}]`}>Cancel</TextMedium25>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ConnectingToDriverScreen;
