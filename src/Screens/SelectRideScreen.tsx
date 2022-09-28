import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import BottomSheet from '../Components/BottomSheet';
// import BottomModal from '../Components/BottomModel';
import PressableButton from '../Components/PressableButton';
import SuggaButton from '../Components/SuggaaButton';
import SuggaaImageButton from '../Components/SuggaaImageButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import VehicleWithFareCard from '../Components/VehicleWithFareCard';
import * as IMAGES from '../config/images';
// type FocusLocation = {
//   lat: number;
//   lng: number;
// };
type location = {
  latitude: number;
  longitude: number;
};
const SelectRideScreen = ({
  navigation,
  pickUp,
  drop,
}: {
  pickUp?: location;
  drop?: location;
  navigation: any;
}) => {
  // const initialState = {
  //   showModal: true,
  //   address: '',
  //   pickUp: {} as FocusLocation,
  //   drop: {} as FocusLocation,
  //   suggestedAddresses: [],
  // };
  const map = React.useRef(null);
  // const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
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
      <View
        style={tw`absolute top-[${
          Platform.OS === 'android'
            ? StatusBar?.currentHeight
              ? StatusBar?.currentHeight / 3
              : `15`
            : `15`
        }] w-full flex-row`}>
        <View style={tw`w-5`} />
        <PressableButton icon={IMAGES.HEADER_BACK_ARROW} onPress={() => navigation.openDrawer()} />
        <View style={tw`w-5`} />
      </View>
      <BottomSheet navigation={navigation} scrollable={false}>
        <VehicleWithFareCard
          vehicleType="Book any"
          duration="0"
          fare={120}
          onPress={() => alert('onPress')}
        />
        <VehicleWithFareCard
          vehicleType="Sedan"
          duration="0"
          fare={120}
          onPress={() => alert('onPress')}
        />
        <VehicleWithFareCard
          vehicleType="Mini"
          duration="0"
          fare={100}
          onPress={() => alert('onPress')}
        />
        <VehicleWithFareCard
          vehicleType="Auto"
          duration="0"
          fare={90}
          onPress={() => alert('onPress')}
        />
        <VehicleWithFareCard
          vehicleType="Bike"
          duration="0"
          fare={80}
          onPress={() => alert('onPress')}
        />
        <View style={tw`flex-row mt-8.25 px-5`}>
          <SuggaaImageButton
            imageId={IMAGES.COUPON}
            buttonType="BORDER"
            text="Coupon"
            onPress={() => navigation.navigate('ApplyCouponScreen')}
          />
          <View style={tw`w-5`} />
          <SuggaaImageButton
            imageId={IMAGES.CASH}
            buttonType="BORDER"
            text="Cash"
            onPress={() => {
              navigation.navigate('SelectPaymentMethodScreen');
            }}
          />
        </View>
        <View style={tw`h-5`} />
        <View style={[tw`w-full px-5`]}>
          <SuggaButton
            buttonType="FILLED"
            text="Book Mini"
            onPress={() => navigation.navigate('ConnectingToDriverScreen')}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default SelectRideScreen;
