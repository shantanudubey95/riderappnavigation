import React from 'react';
import { Text, TextProps } from 'react-native';

import { fontPixel } from '../utils/Normalize';
type Props = TextProps;

export default function TextSemiBold18(props: Props) {
  return (
    <Text
      {...props}
      style={[{ fontSize: fontPixel(18), fontFamily: 'Poppins_600SemiBold' }, props.style]}>
      {props.children}
    </Text>
  );
}
