import React from 'react';
import { View, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import FullScreenModal from '../Components/FullScreenModal';
import RoutePoints from '../Components/RoutePoints';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaMarker from '../Components/SuggaaMarker';
import SuggaaScreen from '../Components/SuggaaScreen';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import TextSemiBold18 from '../Typography/TextSemiBold18';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const YourRideDetailScreen = ({ navigation }: { navigation: any }) => {
  const [showModal, setShowModal] = React.useState(false);

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
          <SuggaaButton onPress={() => setShowModal(true)} text="Mail" buttonType="FILLED" />
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
      {showModal && (
        <FullScreenModal showModal={showModal}>
          <View style={tw`w-full px-2.5`}>
            <TextSemiBold18 style={tw`text-center`}>Enter email to send invoice</TextSemiBold18>
            <View style={tw`mt-4.25`} />
            <SuggaaTextInput label="Email" />
            <View style={tw`flex-row mt-9.5`}>
              <View style={tw`flex-1 items-center justify-center`}>
                <TextRegular15
                  onPress={() => setShowModal(false)}
                  style={tw`text-[${COLORS.BLUE}]`}>
                  Cancel
                </TextRegular15>
              </View>
              <View style={tw`flex-1 items-center justify-center`}>
                <TextRegular15 style={tw`text-[${COLORS.BLUE}]`}>Send</TextRegular15>
              </View>
            </View>
          </View>
        </FullScreenModal>
      )}
    </SuggaaScreen>
  );
};

export default YourRideDetailScreen;
