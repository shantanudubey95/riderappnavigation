import LottieView from 'lottie-react-native';
import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import tw from 'twrnc';

import * as COLORS from '../config/colors';
const SplashScreen = ({ navigation }: { navigation: any }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomeScreen');
    }, 500);
  }, []);
  const ANIMATION = require('../../assets/logoIntro.json');
  const [, setAnimationFinished] = React.useState(false);
  return (
    <SafeAreaView style={tw`flex-1 bg-[${COLORS.WHITE}]`}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <View style={tw`flex-1 bg-[${COLORS.WHITE}] justify-center`}>
        <LottieView
          onAnimationFinish={() => setAnimationFinished(true)}
          autoPlay
          source={ANIMATION}
          loop={false}
          style={{ width: 196, alignSelf: 'center', position: 'absolute' }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
