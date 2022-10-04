import React from 'react';
import { FlatList, View } from 'react-native';
import tw from 'twrnc';

import SuggaaButton from '../Components/SuggaaButton';
import SuggaaScreen from '../Components/SuggaaScreen';
import SupportCard from '../Components/SupportCard';
import TextRegular15 from '../Typography/TextRegular15';
import TextSemiBold22 from '../Typography/TextSemiBold22';

const SupportScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SuggaaScreen header>
      <TextSemiBold22>Need help with rides?</TextSemiBold22>
      <TextRegular15 style={tw`mt-2`}>
        Select a ride to get help with your billing, driver or other ride related issues.
      </TextRegular15>
      <View style={tw`h-3`} />
      <FlatList
        data={[1, 2, 3, 4]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={tw`h-4`} />}
        renderItem={() => (
          <SupportCard
            onPress={() => {}}
            values={{
              date: new Date(),
              fare: '123',
              location: 'some long address',
              status: 'Completed',
              vehicleType: 'AUTO',
            }}
            imageUrl="https://picsum.photos/200/300"
          />
        )}
      />
      <SuggaaButton buttonType="FILLED" text="Chat with us" onPress={() => {}} />
    </SuggaaScreen>
  );
};

export default SupportScreen;
