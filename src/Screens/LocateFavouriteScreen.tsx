import * as Location from 'expo-location';
import React, { useState, useRef } from 'react';
import { View, StatusBar, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import BottomModal from '../Components/BottomModel';
import PickAndDropInput from '../Components/PickAndDropInput';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaCheckBox from '../Components/SuggaaCheckBox';
import SuggaaMarker from '../Components/SuggaaMarker';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

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

const LocateFavouriteScreen = ({
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
  const [showModal, setShowModal] = React.useState(false);
  // const [myLocation, setLocation] = useState<location>();
  const map = useRef(null);
  // const transform = useMemo(() => {
  //   return withAnchorPoint(
  //     { transform: [{ rotateZ: `${rotate} deg` }] },
  //     { x: 0.5, y: 0.5 },
  //     { width: 60, height: 60 }
  //   );
  // }, [rotate]);
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
        {pickUp && <SuggaaMarker noTransForm image={IMAGES.PICKUP_MARKER} coordinate={pickUp} />}
      </MapView>
      <View style={tw`w-full absolute bg-white items-center`}>
        <View style={tw`w-full top-5 px-5 h-12`}>
          <PickAndDropInput
            inputTitle="Pickup"
            clearInput={() => setStartAddress('')}
            inputText={startAddress}
            onValueChange={setStartAddress}
          />
        </View>
      </View>
      <View style={tw`w-full pb-10 px-5 pt-5 absolute bottom-0 bg-white`}>
        <SuggaaButton
          text="Confirm Location"
          onPress={() => {
            setShowModal(true);
          }}
          buttonType="FILLED"
        />
      </View>
      {showModal ? (
        <BottomModal
          onClose={() => {
            setShowModal(false);
          }}
          showModal={showModal}
          height="50%">
          <View style={tw`p-5`}>
            <TextSemiBold22>Save as favourite</TextSemiBold22>
            <View style={tw`h-2`} />
            <TextRegular15>
              Zolo Diamond Co-Living | Redefining PG, 5th Main Road Bharath Housing Society Layout
              Subramanyapura Bengaluru...
            </TextRegular15>
            <View style={tw`flex-row mt-5 items-center`}>
              <SuggaaCheckBox isActive />
              <View style={tw`w-2`} />
              <TextRegular15>Home</TextRegular15>
              <View style={tw`flex-1`} />
              <SuggaaCheckBox isActive={false} />
              <View style={tw`w-2`} />
              <TextRegular15>Work</TextRegular15>
              <View style={tw`flex-1`} />
              <SuggaaCheckBox isActive={false} />
              <View style={tw`w-2`} />
              <TextRegular15>Other</TextRegular15>
            </View>
            <View style={tw`h-5`} />
            <SuggaaTextInput label="Name your Favourite" />
          </View>
        </BottomModal>
      ) : null}
    </View>
  );
};

export default LocateFavouriteScreen;