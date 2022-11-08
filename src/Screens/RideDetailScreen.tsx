import BottomSheet, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { View, Pressable, LayoutChangeEvent } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import DriverDetails from '../Components/DriverDetails';
import Payment from '../Components/PaymentMethod';
import PressableButton from '../Components/PressableButton';
import RideDetails from '../Components/RideDetails';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaCheckBox from '../Components/SuggaaCheckBox';
import SuggaaMarker from '../Components/SuggaaMarker';
import TextMedium15 from '../Typography/TextMedium15';
import TextMedium25 from '../Typography/TextMedium25';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import CustomBackdrop from './BD';
type location = {
  latitude: number;
  longitude: number;
};
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
  const initialSnapPoints = React.useMemo(() => ['CONTENT_HEIGHT'], []);
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const [snapPoints, setSnapPoints] = React.useState<{ [key: string]: number }>({ 5: 700 });
  const sortedSnapPoints = React.useMemo(
    () => [...Object.values(snapPoints)].filter(Boolean).sort(),
    [snapPoints]
  );
  const { bottom: safeBottomArea } = useSafeAreaInsets();
  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);
  const onLayout = React.useCallback(
    (snapIndexKey: string) =>
      ({
        nativeEvent: {
          layout: { y },
        },
      }: LayoutChangeEvent) => {
        console.log(y, `Snap Index ${snapIndexKey}`);
        setSnapPoints((value) => ({ ...value, [snapIndexKey]: y + 30, 5: 0 }));
      },
    []
  );

  const handlePresentPress = React.useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleDismiss = React.useCallback(() => {
    // alert('Modal Been Dismissed');
  }, []);

  React.useEffect(() => console.log(sortedSnapPoints), [sortedSnapPoints]);
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
    () => [{ paddingBottom: safeBottomArea || 10, paddingHorizontal: 20 }],
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
        snapPoints={sortedSnapPoints}
        style={sheetStyle}
        animateOnMount
        enableContentPanningGesture
        enableHandlePanningGesture>
        <BottomSheetScrollView style={contentContainerStyle}>
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
            <View style={tw`w-2`} />
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
          <View style={tw`w-full h-[1px]`} onLayout={onLayout('beforeCancel')} />
          <Pressable
            onPress={
              () => handlePresentPress()
              // navigation.navigate('CancelRideScreen');
            }
            style={tw`w-full h-12 justify-center items-center border-2 border-[${COLORS.LUST_RED}] rounded-md my-5`}>
            <TextMedium25 style={tw`text-[${COLORS.LUST_RED}]`}>Cancel</TextMedium25>
          </Pressable>
          <View style={tw`w-full h-[1px]`} onLayout={onLayout('afterCancel')} />
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
          <View style={tw`h-3`} />
          <View style={tw`w-full h-[1px]`} onLayout={onLayout('afterPay')} />
        </BottomSheetScrollView>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRef}
        onClose={handleDismiss}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        backdropComponent={CustomBackdrop}
        handleIndicatorStyle={tw`bg-white`}>
        <BottomSheetView style={contentContainerStyle} onLayout={handleContentLayout}>
          <View style={tw`flex-1 px-5`}>
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
            <View style={tw`w-full mt-4 flex-row justify-between`}>
              <SuggaaButton
                buttonType="BORDER"
                text="Don't Cancel"
                onPress={() => {
                  navigation.navigate('RideDetailScreen');
                }}
              />
              <SuggaaButton
                buttonType="FILLED"
                text="Cancel Ride"
                onPress={() => {
                  navigation.navigate('RideDetailScreen');
                }}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default RideDetailScreen;
