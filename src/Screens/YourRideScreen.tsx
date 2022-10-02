import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import RidesCard from '../Components/RidesCard';
import * as COLORS from '../config/colors';

const YourRideScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView
      bounces={false}
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
        imageUrl="https://picsum.photos/200/300"
      />
      <RidesCard
        onPress={() => {
          navigation.navigate('YourRideDetailScreen');
        }}
        values={{
          date: new Date(),
          fare: '123',
          location: 'some long address huhuhuhuh vugicyuv ti vigycthcr fu crxhx g',
          status: 'Cancelled',
          vehicleType: 'AUTO',
        }}
        imageUrl="https://picsum.photos/200/300"
      />
     
      <RidesCard
        onPress={() => {
          navigation.navigate('YourRideDetailScreen');
        }}
        values={{
          date: new Date(),
          fare: '123',
          location: 'some long another fu Crux g',
          status: 'Scheduled',
          vehicleType: 'AUTO',
        }}
        imageUrl="https://picsum.photos/200/300"
      />
      <RidesCard
        onPress={() => {
          navigation.navigate('YourRideDetailScreen');
        }}
        values={{
          date: new Date(),
          fare: '123',
          location: 'some long another fu Crux g',
          status: 'Scheduled',
          vehicleType: 'AUTO',
        }}
        imageUrl="https://picsum.photos/200/300"
      />
      <RidesCard
        onPress={() => {
          navigation.navigate('YourRideDetailScreen');
        }}
        values={{
          date: new Date(),
          fare: '123',
          location: 'some long another fu Crux g',
          status: 'Scheduled',
          vehicleType: 'AUTO',
        }}
        imageUrl="https://picsum.photos/200/300"
      />
      <RidesCard
        onPress={() => {
          navigation.navigate('YourRideDetailScreen');
        }}
        values={{
          date: new Date(),
          fare: '123',
          location: 'some long another fu Crux g',
          status: 'Scheduled',
          vehicleType: 'AUTO',
        }}
        imageUrl="https://picsum.photos/200/300"
      />
    </ScrollView>
  );
};

export default YourRideScreen;
