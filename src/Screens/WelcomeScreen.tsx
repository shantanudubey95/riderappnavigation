import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Image, SafeAreaView, StatusBar, Pressable } from 'react-native';
import tw from 'twrnc';

import TextRegular12 from '../Typography/TextRegular12';
import TextRegular20 from '../Typography/TextRegular20';
import TextSemiBold22 from '../Typography/TextSemiBold22';
import * as COLORS from '../config/colors';
const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const ANIMATION = require('../../assets/OnboardingAnimation.json');
  const [, setAnimationFinished] = React.useState(false);
  return (
    <>
      <SafeAreaView style={tw`flex-0 bg-[${COLORS.BRIGHT_GREY}]`} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
        <View style={tw`flex-1 justify-center bg-[#E6F2EF]`}>
          <LottieView
            onAnimationFinish={() => setAnimationFinished(true)}
            autoPlay
            source={ANIMATION}
            loop={false}
            style={tw`h-full`}
          />
        </View>
        <View style={tw`flex-1 bg-[${COLORS.WHITE}] p-5`}>
          <View
            style={tw`flex-1 bg-[${COLORS.WHITE}] flex-col-reverse items-center justify-between`}>
            <View style={tw`w-full`}>
              <TextRegular12 style={tw`text-center`}>
                If you are creating a new account,
                <TextRegular12 style={tw`text-[${COLORS.BLUE}]`}>
                  {' '}
                  Terms & Conditions
                </TextRegular12>{' '}
                and <TextRegular12 style={tw`text-[${COLORS.BLUE}]`}>
                  Privacy Policy
                </TextRegular12>{' '}
                will apply.
              </TextRegular12>
            </View>
            <View style={tw`w-full mt-5`}>
              {/* <SuggaaButton text="Enter Phone Number" buttonType="FILLED" /> */}
              <TextSemiBold22>Enter Phone Number</TextSemiBold22>
              <Pressable
                onPress={() => navigation.navigate('EnterPhoneNumberScreen')}
                style={tw`flex-row w-full bg-[#E6F2EF] rounded-1.25 p-2.25 items-center mt-5`}>
                <Image
                  source={require('../../assets/Flag.png')}
                  style={{ height: 20, width: 33, marginLeft: 7, marginRight: 11 }}
                />
                <TextRegular20>+91</TextRegular20>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;
