import React from 'react';
import { Dimensions, LayoutChangeEvent, View, Keyboard } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from 'twrnc';

import * as COLORS from '../config/colors';
type Props = {
  navigation?: any;
  scrollable?: boolean;
  children?: any;
};
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;
const BottomSheet = ({ scrollable, navigation, children }: Props) => {
  const [keyboardShown, setKeyboardStatus] = React.useState(false);
  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  React.useEffect(() => {
    if (keyboardShown) translateY.value = withSpring(-SCREEN_HEIGHT, { damping: 50 });
    else translateY.value = withSpring(-SCREEN_HEIGHT / 2, { damping: 50 });
  }, [keyboardShown]);
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
        scrollTo(-40);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });
  // React.useEffect(() => {
  //   scrollTo(-SCREEN_HEIGHT / 2.25);
  // }, []);
  function onLayout(event: LayoutChangeEvent) {
    scrollTo(-event.nativeEvent.layout.height);
  }
  const BottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  const insets = useSafeAreaInsets();
  return (
    <GestureDetector gesture={scrollable ? gesture : undefined}>
      <Animated.View
        style={[
          tw`absolute w-full  bg-white rounded-md shadow-lg`,
          { top: SCREEN_HEIGHT },
          BottomSheetStyle,
        ]}>
        <View
          style={tw`w-15 h-1.25 bg-[${COLORS.LIGHT_GRAY_BORDER}] self-center my-2.25 rounded-md`}
        />
        <View onLayout={onLayout} style={[tw`flex-1`, { paddingBottom: insets.bottom + 20 }]}>
          {children}
        </View>
        <View style={tw`h-[${Dimensions.get('window').height / 2}]`} />
      </Animated.View>
    </GestureDetector>
  );
};
export default BottomSheet;
