import * as Location from 'expo-location';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { View, Dimensions, StatusBar, Platform } from 'react-native';
import MapView from 'react-native-maps';
import tw from 'twrnc';

import BottomSheet from '../Components/BottomSheet';
import CurrentLocationButton from '../Components/CurrentLocationButton';
import HamburgerIcon from '../Components/HamburgerIcon';
import PickAndDropInput from '../Components/PickAndDropInput';
import SuggaaMarker from '../Components/SuggaaMarker';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import { withAnchorPoint } from '../utils/WithAnchorPoint';

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
const HomeScreen = ({
  pickUp,
  drop,
  navigation,
}: {
  pickUp?: location;
  drop?: location;
  navigation: any;
}) => {
  const [stopAddress, setStopAddress] = React.useState('');
  const [rotate, setRotation] = useState(0);
  const [myLocation, setLocation] = useState<location>();
  const map = useRef(null);
  const transform = useMemo(() => {
    return withAnchorPoint(
      { transform: [{ rotateZ: `${rotate} deg` }] },
      { x: 0.5, y: 0.5 },
      { width: 60, height: 60 }
    );
  }, [rotate]);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      Location.watchPositionAsync({}, (result) => {
        setLocation({ ...result?.coords });
      });
      Location.watchHeadingAsync((result) => {
        setRotation(result.magHeading);
      });
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
      initialRegion['longitudeDelta'] = 0.005;
      map?.current?.animateToRegion(initialRegion, 2000);
    }
  }
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center justify-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <MapView
        // followsUserLocation
        zoomEnabled
        provider="google"
        // onMapReady={goToInitialLocation}
        // initialRegion={myLocation && { ...myLocation, latitudeDelta: 5, longitudeDelta: 5 }}
        showsMyLocationButton
        ref={map}
        style={tw`w-[${Dimensions.get('window').width}] h-[${Dimensions.get('window').width}]`}>
        {myLocation && (
          <SuggaaMarker
            currentLocation
            noTransForm
            transformObj={transform}
            image={IMAGES.MY_LOCATION_MARKER}
            coordinate={{ latitude: myLocation?.latitude, longitude: myLocation?.longitude }}
          />
        )}
        {pickUp && <SuggaaMarker noTransForm image={IMAGES.PICKUP_MARKER} coordinate={pickUp} />}
        {drop && <SuggaaMarker noTransForm image={IMAGES.DROP_MARKER} coordinate={drop} />}
        <SuggaaMarker
          transformObj={transform}
          image={IMAGES.BIKE_MARKER}
          coordinate={{ latitude: 12.9162028, longitude: 77.5210518 }}
        />
        <SuggaaMarker
          transformObj={transform}
          image={IMAGES.AUTO_MARKER}
          coordinate={{ latitude: 12.91688410763785, longitude: 77.52073296875786 }}
        />
        <SuggaaMarker
          transformObj={transform}
          image={IMAGES.HATCH_MARKER}
          coordinate={{ latitude: 12.916733188211659, longitude: 77.52006352433035 }}
        />
      </MapView>
      <View
        style={tw`absolute top-[${
          Platform.OS === 'android' ? StatusBar?.currentHeight / 3 : `2`
        }] w-full flex-row`}>
        <View style={tw`w-5`} />
        <HamburgerIcon
          ImageId={IMAGES.HAMBURGER_ICON}
          style={tw`p-2 self-start rounded-1.25 bg-[${COLORS.WHITE}] shadow-md`}
          onPress={() => navigation.openDrawer()}
        />
        <View style={tw`w-4`} />
        <PickAndDropInput
          inputTitle="Pickup"
          clearInput={() => setStopAddress('')}
          inputText={stopAddress}
          onValueChange={setStopAddress}
        />
        <View style={tw`w-5`} />
      </View>
      <View style={tw`absolute right-5 top-75`}>
        <CurrentLocationButton
          style={tw`p-2 self-start rounded-1.25 bg-[${COLORS.WHITE}] shadow-md`}
          onPress={() => goToInitialLocation()}
          ImageId={IMAGES.CURRENT_LOCATION}
        />
      </View>
      <BottomSheet navigation={navigation} scrollable={false} />
    </View>
  );
};

export default HomeScreen;
