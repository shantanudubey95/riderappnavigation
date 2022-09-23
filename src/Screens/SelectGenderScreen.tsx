import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

import DateInput from '../Components/DateInput';
import SelectGender from '../Components/SelectGender';
import SuggaaButton from '../Components/SuggaaButton';
import TextSemiBold15 from '../Typography/TextSemiBold15';
import * as COLORS from '../config/colors';

const SelectGenderScreen = ({ navigation }: { navigation: any }) => {
  const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
  return (
    <View style={tw`flex-1 bg-[${COLORS.WHITE}] p-5 pt-7`}>
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
      <TextSemiBold15 style={tw`mt-17.5`}>when do you like to be wished?</TextSemiBold15>
      <View style={tw`h-4`} />
      <DateInput
        onValue={alert}
        color="text-green-600"
        textStyle={[tw`font-bold text-green-600 text-lg text-center tabular-nums`]}
        viewStyle={[
          tw`flex-row py-4 px-8 rounded-2 items-center border-2 border-green-600 self-start`,
        ]}
      />
      <View style={tw`flex-1`} />
      <KeyboardAvoidingView
        style={{ width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // Fix this keyboard issue
        keyboardVerticalOffset={110}>
        <SuggaaButton
          text="Next"
          buttonType={selectedCheckBox ? 'FILLED' : 'DISABLED'}
          onPress={() => {
            navigation.navigate('ProfileCreatedSplashScreen');
          }}
        />
      </KeyboardAvoidingView>
      <View style={tw`h-5`} />
    </View>
  );
};

export default SelectGenderScreen;
