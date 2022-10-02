import React from 'react';
import { View, Pressable, Dimensions } from 'react-native';
import { Gesture, GestureDetector, TextInput } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import tw from 'twrnc';

import DriverDetails from '../Components/DriverDetails';
import Payment from '../Components/PaymentMethod';
import PressableButton from '../Components/PressableButton';
import RideDetails from '../Components/RideDetails';
import SuggaaMarker from '../Components/SuggaaMarker';
import TextMedium15 from '../Typography/TextMedium15';
import TextMedium25 from '../Typography/TextMedium25';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
type location = {
  latitude: number;
  longitude: number;
};
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;
const RideDetailScreen = ({
  navigation,
  pickUp,
  drop,
}: {
  pickUp?: location;
  drop?: location;
  navigation: any;
}) => {
  const map = React.useRef(null);
  const translateY = useSharedValue(0);
  const scrollTo = React.useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  React.useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 2.25);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
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
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            tw`absolute w-full h-${SCREEN_HEIGHT} bg-white rounded-md shadow-lg`,
            { top: SCREEN_HEIGHT },
            BottomSheetStyle,
          ]}>
          <View
            style={tw`w-15 h-1.25 bg-[${COLORS.LIGHT_GRAY_BORDER}] self-center my-2.25 rounded-md`}
          />
          <View style={tw`flex-1 mx-4.75`}>
            <TextSemiBold22>Meet at the pickup point</TextSemiBold22>
            <View style={tw`flex-row justify-between items-center my-2`}>
              <TextMedium15>7 min to pickup</TextMedium15>
              <Pressable style={tw`py-1.75 px-8.75 bg-[${COLORS.SPANISH_VIRIDIAN}] rounded-md`}>
                <TextMedium15 style={{ color: 'white' }}>OTP:6520</TextMedium15>
              </Pressable>
            </View>
            <View style={[tw`my-2.5`, { borderWidth: 0.5, borderColor: '#00000040' }]} />
            <View style={tw`w-full h-22.75 mt-6.25`}>
              <DriverDetails
                driver_name="Lillie Thomas"
                car_number="JH05BM544"
                car_name="Swift Desire"
                rating={4.8}
                driver_image=""
              />
            </View>
            <View style={tw`flex-row items-center mt-5 w-full`}>
              <TextInput
                placeholder="Any pickup notes?"
                style={tw`h-12 w-56 bg-white rounded-md shadow-lg px-2.25`}
              />
              <View style={tw`flex-1`} />
              <PressableButton onPress={() => {}} icon={IMAGES.CALL} />
              <View style={tw`w-2`}/>
              <PressableButton onPress={() => {}} icon={IMAGES.SHARE} />
            </View>
            <View
              style={{
                borderWidth: 0.5,
                marginVertical: 10,
                borderColor: '#00000040',
                marginTop: 25,
              }}
            />
            <Pressable
              onPress={() => {
                navigation.navigate('CancelRideScreen');
              }}
              style={tw`w-full h-12 justify-center items-center border-2 border-[${COLORS.LUST_RED}] rounded-md my-5`}>
              <TextMedium25 style={tw` text-[${COLORS.LUST_RED}]`}>Cancel</TextMedium25>
            </Pressable>
            <TextSemiBold22>Trip</TextSemiBold22>
            <RideDetails
              pickup_location="Birsa Munda Airport, Ranchi, Hurlung, ..."
              drop_location="Birsa Munda Airport, Ranchi, Hurlung, ..."
            />
            <Payment
              onPress={() => {
                navigation.navigate('DestinationArrivedScreen');
              }}
              price={121}
            />
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default RideDetailScreen;
