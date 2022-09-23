import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import tw from 'twrnc';

import PickAndDropInput from '../Components/PickAndDropInput';
import PressableButton from '../Components/PressableButton';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import LocationErrorScreen from './LocationErrorScreen';
const EnterDestinationScreen = ({ navigation }: { navigation: any }) => {
  const [startAddress, setStartAddress] = React.useState('');
  const [stopAddress, setStopAddress] = React.useState('');
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={tw`w-9/10 h-12 mt-4`}>
        <PickAndDropInput
          inputTitle="Pickup"
          clearInput={() => setStartAddress('')}
          inputText={startAddress}
          onValueChange={setStartAddress}
        />
      </View>
      <View style={tw`w-9/10 h-12 mt-3 flex-row`}>
        <PickAndDropInput
          inputTitle="Drop"
          clearInput={() => setStopAddress('')}
          inputText={stopAddress}
          onValueChange={setStopAddress}
        />
        <View style={tw`w-2`} />
        <PressableButton
          icon={IMAGES.ADD}
          onPress={() => {
            navigation.navigate(LocationErrorScreen);
          }}
        />
      </View>
      <View style={tw`flex-1`} />
      <View
        style={tw`flex-row w-full h-11.5 justify-center items-center border-t-2 shadow-md bg-white border-[${COLORS.LIGHT_GRAY_BORDER}]`}>
        <Image source={IMAGES.LOCATION_POINT} />
        <View style={tw`w-1`} />
        <TextSemiBold15>Locate on map</TextSemiBold15>
      </View>

    </View>
  );
};

export default EnterDestinationScreen;
