import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import AnimatedBottomSheet from '../Components/AnimatedBottomSheet';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaCheckBox from '../Components/SuggaaCheckBox';
import SuggaaMarker from '../Components/SuggaaMarker';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
type location = {
  latitude: number;
  longitude: number;
};
const CancelRideScreen = ({
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
      <AnimatedBottomSheet scrollable>
        <View style={tw`flex-1 p-5`}>
          <TextSemiBold22>Please tell us why you want to cancel</TextSemiBold22>
          <TextRegular15 style={tw`mt-2`}>Cancellation fee may be charged</TextRegular15>
          <Pressable style={tw`w-full mt-4 items-center h-8 flex-row`}>
            <SuggaaCheckBox isActive />
            <TextRegular15 style={tw`ml-4`}>Plan changed</TextRegular15>
          </Pressable>
          <Pressable style={tw`w-full mt-2 items-center h-8 flex-row`}>
            <SuggaaCheckBox isActive={false} />
            <TextRegular15 style={tw`ml-4`}>Driver wants cash</TextRegular15>
          </Pressable>
          <Pressable style={tw`w-full mt-2 items-center h-8 flex-row`}>
            <SuggaaCheckBox isActive={false} />
            <TextRegular15 style={tw`ml-4`}>Driver</TextRegular15>
          </Pressable>
          <Pressable style={tw`w-full mt-2 items-center h-8 flex-row`}>
            <SuggaaCheckBox isActive={false} />
            <TextRegular15 style={tw`ml-4`}>Driver denied to go to destination</TextRegular15>
          </Pressable>
          <Pressable style={tw`w-full mt-2 items-center h-8 flex-row`}>
            <SuggaaCheckBox isActive={false} />
            <TextRegular15 style={tw`ml-4`}>My reason is not listed</TextRegular15>
          </Pressable>
          <View style={tw`w-full mt-4 flex-row justify-around`}>
            <SuggaaButton buttonType="BORDER" text="Don't Cancel" onPress={() => {}} />
            <SuggaaButton buttonType="FILLED" text="Cancel Ride" onPress={() => {}} />
          </View>
        </View>
      </AnimatedBottomSheet>
    </View>
  );
};

export default CancelRideScreen;
