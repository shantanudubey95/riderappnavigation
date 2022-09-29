import React from 'react';
import { Image, Pressable, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import PickAndDropInput from '../Components/PickAndDropInput';
import TextRegular12 from '../Typography/TextRegular12';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

type Props = any;

export default function SelectFavouriteLocationScreen({ navigation }: Props) {
  const [startAddress, setStartAddress] = React.useState('');
  // const map = useRef(null);
  const insets = useSafeAreaInsets();
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] items-center`}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={tw`w-full  bg-white items-center`}>
        <View style={tw`w-full px-5 h-12`}>
          <PickAndDropInput
            inputTitle="Pickup"
            clearInput={() => setStartAddress('')}
            inputText={startAddress}
            onValueChange={setStartAddress}
          />
        </View>
      </View>
      <View style={tw`mt-6 h-12 w-full px-5 items-center flex-row`}>
        <Image source={IMAGES.PAST_TIMER} style={tw`h-5 w-5`} />
        <View style={tw`w-2.5`} />
        <View style={tw` w-9/10`}>
          <TextRegular15>RR Nagar Complex</TextRegular15>
          <TextRegular12 style={tw`text-[${COLORS.SPANISH_GREY}]`}>
            Remco Bhel Layout Kenchenhalli RR Nagar Be...
          </TextRegular12>
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('LocateFavouriteScreen');
        }}
        style={[
          tw`flex-row w-full py-3 absolute bottom-0 justify-center items-center shadow-lg bg-white`,
          { paddingBottom: insets.bottom },
        ]}>
        <Image source={IMAGES.LOCATION_POINT} />
        <View style={tw`w-1`} />
        <TextSemiBold15>Locate on map</TextSemiBold15>
      </Pressable>
    </View>
  );
}
