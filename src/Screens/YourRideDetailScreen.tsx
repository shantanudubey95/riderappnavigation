import BottomSheet, {
  BottomSheetTextInput,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import RoutePoints from '../Components/RoutePoints';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import CustomBackdropText from './BDT';
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
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const handlePresentPress = React.useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleDismiss = React.useCallback(() => {
    // alert('Modal Been Dismissed');
  }, []);
  const initialSnapPoints = React.useMemo(() => ['CONTENT_HEIGHT'], []);
  const snapPoints = React.useMemo(() => [1, '50%'], []);
  const { animatedHandleHeight, animatedContentHeight } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);
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
        onClose={handleDismiss}
        snapPoints={snapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        backdropComponent={CustomBackdropText}
        handleIndicatorStyle={tw`bg-white`}>
        <View style={styles.contentContainer}>
          <Text>Awesome</Text>
          <BottomSheetTextInput value="Awesome 🎉" style={styles.textInput} />
        </View>
      </BottomSheet>
    </SuggaaScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'grey',
  },
  sheetContainer: {
    // add horizontal space
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    alignSelf: 'stretch',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
  },
});

export default YourRideDetailScreen;
