import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { Platform, StatusBar, View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

// import BottomModal from '../Components/BottomModel';
import PressableButton from '../Components/PressableButton';
import SuggaButton from '../Components/SuggaaButton';
import SuggaaImageButton from '../Components/SuggaaImageButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import VehicleWithFareCard from '../Components/VehicleWithFareCard';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
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
  const { bottom: safeBottomArea } = useSafeAreaInsets();
  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const snapPoints = React.useMemo(() => [1, '40%'], []);
  const handlePresentPress = React.useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleDismiss = React.useCallback(() => {
    // alert('Modal Been Dismissed');
  }, []);

  const sheetStyle = React.useMemo(
    () => ({
      backgroundColor: 'white',
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

  const contentContainerStyle = React.useMemo(
    () => [styles.contentContainerStyle, { paddingBottom: safeBottomArea || 10 }],
    [safeBottomArea]
  );

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
      <BottomSheet
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}
        handleIndicatorStyle={tw`bg-white`}
        snapPoints={animatedSnapPoints}
        style={sheetStyle}>
        <BottomSheetView style={contentContainerStyle} onLayout={handleContentLayout}>
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
        </BottomSheetView>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRef}
        onClose={handleDismiss}
        snapPoints={snapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        backdropComponent={CustomBackdrop}
        handleIndicatorStyle={tw`bg-white`}>
        <BottomSheetView style={contentContainerStyle} onLayout={handleContentLayout}>
          <View style={tw`flex-1 px-5`}>
            <TextSemiBold22>Book Any. Rs. 122- Rs. 177</TextSemiBold22>
            <View style={tw`w-full border-[0.5px] mt-3 border-[${COLORS.LIGHT_GRAY_BORDER}]`} />
            <View style={tw`w-full justify-between flex-row mt-3`}>
              <TextRegular15>Base Fare</TextRegular15>
              <TextRegular15>Rs. 67</TextRegular15>
            </View>
            <View style={tw`w-full justify-between flex-row mt-3`}>
              <TextRegular15>Minimum fare</TextRegular15>
              <TextRegular15>Rs. 67</TextRegular15>
            </View>
            <View style={tw`w-full justify-between flex-row mt-3`}>
              <TextRegular15>Per kilometer fare</TextRegular15>
              <TextRegular15>Rs. 67</TextRegular15>
            </View>
            <View style={tw`w-full justify-between flex-row mt-3`}>
              <TextRegular15>Per minute fare</TextRegular15>
              <TextRegular15>Rs. 67</TextRegular15>
            </View>
            <View style={tw`w-full justify-between flex-row mt-3`}>
              <TextRegular15>Surcharges</TextRegular15>
              <TextRegular15>Rs. 67</TextRegular15>
            </View>
            <View style={tw`w-full border-[0.5px] my-3 border-[${COLORS.LIGHT_GRAY_BORDER}]`} />
            <TextRegular12>
              Price may vary if you change pickup or drop location, toll area. ₴7.3/km till 5 km,
              79.5/km from 5 km to 10 km, $11.5/km above 10 kms.
            </TextRegular12>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default SelectRideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainerStyle: {
    paddingBottom: 6,
  },
});
