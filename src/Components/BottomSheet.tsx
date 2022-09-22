import React from 'react';
import { Dimensions, View, Image, Pressable } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import tw from 'twrnc';

// import DriverDetails from './DriverDetails';
// import Payment from './PaymentMethod';
// import InputSearchLocation from '../Components/InputSearchLocation';
// import PressableButton from '../Components/PressableButton';
// import RideDetails from './RideDetails';
import TextBold22 from '../Typography/TextBold22';
import TextMedium15 from '../Typography/TextMedium15';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

const BottomSheet = ({ navigation, scrollable }: { navigation: any; scrollable: boolean }) => {
  const [selected, setSelected] = React.useState('City');
  const translateY = useSharedValue(0);
  const scrollTo = React.useCallback((destination: number) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50 });
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
    scrollTo(-SCREEN_HEIGHT / 2.2);
  }, []);

  const BottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={scrollable ? gesture : undefined}>
      <Animated.View
        style={[
          tw`absolute w-full h-${SCREEN_HEIGHT} bg-white rounded-md shadow-lg`,
          { top: SCREEN_HEIGHT },
          BottomSheetStyle,
        ]}>
        <View
          style={tw`w-15 h-1.25 bg-[${COLORS.LIGHT_GRAY_BORDER}] self-center my-2.25 rounded-md`}
        />
        <View style={tw`flex-row w-full`}>
          <Pressable
            onPress={() => setSelected('City')}
            style={tw`flex-1 items-center justify-center border-b-2 border-[${
              selected === 'City' ? COLORS.SPANISH_VIRIDIAN : COLORS.WHITE
            }]`}>
            {selected === 'City' ? (
              <Image source={IMAGES.CITY_SELECTED} />
            ) : (
              <Image source={IMAGES.CITY_UNSELECTED} />
            )}

            {selected === 'City' ? (
              <TextBold22 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}] mb-3`}>City</TextBold22>
            ) : (
              <TextMedium15 style={tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`}>City</TextMedium15>
            )}
          </Pressable>

          <Pressable
            onPress={() => setSelected('OutStation')}
            style={tw`flex-1 items-center justify-center border-b-2 border-[${
              selected === 'OutStation' ? COLORS.SPANISH_VIRIDIAN : COLORS.WHITE
            }]`}>
            {selected === 'OutStation' ? (
              <>
                <Image source={IMAGES.OUTSTATION_SELECTED} />
                <TextBold22 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}] mb-3`}>
                  Outstations
                </TextBold22>
              </>
            ) : (
              <>
                <Image source={IMAGES.OUTSTATION_UNSELECTED} />
                <TextMedium15 style={tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`}>
                  Outstations
                </TextMedium15>
              </>
            )}
          </Pressable>
        </View>
        <TextMedium15 style={tw`mt-4 ml-5`}>Good Morning, Anurag</TextMedium15>
        {selected === 'City' ? (
          <TextSemiBold22 style={tw`ml-5`}>Where are you going?</TextSemiBold22>
        ) : (
          <TextSemiBold22 style={tw`ml-5`}>Moving out of city?</TextSemiBold22>
        )}
        {/* <InputSearchLocation
        imageId={IMAGES.SEARCH_ICON}
        isEditable={false}
        textStyle={tw`flex-1 mx-4 text-[${COLORS.LIGHT_GRAY_BORDER}] text-3.78`}
        style={tw`h-12 mt-3 py-3 px-4.5 flex-row rounded-1.25 items-center self-stretch shadow-md bg-[${COLORS.WHITE}]`}
        placeholder="Search Drop Location"
        onPress={() => alert('Add your function here')} 
        onValue={function (val: string): void {
          throw new Error('Function not implemented.');
        } }      /> */}
        <Pressable
          onPress={() => {
            navigation.navigate('EnterDestinationScreen');
          }}
          style={tw`mx-4 mt-6 px-3 h-12 rounded-md flex-row bg-[${COLORS.WHITE}] shadow-md items-center justify-start`}>
          <Image source={IMAGES.SEARCH_ICON} />
          <TextRegular15 style={tw`mx-4 text-[${COLORS.LIGHT_GRAY_BORDER}]`}>
            Search Drop Location
          </TextRegular15>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheet;
