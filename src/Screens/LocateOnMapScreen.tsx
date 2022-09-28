/* eslint-disable @typescript-eslint/no-unused-vars */
import { decode } from '@googlemaps/polyline-codec';
import * as Location from 'expo-location';
import React, { useState, useMemo, useRef } from 'react';
import { View, StatusBar, Image, Pressable, Dimensions, Platform } from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import PickAndDropInput from '../Components/PickAndDropInput';
import PressableButton from '../Components/PressableButton';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import { withAnchorPoint } from '../utils/WithAnchorPoint';
import LocationErrorScreen from './LocationErrorScreen';

type region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
type location = {
  latitude: number;
  longitude: number;
};

const LocateOnMapScreen = ({
  navigation,
  pickUp,
  drop,
}: {
  pickUp?: location;
  drop?: location;
  navigation: any;
}) => {
  const [myLocation, setLocation] = useState<location>();
  const [startAddress, setStartAddress] = React.useState('');
  const [rotate, setRotation] = useState(0);
  const [stopAddress, setStopAddress] = React.useState('');
  const [polyLines, setPolyLines] = useState<location[]>([]);

  // const [myLocation, setLocation] = useState<location>();
  // const [rotate, setRotation] = useState(0);
  const map = useRef(null);
  // const transform = useMemo(() => {
  //   return withAnchorPoint(
  //     { transform: [{ rotateZ: `${rotate} deg` }] },
  //     { x: 0.5, y: 0.5 },
  //     { width: 60, height: 60 }
  //   );
  // }, [rotate]);
  const insets = useSafeAreaInsets();
  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      Location.getCurrentPositionAsync().then((result) => {
        setLocation({ ...result?.coords });
        goToInitialLocation({ ...result?.coords, latitudeDelta: 0.005, longitudeDelta: 0.005 });
      });
      Location.watchHeadingAsync((result) => {
        setRotation(result.magHeading);
      });
      getDirection();
    })();
  }, []);
  function goToInitialLocation(region?: region) {
    const initialRegion = region
      ? region
      : myLocation
      ? { ...myLocation, latitudeDelta: 0, longitudeDelta: 0 }
      : null;
    if (initialRegion) {
      initialRegion['latitudeDelta'] = 0.005;
      initialRegion['longitudeDelta'] = 0.00912;
      map?.current?.animateToRegion(initialRegion, 2000);
    }
  }
  function getDirection() {
    fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=12.918510,77.520564&destination=12.929481,77.544475&key=AIzaSyBYkVZ398sQrKfkKccdpRPe_dA57lD3y3w`
    )
      .then((response) => response.json())
      .then((data) => {
        const points = data?.routes[0]?.overview_polyline?.points;
        const decodedPoints = decode(points, 5);
        const coords = decodedPoints.map((point) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        setPolyLines(coords);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <MapView
        // followsUserLocation
        zoomEnabled
        provider={PROVIDER_GOOGLE}
        // onMapReady={goToInitialLocation}
        // initialRegion={myLocation && { ...myLocation, latitudeDelta: 5, longitudeDelta: 5 }}
        // showsMyLocationButton
        ref={map}
        style={tw`h-full w-full`}>
        <SuggaaMarker
          currentLocation
          image={IMAGES.PICKUP_MARKER}
          noTransForm
          coordinate={{ latitude: 12.91851, longitude: 77.520564 }}
        />
        <SuggaaMarker
          image={IMAGES.DROP_MARKER}
          noTransForm
          coordinate={{ latitude: 12.929481, longitude: 77.544475 }}
        />
        {pickUp && <SuggaaMarker noTransForm image={IMAGES.PICKUP_MARKER} coordinate={pickUp} />}
        {drop && <SuggaaMarker noTransForm image={IMAGES.DROP_MARKER} coordinate={drop} />}
        <Polyline coordinates={polyLines} strokeColor={COLORS.BLACK} strokeWidth={2} />
      </MapView>
      <View style={tw`w-full absolute bg-white items-center`}>
        <View style={tw`w-full px-5 h-12`}>
          <PickAndDropInput
            inputTitle="Pickup"
            clearInput={() => setStartAddress('')}
            inputText={startAddress}
            onValueChange={setStartAddress}
          />
        </View>
        <View style={tw`px-5 h-12 mt-3 flex-row`}>
          <PickAndDropInput
            inputTitle="Drop"
            clearInput={() => setStopAddress('')}
            inputText={stopAddress}
            onValueChange={setStopAddress}
          />
          <View style={tw`w-2`} />
          <PressableButton
            icon={IMAGES.ADD}
            onPress={() => {
              navigation.navigate(LocationErrorScreen);
            }}
          />
        </View>
      </View>
      <View style={tw`w-9/10 absolute bottom-10`}>
        <SuggaaButton
          text="Confirm Location"
          onPress={() => {
            navigation.navigate('SelectRideScreen');
          }}
          buttonType="FILLED"
        />
      </View>
    </View>
  );
};

export default LocateOnMapScreen;
