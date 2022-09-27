import React from 'react';
import { View, Text, Button } from 'react-native';

const YourRideDetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>YourRideDetailScreen</Text>
      <Button
        title="Navigate to next screen"
        onPress={() => {
          navigation.navigate('RideSupportScreen');
        }}
      />
    </View>
  );
};

export default YourRideDetailScreen;
