import BottomSheet, { useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';
import React from 'react';
import { Platform, StatusBar, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

// import BottomModal from '../Components/BottomModel';
import PressableButton from '../Components/PressableButton';
import SuggaButton from '../Components/SuggaaButton';
import SuggaaImageButton from '../Components/SuggaaImageButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import VehicleWithFareCard from '../Components/VehicleWithFareCard';
import * as IMAGES from '../config/images';
import CustomBackdrop from './BD';
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
  const map = React.useRef(null);
  const initialSnapPoints = React.useMemo(() => ['CONTENT_HEIGHT'], []);
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const { animatedHandleHeight, animatedContentHeight } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const snapPoint = React.useMemo(() => ['60%'], []);
  const snapPoints = React.useMemo(() => [1, '50%'], []);
  const handlePresentPress = React.useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleDismiss = React.useCallback(() => {
    // alert('Modal Been Dismissed');
  }, []);

  const sheetStyle = React.useMemo(
    () => ({
      backgroundColor: 'white',
      borderTopStartRadius: 24,
      borderTopEndRadius: 24,
      shadowColor: 'rgba(0, 0, 0, 1)',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.75,
      shadowRadius: 16.0,
      elevation: 24,
    }),
    []
  );

  // const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
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
      <BottomSheet handleIndicatorStyle={tw`bg-white`} snapPoints={snapPoint} style={sheetStyle}>
        <VehicleWithFareCard
          vehicleType="Book any"
          duration="0"
          fare={120120}
          onPress={() => handlePresentPress()}
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
      <BottomSheet
        ref={bottomSheetRef}
        onClose={handleDismiss}
        snapPoints={snapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        // handleComponent={renderHeaderHandle}
        backdropComponent={CustomBackdrop}
        handleIndicatorStyle={tw`bg-white`}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>fhb e ru yvb r k qn qoi dnw duw bdh qbd wv vu qgy dinxj wq</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default SelectRideScreen;
