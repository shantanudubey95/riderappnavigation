import React from 'react';
import { Dimensions, View, Image, Pressable } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import tw from 'twrnc';

import TextBold22 from '../Typography/TextBold22';
import TextMedium15 from '../Typography/TextMedium15';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
import * as IMAGES from '../config/images';
import CurrentLocationButton from './CurrentLocationButton';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

const BottomSheet = ({
  navigation,
  scrollable,
  onPress,
}: {
  navigation: any;
  scrollable: boolean;
  onPress: any;
}) => {
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
    scrollTo(-SCREEN_HEIGHT / 2.5);
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
        <CurrentLocationButton
          style={tw`p-2 w-12 self-end rounded-1.25 bg-[${COLORS.WHITE}] shadow-md top--15 right-5`}
          onPress={onPress}
          ImageId={IMAGES.CURRENT_LOCATION}
        />
        <View
          style={tw`w-15 h-1.25 bg-[${COLORS.LIGHT_GRAY_BORDER}] self-center top--8 rounded-md`}
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
              <TextBold22 style={[tw`text-[${COLORS.SPANISH_VIRIDIAN}] mb-3 `, { top: -8 }]}>
                City
              </TextBold22>
            ) : (
              <TextMedium15 style={[tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`, { top: -8 }]}>
                City
              </TextMedium15>
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
                <TextBold22 style={[tw`text-[${COLORS.SPANISH_VIRIDIAN}] mb-3`, { top: -8 }]}>
                  Outstations
                </TextBold22>
              </>
            ) : (
              <>
                <Image source={IMAGES.OUTSTATION_UNSELECTED} />
                <TextMedium15 style={[tw`text-[${COLORS.LIGHT_GRAY_BORDER}]`, { top: -8 }]}>
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
