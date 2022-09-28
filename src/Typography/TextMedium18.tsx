import React from 'react';
import { Text, TextProps } from 'react-native';

import { fontPixel } from '../utils/Normalize';
type Props = TextProps;

export default function TextMedium18(props: Props) {
  return (
    <Text
      {...props}
      style={[{ fontSize: fontPixel(18), fontFamily: 'Poppins_500Medium' }, props.style]}>
      {props.children}
    </Text>
  );
}
