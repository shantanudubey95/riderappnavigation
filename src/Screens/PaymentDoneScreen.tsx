import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';

const PaymentDoneScreen = ({ navigation }: { navigation: any }) => {
  const ANIMATION = require('../../assets/tick.json');
  const [, setAnimationFinished] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('PaymentScreen');
    }, 2000);
  });
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={tw`mt-11.5 h-37.5 w-37.5`}>
        <LottieView
          onAnimationFinish={() => setAnimationFinished(true)}
          autoPlay
          source={ANIMATION}
          loop={false}
          style={tw`flex-1`}
        />
      </View>
      <TextSemiBold15>
        Payment of{' '}
        <TextSemiBold15 style={tw`text-[${COLORS.SPANISH_VIRIDIAN}]`}>₹117</TextSemiBold15> received
      </TextSemiBold15>
    </View>
  );
};

export default PaymentDoneScreen;
