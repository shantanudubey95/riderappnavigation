import React from 'react';
import { View, Text, Button } from 'react-native';

const RideDetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ride Detail Screen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('RideSupportScreen');
        }}
      />
    </View>
  );
};

export default RideDetailScreen;
