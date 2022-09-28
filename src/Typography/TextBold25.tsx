import React from 'react';
import { Text, TextProps } from 'react-native';

import { fontPixel } from '../utils/Normalize';
type Props = TextProps;

export default function TextBold25(props: Props) {
  return (
    <Text
      {...props}
      style={[{ fontSize: fontPixel(25), fontFamily: 'Poppins_700Bold' }, props.style]}>
      {props.children}
    </Text>
  );
}
