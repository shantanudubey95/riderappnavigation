import React from 'react';
import { View, Text, Button } from 'react-native';

const RideSupportScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ride Support Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('YourRideScreen');
        }}
      />
    </View>
  );
};

export default RideSupportScreen;
