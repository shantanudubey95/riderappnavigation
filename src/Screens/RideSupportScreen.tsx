import React from 'react';
import { View, StatusBar, Pressable, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import tw from 'twrnc';

import RoutePoints from '../Components/RoutePoints';
import SuggaaMarker from '../Components/SuggaaMarker';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
const RideSupportScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: '4%' }}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
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
      <View style={tw`h-7.5`} />
      <RoutePoints
        route={[
          { address: 'Birsa Munda Airport, Ranchi, Hurlung, ...', type: 'pickup' },
          { address: 'Birsa Munda Airport, Ranchi, Hurlung, ...', type: 'drop' },
        ]}
      />
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-5`} />
      <View style={tw`flex-row justify-between`}>
        <TextSemiBold15>Tues, Aug 02, 12:15 AM</TextSemiBold15>
        <TextSemiBold15>₹ 117</TextSemiBold15>
      </View>
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-5`} />
      <Pressable
        style={tw`flex-row justify-between items-center`}
        onPress={() => {
          navigation.navigate('RideIssueScreen');
        }}>
        <TextRegular15>Payment Related</TextRegular15>
        <Image source={IMAGES.ARROW_RIGHT_GREEN} style={{ tintColor: COLORS.BLACK }} />
      </Pressable>
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-1.75`} />
      <Pressable
        style={tw`flex-row justify-between items-center`}
        onPress={() => {
          navigation.navigate('RideIssueScreen');
        }}>
        <TextRegular15>Driver Related</TextRegular15>
        <Image source={IMAGES.ARROW_RIGHT_GREEN} style={{ tintColor: COLORS.BLACK }} />
      </Pressable>
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-1.75`} />
      <Pressable
        style={tw`flex-row justify-between items-center`}
        onPress={() => {
          navigation.navigate('RideIssueScreen');
        }}>
        <TextRegular15>Ride Related</TextRegular15>
        <Image source={IMAGES.ARROW_RIGHT_GREEN} style={{ tintColor: COLORS.BLACK }} />
      </Pressable>
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-1.75`} />
      <Pressable
        style={tw`flex-row justify-between items-center`}
        onPress={() => {
          navigation.navigate('RideIssueScreen');
        }}>
        <TextRegular15>Safety</TextRegular15>
        <Image source={IMAGES.ARROW_RIGHT_GREEN} style={{ tintColor: COLORS.BLACK }} />
      </Pressable>
      <View style={tw`h-.25 w-full bg-[${COLORS.LIGHT_GRAY_BORDER}] my-1.75`} />
      <Pressable
        style={tw`flex-row justify-between items-center mt-1.5`}
        onPress={() => {
          navigation.navigate('RideIssueScreen');
        }}>
        <TextRegular15 style={tw`text-[${COLORS.BLUE}]`}>Other Help Topics</TextRegular15>
      </Pressable>
    </View>
  );
};

export default RideSupportScreen;
