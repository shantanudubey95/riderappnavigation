import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import SuggaaMarker from '../Components/SuggaaMarker';
import TextMedium25 from '../Typography/TextMedium25';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
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
  const { bottom: safeBottomArea } = useSafeAreaInsets();
  const initialSnapPoints = React.useMemo(() => ['CONTENT_HEIGHT'], []);
  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const map = React.useRef(null);
  const ANIMATION = require('../../assets/Carsearching.json');
  const [, setAnimationFinished] = React.useState(false);
  const sheetStyle = React.useMemo(
    () => ({
      backgroundColor: 'white',
      borderTopStartRadius: 24,
      borderTopEndRadius: 24,
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.75,
      shadowRadius: 16.0,
      elevation: 24,
      shadowColor: 'black',
    }),
    []
  );
  const contentContainerStyle = React.useMemo(
    () => [styles.contentContainerStyle, { paddingBottom: safeBottomArea || 10 }],
    [safeBottomArea]
  );
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
      <BottomSheet
        handleIndicatorStyle={tw`w-15 bg-[${COLORS.LIGHT_GRAY_BORDER}]`}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        style={sheetStyle}
        enableContentPanningGesture={false}
        enableHandlePanningGesture={false}>
        <BottomSheetView style={contentContainerStyle} onLayout={handleContentLayout}>
          <TextSemiBold22 style={tw`ml-5`}>Connecting you to a driver</TextSemiBold22>
          <TextRegular15 style={tw`mt-2 ml-5`}>
            We usually find ride in less than 2min
          </TextRegular15>
          <View style={tw`w-full items-center flex-1 mt-5`}>
            <View
              style={tw`justify-center border-2 rounded-full border-[${COLORS.SPANISH_VIRIDIAN}] items-center w-30 h-30 `}>
              <LottieView
                onAnimationFinish={() => setAnimationFinished(true)}
                autoPlay
                source={ANIMATION}
                loop
              />
            </View>
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
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default ConnectingToDriverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {},
});
