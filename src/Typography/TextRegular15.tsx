import React from 'react';
import { Text, TextProps } from 'react-native';

import { fontPixel } from '../utils/Normalize';
type Props = TextProps;

export default function TextRegular15(props: Props) {
  return (
    <Text
      {...props}
      style={[{ fontSize: fontPixel(15), fontFamily: 'Poppins_400Regular' }, props.style]}>
      {props.children}
    </Text>
  );
}
