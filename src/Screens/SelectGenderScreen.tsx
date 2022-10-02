import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

import DateInput from '../Components/DateInput';
import SelectGender from '../Components/SelectGender';
import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import TextSemiBold15 from '../Typography/TextSemiBold15';

const SelectGenderScreen = ({ navigation }: { navigation: any }) => {
  const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
  return (
    <SuggaaScreen header>
      <TextSemiBold15>How would you like to be addressed?</TextSemiBold15>
      <View style={tw`h-5`} />
      <View style={tw`w-full flex-row`}>
        <SelectGender
          title="Him"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'Him'}
        />
        <View style={tw`w-4`} />
        <SelectGender
          title="Her"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'Her'}
        />
      </View>
      <View style={tw`h-4`} />
      <View style={tw`w-3/4`}>
        <SelectGender
          title="I prefer not to say"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'I prefer not to say'}
        />
      </View>
      <TextSemiBold15 style={tw`mt-17.5`}>When do you like to be wished?</TextSemiBold15>
      <View style={tw`h-4`} />
      <DateInput setDate={() => {}} />
      <TextSemiBold15 style={tw`mt-17.5`}>Do you have a referral code?</TextSemiBold15>
      <View style={tw`flex-1`} />
      <SuggaaButton
        text="Next"
        buttonType={selectedCheckBox ? 'FILLED' : 'DISABLED'}
        onPress={() => {
          navigation.navigate('EnterReferralScreen');
        }}
      />
    </SuggaaScreen>
  );
};

export default SelectGenderScreen;
