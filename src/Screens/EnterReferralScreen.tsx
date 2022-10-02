import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import SuggaaTextInput from '../Components/SuggaaTextInput';
import TextRegular15 from '../Typography/TextRegular15';
import * as COLORS from '../config/colors';

const EnterReferralScreen = ({ navigation }: { navigation: any }) => {
  const [referral, setReferral] = React.useState('');
  //   const [email, setEmail] = React.useState('');
  // const [error, setError] = React.useState<string | null>(null);
  return (
    <SuggaaScreen header>
      <SuggaaTextInput
        value={referral}
        label="Enter Referral Code"
        // errorText={"error"}
        onChangeText={(text) => setReferral(text)}
        selectionColor={COLORS.SPANISH_VIRIDIAN}
        autoComplete="name"
        keyboardType="default"
        autoCapitalize="words"
      />
      <View style={tw`mt-6 items-center justify-center`}>
        <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>
          Your referral partner will earn ₹ 20 when
        </TextRegular15>
        <View style={tw`h-0.75`} />
        <TextRegular15 style={tw`text-[${COLORS.FELDGRAU}]`}>
          you will take your first ride.
        </TextRegular15>
      </View>

      <View style={tw`flex-1`} />

      <SuggaaButton
        text="Next"
        buttonType={referral ? 'FILLED' : 'DISABLED'}
        onPress={() => {
          navigation.navigate('ProfileCreatedSplashScreen');
        }}
      />

      {/* <View style={tw`h-4`} /> */}
    </SuggaaScreen>
  );
};

export default EnterReferralScreen;
