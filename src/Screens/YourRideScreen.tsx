import React from 'react';
import { View, Text, Button } from 'react-native';

const YourRideScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Rides Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('RideDetailScreen');
        }}
      />
    </View>
  );
};

export default YourRideScreen;
