import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import RidesCard from '../Components/RidesCard';
import * as COLORS from '../config/colors';

const YourRideScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: '4%',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <RidesCard
        onPress={() => {
          navigation.navigate('YourRideDetailScreen');
        }}
        values={{
          date: new Date(),
          fare: '123',
          location: 'some long address',
          status: 'Completed',
          vehicleType: 'AUTO',
        }}
        // viewStyle={`border-b flex-1 ml-7  pb-3.75 pr-5 border-[${COLORS.LIGHT_GRAY_BORDER}] `}
        imageUrl="https://picsum.photos/200/300"
        // imageStyle="w-11.65 h-11.65 rounded-11.25"
      />
    </ScrollView>
  );
};

export default YourRideScreen;
