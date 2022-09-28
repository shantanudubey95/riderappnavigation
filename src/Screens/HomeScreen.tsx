import * as Location from 'expo-location';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { View, StatusBar, Platform, Pressable, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import BottomSheet from '../Components/BottomSheet';
import HamburgerIcon from '../Components/HamburgerIcon';
import PickAndDropInput from '../Components/PickAndDropInput';
import SuggaaMarker from '../Components/SuggaaMarker';
import TextBold22 from '../Typography/TextBold22';
import TextMedium15 from '../Typography/TextMedium15';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
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
  const [selected, setSelected] = React.useState('City');
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
      Location.getCurrentPositionAsync().then((result) => {
        setLocation({ ...result?.coords });
        goToInitialLocation({ ...result?.coords, latitudeDelta: 0.005, longitudeDelta: 0.005 });
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
      initialRegion['longitudeDelta'] = 0.00912;
      map?.current?.animateToRegion(initialRegion, 2000);
    }
  }
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center justify-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <MapView
        // followsUserLocation
        zoomEnabled
        provider={PROVIDER_GOOGLE}
        // onMapReady={goToInitialLocation}
        initialRegion={myLocation && { ...myLocation, latitudeDelta: 5, longitudeDelta: 5 }}
        // showsMyLocationButton
        ref={map}
        style={tw`w-full h-full`}>
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
          Platform.OS === 'android'
            ? StatusBar?.currentHeight
              ? StatusBar?.currentHeight / 3
              : `15`
            : `15`
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
      <BottomSheet onPress={() => goToInitialLocation()} navigation={navigation} scrollable={false}>
        <View style={tw`flex-row w-full`}>
          <Pressable
            onPress={() => setSelected('City')}
            style={tw`flex-1 items-center justify-center border-b-2 border-[${
              selected === 'City' ? COLORS.SPANISH_VIRIDIAN : COLORS.WHITE
            }]`}>
            {selected === 'City' ? (
              <Image source={IMAGES.CITY_SELECTED} />
            ) : (
              <Image source={IMAGES.CITY_UNSELECTED} />
            )}

            {selected === 'City' ? (
              <TextBold22 style={[tw`text-[${COLORS.SPANISH_VIRIDIAN}] mb-3 `, { top: -8 }]}>
                City
              </TextBold22>
            ) : (
              <TextMedium15 style={[tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`, { top: -8 }]}>
                City
              </TextMedium15>
            )}
          </Pressable>

          <Pressable
            onPress={() => setSelected('OutStation')}
            style={tw`flex-1 items-center justify-center border-b-2 border-[${
              selected === 'OutStation' ? COLORS.SPANISH_VIRIDIAN : COLORS.WHITE
            }]`}>
            {selected === 'OutStation' ? (
              <>
                <Image source={IMAGES.OUTSTATION_SELECTED} />
                <TextBold22 style={[tw`text-[${COLORS.SPANISH_VIRIDIAN}] mb-3`, { top: -8 }]}>
                  Outstations
                </TextBold22>
              </>
            ) : (
              <>
                <Image source={IMAGES.OUTSTATION_UNSELECTED} />
                <TextMedium15 style={[tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`, { top: -8 }]}>
                  Outstations
                </TextMedium15>
              </>
            )}
          </Pressable>
        </View>
        <TextMedium15 style={tw`mt-4 ml-5`}>Good Morning, Anurag</TextMedium15>
        {selected === 'City' ? (
          <TextSemiBold22 style={tw`ml-5`}>Where are you going?</TextSemiBold22>
        ) : (
          <TextSemiBold22 style={tw`ml-5`}>Moving out of city?</TextSemiBold22>
        )}
        <Pressable
          onPress={() => {
            navigation.navigate('EnterDestinationScreen');
          }}
          style={tw`mx-4 mt-6 px-3 h-12 rounded-md flex-row bg-[${COLORS.WHITE}] shadow-md items-center justify-start`}>
          <Image source={IMAGES.SEARCH_ICON} />
          <TextRegular15 style={tw`mx-4 text-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            Search Drop Location
          </TextRegular15>
        </Pressable>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
