import BottomSheet, {
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { View, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import RoutePoints from '../Components/RoutePoints';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import TextSemiBold20 from '../Typography/TextSemiBold20';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const YourRideDetailScreen = ({ navigation }: { navigation: any }) => {
  const payCards = (name: string, value?: string, bolder?: boolean, color?: string) => {
    return (
      <View style={tw`flex-row items-center mb-3.75`}>
        <View style={tw`flex-1`}>
          {bolder ? (
            <TextSemiBold15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>
              {name}
            </TextSemiBold15>
          ) : (
            <TextRegular15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>{name}</TextRegular15>
          )}
        </View>
        {bolder ? (
          <TextSemiBold15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>
            {value}
          </TextSemiBold15>
        ) : (
          <TextRegular15 style={tw`text-[${color ? color : COLORS.BLACK}]`}>{value}</TextRegular15>
        )}
      </View>
    );
  };
  const bottomSheetRef = React.useRef<BottomSheetModal>(null);
  const initialSnapPoints = React.useMemo(() => ['CONTENT_HEIGHT'], []);

  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const handlePresentPress = React.useCallback(() => {
    bottomSheetRef.current!.expand();
  }, []);
  const handleClosePress = React.useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <SuggaaScreen header>
      <View style={tw`h-42 shadow-md overflow-hidden w-full bg-[${COLORS.WHITE}] rounded-1.25`}>
        <MapView
          region={{
            latitude: 12.91659,
            longitude: 77.52076,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          provider={PROVIDER_GOOGLE}
          style={tw`w-full h-full absolute`}>
          <SuggaaMarker
            noTransForm
            image={IMAGES.PICKUP_MARKER}
            coordinate={{ latitude: 12.91659, longitude: 77.52076 }}
          />
          <SuggaaMarker
            noTransForm
            image={IMAGES.DROP_MARKER}
            coordinate={{ latitude: 12.9145, longitude: 77.52 }}
          />
        </MapView>
        <TextRegular12 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}] absolute left-5 bottom-2.5`}>
          Completed
        </TextRegular12>
      </View>
      <View style={tw`h-7.25`} />
      <Pressable onPress={() => navigation.navigate('RideDetails')}>
        <RoutePoints
          route={[
            { address: 'Birsa Munda Airport, Ranchi, Hurlung, ...', type: 'pickup' },
            { address: 'Birsa Munda Airport, Ranchi, Hurlung, ...', type: 'drop' },
          ]}
        />
      </Pressable>
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-5`} />
      {payCards('Pay Mode', 'Cash', true, COLORS.SPANISH_VIRIDIAN)}
      {payCards('Bill Detail')}
      {payCards('Ride Fare', '₹ 94.5')}
      {payCards('Total Platform Charges', '₹ 94.5')}
      {payCards('Coupon Savings', '₹ 94.5')}
      {payCards('Taxes', '₹ 94.5')}
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] mb-2.25`} />

      {payCards('Total Payable', '₹ 117', true)}
      <View style={tw`flex-1`} />
      <View style={tw`flex-row`}>
        <View style={tw`flex-1`}>
          <SuggaaButton onPress={() => handlePresentPress()} text="Mail" buttonType="FILLED" />
        </View>
        <View style={tw`w-5`} />
        <View style={tw`flex-1`}>
          <SuggaaButton
            onPress={() => {
              navigation.navigate('RideSupportScreen');
            }}
            text="Support"
            buttonType="BORDER"
          />
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        bottomInset={300}
        enablePanDownToClose
        style={{
          marginHorizontal: 16,
          backgroundColor: 'white',
          borderRadius: 16,
          shadowColor: 'rgba(0,0,0,0.25)',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.25,
          shadowRadius: 16.0,

          elevation: 24,
        }}
        backgroundComponent={null}
        detached>
        <BottomSheetView onLayout={handleContentLayout}>
          <View style={tw`px-5`}>
            <TextSemiBold20>Enter email to send invoice</TextSemiBold20>
            <View style={tw`h-4`} />
            <BottomSheetTextInput
              style={{
                marginTop: 8,
                marginBottom: 10,
                borderRadius: 10,
                fontSize: 16,
                lineHeight: 20,
                padding: 8,
                backgroundColor: 'rgba(151, 151, 151, 0.25)',
              }}
            />
            <View style={tw`h-8`} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TextRegular15 onPress={handleClosePress} style={tw`text-[${COLORS.BLUE}]`}>
                Cancel
              </TextRegular15>
              <TextRegular15 onPress={handleClosePress} style={tw`text-[${COLORS.BLUE}]`}>
                Send
              </TextRegular15>
            </View>
            <View style={tw`h-4`} />
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SuggaaScreen>
  );
};

export default YourRideDetailScreen;
