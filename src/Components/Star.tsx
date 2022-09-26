import React from 'react';
import { Image, LayoutChangeEvent, Pressable, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import tw from 'twrnc';

import * as IMAGES from '../config/images';
interface Props {
  setRating: (rating: number) => void;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  isEnabled: boolean;
}

export default function SuggaaStarRating({ rating, setRating }: Props) {
  const [dimension, setdimension] = React.useState({ x: 0, y: 0, width: 0, height: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const starWidth = dimension.width / 5;
  const onLayout = (event: LayoutChangeEvent) => {
    setdimension(event.nativeEvent.layout);
  };

  return (
    <PanGestureHandler
      onGestureEvent={(event) =>
        dimension.width / event.nativeEvent.x < dimension.width &&
        dimension.width / event.nativeEvent.x > dimension.width - event.nativeEvent.x * 1.25
          ? setRating(5)
          : dimension.width / event.nativeEvent.x < dimension.width - event.nativeEvent.x &&
            dimension.width / event.nativeEvent.x > dimension.width - event.nativeEvent.x * 2
          ? setRating(4)
          : dimension.width / event.nativeEvent.x < dimension.width - event.nativeEvent.x * 2 &&
            dimension.width / event.nativeEvent.x > dimension.width - event.nativeEvent.x * 3
          ? setRating(3)
          : dimension.width / event.nativeEvent.x < dimension.width - event.nativeEvent.x * 3 &&
            dimension.width / event.nativeEvent.x > dimension.width - event.nativeEvent.x * 4
          ? setRating(2)
          : dimension.width / event.nativeEvent.x < dimension.width - event.nativeEvent.x * 4 &&
            dimension.width / event.nativeEvent.x > 0
          ? setRating(1)
          : setRating(1)
      }>
      <View
        onLayout={onLayout}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <Pressable key={i} onPress={() => setRating(ratingValue)}>
              <Image
                key={i}
                style={tw`h-8 w-8`}
                source={i < rating ? IMAGES.STAR_FILLED : IMAGES.STAR_UNFILLED}
              />
            </Pressable>
          );
        })}
      </View>
    </PanGestureHandler>
  );
}
